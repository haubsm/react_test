import type { Todo } from '@/stores/todo'
import { useState, useRef, useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'

interface Props {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const [done, setDone] = useState(todo.done)
  const inputRef = useRef<HTMLInputElement>(null)
  const updateTodo = useTodoStore(s => s.updateTodo)
  const deleteTodo = useTodoStore(s => s.deleteTodo)

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEdit])

  useEffect(() => {
    if (done === todo.done) return
    updateTodo({ ...todo, done })
  }, [done])

  function onEditMode() {
    setIsEdit(true)
  }

  function offEditMode(isSave: boolean = false) {
    setIsEdit(false)
    if (!isSave) setTitle(todo.title)
  }

  function saveTodo() {
    if (!title.trim()) return
    if (title.trim() === todo.title) return
    updateTodo({ ...todo, title, done: todo.done })
    offEditMode(true)
  }

  return (
    <div className="flex items-center gap-3 hover:bg-gray-100">
      <input
        type="checkbox"
        checked={done}
        onChange={e => setDone(e.target.checked)}
      />
      {isEdit ? (
        <>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            ref={inputRef}
            onKeyDown={e => {
              if (e.nativeEvent.isComposing) return
              if (e.key === 'Escape') offEditMode()
              if (e.key === 'Enter') saveTodo()
            }}
          />
          <button onClick={() => offEditMode()}>cancel</button>
          <button onClick={() => saveTodo()}>save</button>
          <button onClick={() => deleteTodo(todo)}>delete</button>
        </>
      ) : (
        <>
          <h3 className="grow">{todo.title}</h3>
          <button onClick={() => onEditMode()}>edit</button>
        </>
      )}
    </div>
  )
}
