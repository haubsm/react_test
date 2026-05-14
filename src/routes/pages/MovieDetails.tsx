import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import Modal from '@/components/Modal'

export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  totalSeasons: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}

export default function MovieDetails() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState<MovieDetails | null>(null)

  useEffect(() => {
    async function fetchMovieDetails() {
      const res = await fetch(
        `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
      )
      const movie: MovieDetails = await res.json()
      setMovie(movie)
    }
    fetchMovieDetails()
  }, [movieId])

  return (
    <Modal
      onClose={() => {
        navigate('/movies')
      }}>
      {movie && (
        <>
          <h1 className="text-5xl">{movie.Title}</h1>
          <img
            // src={`https://img.omdbapi.com?apikey=7035c60c&i=${movieId}&h=1000`}
            src={movie.Poster}
            alt={movie.Title}
          />
          <p>{movie.Director}</p>
          <p>{movie.Plot}</p>
          <p>{movie.Actors}</p>
          <ul>
            {movie.Ratings.map(rating => {
              return (
                <li key={rating.Source}>
                  {rating.Source}-{rating.Value}
                </li>
              )
            })}
          </ul>
        </>
      )}
    </Modal>
  )
}
