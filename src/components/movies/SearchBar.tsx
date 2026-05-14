import { useMovieStore } from '@/stores/movie'

export default function SearchBar() {
  const searchText = useMovieStore(s => s.searchText)
  const fetchMovies = useMovieStore(s => s.fetchMovies)
  const setSearchText = useMovieStore(s => s.setSearchText)

  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
          onKeyDown={event => {
            if (event.nativeEvent.isComposing) return
            if (event.key === 'Enter') {
              fetchMovies()
            }
          }}></input>

        <button onClick={() => fetchMovies()}>search</button>
      </div>
    </>
  )
}
