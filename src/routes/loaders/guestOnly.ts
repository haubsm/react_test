import { validUser } from '@/utils'
import { redirect } from 'react-router'

export default function guestOnly() {
  if (validUser()) {
    return redirect('/')
  }
}
