import { ReactNode } from "react"

declare type TChildren = {
  readonly children: ReactNode
}

declare type TAuthTokenPayload = {
  user_id: string,
  access_key: string
}