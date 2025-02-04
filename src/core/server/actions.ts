"use server"

import { connectDB } from "@/core/server/lib/db";
import { IProject, IProjectDocument, ProjectModel } from "@/core/server/models/project";
import { createProjectSchema } from "./schemas";
import { cookies } from "next/headers";
import { validateUserByToken } from "./middlewares/validateUserByToken";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function getProjectsAction(queryObj: Partial<IProject>,page: number, limit: number) {
  await connectDB();
  
  const projects = await ProjectModel.find(queryObj) 
    .select("-_id")
    .sort({ listing_priority: -1 }) 
    .skip((page - 1) * limit)
    .limit(limit)
    .lean<IProject[]>(); 
    
  const totalCount = await ProjectModel.countDocuments(queryObj);

  return {
    projects,
    total_pages: Math.ceil(totalCount / limit),
    current_page: page,
  }
}


export async function createProjectAction(payload: z.infer<typeof createProjectSchema>) {
  await connectDB();
  const token = (await cookies()).get("access_token")?.value

  if (!token) 
  return {
    data: null,
    success: false,
    message: "no token provided"
  }

  const isValid = await validateUserByToken(token)
  
  if (!isValid) 
  return {
    data: null,
    success: false,
    message: "invalid user provided"
  }

  const { error } = createProjectSchema.safeParse(payload)

  if (error) 
  return {
    data: null,
    success: false,
    message: error.message
  }

  const project: IProjectDocument = await ProjectModel.create(payload)
  await project.save()

  revalidatePath("/","page")
  
  return {
    data: null,
    success: true,
    message: "project created successfully"
  }
}