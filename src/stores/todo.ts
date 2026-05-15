import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

export type FilterStatus = 'all' | 'done' | 'todo'

const customAxios = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
  headers: {
    'content-type': 'application/json',
    apikey: 'KDT8_bcAWVpD8',
    username: 'KDT8_ParkYoungWoong'
  }
})

export const useTodoStore = create(
  combine(
    {
      filterStatus: 'all' as FilterStatus,
      filteredTodos: [] as Todo[],
      todos: [] as Todo[],
      title: '',
      isLoadingForCreate: false,
      isLoadingForFetch: false
    },
    (set, get) => {
      function setTitle(title: string) {
        set({ title })
      }
      async function fetchTodos() {
        try {
          set({ isLoadingForFetch: true })
          const { data } = await customAxios.get('')
          set({
            todos: data || []
          })
        } catch (error) {
          console.log(error)
        } finally {
          set({ isLoadingForFetch: false })
        }
      }
      async function createTodo() {
        const { title } = get()
        if (!title.trim()) return

        try {
          set({ isLoadingForCreate: true })
          await customAxios.post('', { title })
          setTitle('')
          fetchTodos()
        } catch (error) {
          console.log(error)
        } finally {
          set({ isLoadingForCreate: false })
        }
      }
      async function updateTodo(todo: Todo) {
        await customAxios.put(`/${todo.id}`, {
          title: todo.title,
          done: todo.done
        })
        fetchTodos()
      }
      async function deleteTodo(todo: Todo) {
        await customAxios.delete(`/${todo.id}`)
        fetchTodos()
      }
      return { setTitle, fetchTodos, createTodo, updateTodo, deleteTodo }
    }
  )
)
