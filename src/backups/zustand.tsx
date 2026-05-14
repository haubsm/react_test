import { useCountStore } from '@/stores/count'
import Button from '../components/Button'

export default function App() {
  const count = useCountStore(s => s.count)
  const increase = useCountStore(s => s.increase)
  const decrease = useCountStore(s => s.decrease)

  return (
    <>
      <h1>{count}</h1>
      <Button onClick={() => increase()}>증가</Button>
      <Button onClick={() => decrease()}>감소</Button>
    </>
  )
}
