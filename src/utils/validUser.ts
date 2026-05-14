export default function validUser() {
  const accessToken = localStorage.getItem('samsungToken')
  const isValid = !!accessToken
  return isValid
}
