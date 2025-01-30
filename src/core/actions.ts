"use server"

import { connectDB } from "@/core/lib/db";
import { IProject, ProjectModel } from "@/core/models/project";

export async function getProjectsActions(queryObj: Partial<IProject>,page: number, limit: number) {
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