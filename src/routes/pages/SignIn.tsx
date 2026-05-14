import TexField from '@/components/TextField'
import Button from '@/components/Button'
import { useNavigate, useSearchParams } from 'react-router'
import { useState } from 'react'

export default function SignIn() {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [searchParms] = useSearchParams()
  const returnUrl = searchParms.get('returnUrl')

  function signIn() {
    if (id && pw) {
      //로그인 완료 가정!
      const accessToken = 'test1234' //서버에서 받아왔다고 가정!!
      localStorage.setItem('samsungToken', accessToken) //token 저장 !!
      navigate(`/${returnUrl}`)
    }
    //로그인 실패시 처리!!
  }

  return (
    <>
      <h1>SignIn Page</h1>
      <form
        className="flex max-w-75 flex-col gap-5"
        onSubmit={e => {
          e.preventDefault()
        }}>
        <TexField
          label="ID"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <TexField
          label="PW"
          value={pw}
          onChange={e => setPw(e.target.value)}
          type="password"
        />
        <Button onClick={() => signIn()}>Log In</Button>
      </form>
    </>
  )
}
