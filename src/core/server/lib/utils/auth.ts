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
    const decoded = jwt.decode(token) as TAuthTokenPayload
    return decoded
  }catch {
    return null
  }
}