import { validUser } from '@/utils'
import { redirect } from 'react-router'

interface Context {
  request: Request
}

export default function requiresAuth({ request }: Context) {
  const url = new URL(request.url)

  if (validUser()) {
    return true
  }
  return redirect(`/signIn?returnUrl=${url.pathname}`)
}
