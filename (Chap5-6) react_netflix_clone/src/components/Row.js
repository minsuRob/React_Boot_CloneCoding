import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"
import MovieModal from './MovieModal';


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

SwiperCore.use([Navigation, Pagination])


const Row = ({ title, fetchUrl, isLargeRow, id }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    const BASE_URL = 'http://image.tmdb.org/t/p/original/';
    useEffect(() => {
        fetchMovieData();
    }, [fetchUrl])

    const fetchMovieData = async () => {
        const requests = await axios.get(fetchUrl);
        // console.log("requests ", requests);
        setMovies(requests.data.results);
        return requests;
    }

    const handleClick = (movie) => {
        console.log("modalOpen", modalOpen)
        setModalOpen(true);
        setMovieSelected(movie);
    }

    return (
        <section className="row">
            <h2>{title}</h2>
            <div className='slider'>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={6}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    <div id={id} className="row__posters">
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <img
                                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                    src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}

                                    loading='lazy'
                                    alt={movie.name}
                                    onClick={() => handleClick(movie)}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>

            </div>

            {
                modalOpen && (
                    <MovieModal
                        {...movieSelected}
                        setModalOpen={setModalOpen}
                    />
                )
            }
        </section>
    );
};


export default Row;