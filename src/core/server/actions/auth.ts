"use server"

import { compare } from "bcrypt"
import { cookies } from "next/headers";
import { connectDB } from "../lib/db";
import { AdminModel, IAdminDocument } from "../models/admin";
import { createAuthToken } from "../lib/utils/auth";
import { redirect } from "next/navigation";

export async function loginAction(formData:FormData) {

  const password = formData.get("password") as string
  const email = formData.get("email") as string

  await connectDB()

  const admin: (IAdminDocument|null) = await AdminModel.findOne({ email })

  if (admin) {
    const isValidPassword = await compare(password, admin.password)
    if (isValidPassword) {
      const accessToken = createAuthToken({
        access_key: admin.access_key,
        user_id: admin.uuid
      });
    
      (await cookies()).set("access_token", accessToken, { httpOnly: true, sameSite: "strict", secure: true });
    
      redirect("/panel")
    }
  }
}