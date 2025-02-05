import { Document, model, models, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IAdmin {
  uuid: string,
  name: string,
  access_key: string,
  email: string,
  password: string
}

export interface IAdminDocument extends IAdmin, Document {}

const adminSchema = new Schema<IAdminDocument>({
  uuid: {
    type: String,
    default: uuidv4,
    unique: true,
    immutable: true
  },
  name: {
    type: String,
  },
  access_key: {
    type: String,
    default: uuidv4,
    unique: true,
    immutable: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

export const AdminModel = models.Admin || model<IAdminDocument>("Admin",adminSchema) 