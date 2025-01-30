import { Document, model, models, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IProject {
  uuid: string,
  name: string,
  description: string,
  images: string[],
  cover_image: string,
  pinned: boolean,
  listing_priority: number,
  deployment_url?: string,
  github_repo_url?: string,
}

export interface IProjectDocument extends IProject, Document {}

const projectSchema = new Schema<IProjectDocument>({
  uuid: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  cover_image: {
    type: String,
    required: true,
  },
  deployment_url: {
    type: String,
    required: false,
  },
  github_repo_url: {
    type: [String],
    required: false,
  },
  listing_priority: {
    type: Number,
    required: false,
    default: 0,
  },
  pinned: {
    type: Boolean,
    required: false,
    default: false
  },
})

export const ProjectModel = models.Project || model<IProjectDocument>("Project",projectSchema) 