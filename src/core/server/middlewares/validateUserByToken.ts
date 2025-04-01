import { verifyAuthToken } from "../lib/utils/auth";
import { AdminModel, IAdminDocument } from "../models/admin";
import { connectDB } from "../lib/db";

export async function validateUserByToken(token: string): Promise<boolean> {
  await connectDB()

  const decoded = verifyAuthToken(token)
  if (!decoded) return false
  
  const admin: (IAdminDocument|null) = await AdminModel.findOne({
    uuid: decoded.user_id,
  })

  if (!admin) return false
  if (admin.access_key !== decoded.access_key) return false

  return true
}