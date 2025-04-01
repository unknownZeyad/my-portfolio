import { validateUserByToken } from '@/core/server/middlewares/validateUserByToken'
import { TChildren } from '@/core/types'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

async function PanelLayout({ children }: TChildren) {
  const cookieStore = await cookies()
  const token = cookieStore.get("access_token")?.value || ''
  const isValid = await validateUserByToken(token)
  if (!isValid) return redirect("/dont-try-to-fuck-with-me") 

  return children
}

export default PanelLayout