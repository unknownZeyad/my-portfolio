import { TMonth } from "@/core/types"
import { Document, model, models, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IExperience {
  uuid: string,
  from: `${TMonth} ${string}`,
  to: `${TMonth} ${string}` | "present",
  worked_at: {
    name: string,
    website_url?: `https://${string}`
  },
  position: string,
  achievements: string[]
}

export interface IExperienceDocument extends IExperience, Document {}


const experienceSchema = new Schema<IExperienceDocument>({
  uuid: {
    type: String,
    default: uuidv4,
    unique: true,
    immutable: true
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  worked_at: [{
    name: {
      type: String,
      required: true
    },
    website_url: {
      type: String,
    }
  }],
  position: String,
  achievements: [String]
})

export const ExperienceModel = models.Experience || model<IExperienceDocument>("Experience",experienceSchema) 