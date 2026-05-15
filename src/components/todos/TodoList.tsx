import { useTodoStore } from '@/stores/todo'
import { useEffect } from 'react'
import Loader from '../Loader'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useTodoStore(s => s.todos)
  const fetchTodos = useTodoStore(s => s.fetchTodos)
  const isLoading = useTodoStore(s => s.isLoadingForFetch)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
      {isLoading && <Loader />}
    </>
  )
}
