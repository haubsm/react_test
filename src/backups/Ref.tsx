import { useEffect, useRef } from 'react'

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <input ref={inputRef} />
      {/* <button onClick={() => inputRef.current?.focus()}>포커스!</button> */}
    </>
  )
}
