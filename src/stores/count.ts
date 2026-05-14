import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useCountStore = create(
  combine({ count: 0 }, (set, get) => ({
    increase() {
      const { count } = get()
      set({ count: count + 1 })
    },
    decrease() {
      set(({ count }) => ({ count: count - 1 }))
    }
  }))
)
