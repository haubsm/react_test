import { useState, useEffect, Fragment } from 'react'

interface ResponseValue {
  Search: Movie[]
  totalResults: string
  Response: string
}

interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [searchText, setSearchText] = useState('')

  async function fetchMovies() {
    if (searchText.trim().length < 3) return
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    const data: ResponseValue = await res.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    console.log(movies)
  }, [movies])

  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              fetchMovies()
            }
          }}></input>

        <button onClick={() => fetchMovies()}>search</button>
      </div>
      {movies.map(movie => (
        <Fragment key={movie.imdbID}>
          <div>{movie.Title}</div>
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
        </Fragment>
      ))}
      <h1>hello Joon</h1>
      <h2> bye ~</h2>
      <h1>super mario~~</h1>
    </>
  )
}
