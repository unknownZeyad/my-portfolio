import { TAuthTokenPayload } from "@/core/types"
import jwt from "jsonwebtoken"

export function createAuthToken (payload:TAuthTokenPayload) {
  const secret = process.env.AUTH_TOKEN_SECRET as string
  return jwt.sign(payload,secret,{
    expiresIn: "1d"
  })
}

export function verifyAuthToken (token: string) {
  try {
    const secret = process.env.AUTH_TOKEN_SECRET as string
    return jwt.verify(token,secret) as TAuthTokenPayload
  }catch {
    return null
  }
}