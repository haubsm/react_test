import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [color, setColor] = useState('')

  return (
    <>
      <h1 className={isActive ? 'active' : ' '}>{count}</h1>
      <h2 style={{ color: color }}>hello React </h2>
      <input
        type="text"
        value={color}
        onChange={event => {
          setColor(event.target.value)
        }}
      />
      <button
        onClick={() => {
          setIsActive(!isActive)
        }}>
        toggle
      </button>
      <input
        type="number"
        value={count}
        onChange={event => {
          setCount(Number(event.target.value))
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1)
          console.log(count)
        }}>
        click
      </button>
    </>
  )
}
