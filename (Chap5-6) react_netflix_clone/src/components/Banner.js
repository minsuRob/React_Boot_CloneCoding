import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import requests from "../api/requests";
import "./Banner.css"

export default function () {
  const [movie, setMovie] = useState(false);
  useEffect(()=> {
    fetchData();
  }, [])

  const fetchData = async () =>{
    // const request = await axios.get(requests.fetchNowPlaying) 
    // await을 넣지않으면 아무값도 받지않고 리턴되기에, request에 pending된 데이터가 들어온다.
    // 개봉된 여러 영화를 가져옴
    const request = await axios.get(requests.fetchNowPlaying)
    // console.log(request);

    const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
}

const truncate =(str, n) => {
  return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

  return (
    <header className="banner"
            style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
                    backgroundPosition: "top center",
                    backgroundSize: "cover"
        }}
    >
    <div className="banner__contents">
        <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}    
        </h1>    
        <div className='banner__buttons'>
            <button className='banner__button play'>Play</button>
            <button className='banner__button info'>More Infomaition</button>
        </div>

        <h1 className='banner__description'>{truncate(movie?.overview, 100)}</h1>
    </div>
    <div className='banner__fadeBottom'/>

    </header>
  )
}
