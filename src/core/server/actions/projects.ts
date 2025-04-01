"use server"

import { connectDB } from "@/core/server/lib/db";
import { IProject, IProjectDocument, ProjectModel } from "@/core/server/models/project";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";
import { createProjectSchema } from "../schemas";
import { validateUserByToken } from "../middlewares/validateUserByToken";


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

export async function getProjectAction(projectId: string) {
  await connectDB();
  
  const project = await ProjectModel.findOne({ uuid: projectId }) 
    .select("-_id")
    .lean<IProject>(); 
    
  return project
}


export async function createProjectAction({ token, payload }:{
  token: string,
  payload: z.infer<typeof createProjectSchema>
}) {
  await connectDB();

  const isValid = validateUserByToken(token)
  if (!isValid) return redirect("/") 

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
