import { useTodoStore } from '@/stores/todo'
import TextField from '../TextField'
import Button from '../Button'

export default function TodoCreator() {
  const title = useTodoStore(s => s.title)
  const setTitle = useTodoStore(s => s.setTitle)
  const createTodo = useTodoStore(s => s.createTodo)
  const isLoading = useTodoStore(s => s.isLoadingForFetch)

  return (
    <div>
      <TextField
        disabled={isLoading}
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="할 일을 입력하세요~"
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') createTodo()
        }}
      />
      <Button
        loading={isLoading}
        onClick={() => createTodo()}
        disabled={isLoading}>
        추가
      </Button>
    </div>
  )
}
