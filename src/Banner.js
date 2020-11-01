import React,{useEffect, useState} from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    async function fetchData(){
      //
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data.results) // [....]\
      setMovie(request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, [])

  console.log(movie)

  function truncate (str, n){
   return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }


  return (
    <header className="banner" style={{
      backgroundSize:"cover",
      backgroundImage:`url(http://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
    }}>
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <div className="banner__description">
          {truncate(movie?.overview, 150)}
        </div>

      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner
