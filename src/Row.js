import React, { useEffect, useState } from 'react'
import './Row.css'
import instance from './axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'http://image.tmdb.org/t/p/original/'

function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(()=> {
    async function fetchData() {
      const request = await instance.get(fetchUrl)
      // console.log(request)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  },[fetchUrl])
  
  const opts = {
    heifht : '390',
    width:'100%',
    playerVars:{
      autoplay:1,
    }
  }
  const handleClick = (movie) => {
    console.log('entry', movie)
    if(trailerUrl) {
      setTrailerUrl('')
    }else{
      const ans = movie?.name || movie?.original_name ||  movie?.original_title       
      console.log('ansssss', ans)
      movieTrailer(ans ||  "")
      .then(url => {
        // https://www.youtube.com/watch?v=XtMThy8QKqU&t=3443s
        console.log('urlurl',url)
        const urlParms = new URLSearchParams( new URL(url).search)
        // console.log('vvvvv', urlParms.get('v'))
        setTrailerUrl(urlParms.get('v'))
      })
      .catch((err) => console.log(err))
    }
  }

  return (
    <div className="row" >
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img 
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLager"} `}
            key={movie.id}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.original_title} />
          ))}
      </div>
      {trailerUrl  &&  <Youtube videoId={trailerUrl} opts={opts} />}
      {/* <Youtube videoId={"wKfQ0GVFqCQ"} opts={opts} /> */}
    </div>
  )
}

export default Row
