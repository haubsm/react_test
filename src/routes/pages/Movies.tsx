import SearchBar from '@/components/movies/SearchBar'
import MovieList from '@/components/movies/MovieList'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <>
      <SearchBar />
      <MovieList />
      <Outlet />

      <h1>hello Joon</h1>
      <h2> bye ~</h2>
      <h1>super mario~~</h1>
    </>
  )
}
