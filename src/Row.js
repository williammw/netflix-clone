import React, { useEffect, useState } from 'react'
import './Row.css'
import instance from './axios'

const base_url = 'http://image.tmdb.org/t/p/original/'

function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([])

  useEffect(()=> {
    async function fetchData() {
      const request = await instance.get(fetchUrl)
      // console.log(request)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  },[fetchUrl])
   console.log(movies)
  return (
    <div className="row" >
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img 
            className={`row__poster ${isLargeRow && "row__posterLager"} `}
            key={movie.id}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.original_title} />
          ))}
      </div>
    </div>
  )
}

export default Row
