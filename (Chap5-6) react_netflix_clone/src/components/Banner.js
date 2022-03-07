import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import requests from "../api/requests";

export default function () {
  const [movie, setMovie] = useState(false);
  useEffect(()=> {
    fetchData();
  }, [])

  const fetchData = async () =>{
    // const request = await axios.get(requests.fetchNowPlaying) 
    // await을 넣지않으면 아무값도 받지않고 리턴되기에, request에 pending된 데이터가 들어온다.
    // 개봉된 여러 영화를 가져옴
    const request = await axios.get(requests.fetch)
    console.log(request);
  }

  return (
    <div></div>
  )
}
