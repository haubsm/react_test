import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export interface ResponseValue {
  Search?: Movie[]
  totalResults?: string
  Response: 'True' | 'False'
  Error?: string
}

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create(
  combine({ movies: [] as Movie[], searchText: '' }, (set, get) => ({
    setSearchText(newSearchText: string) {
      set({ searchText: newSearchText })
    },
    async fetchMovies() {
      const { searchText } = get()
      if (searchText.trim().length < 3) return
      const res = await fetch(
        `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
      )
      const data: ResponseValue = await res.json()
      //   setMovies(data.Search)
      set({
        movies: data.Search || []
      })
    }
  }))
)
