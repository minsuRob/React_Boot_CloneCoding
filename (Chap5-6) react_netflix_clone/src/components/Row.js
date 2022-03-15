import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"
import MovieModal from './MovieModal';

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
                <div className='slider__arrow-left'>
                    <span className='arrow'
                        onClick={() => {
                            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
                        }}
                    >
                        {"<"}
                    </span>
                </div>
                <div id={id} className="row__posters">
                    {movies.map((movie) => (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}

                            loading='lazy'
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    ))}
                </div>
                <div className='slider__arrow-right'>
                    <span className='arrow'
                        onClick={() => {
                            document.getElementById(id).scrollLeft += window.innerWidth + 80;
                        }}
                    >
                        {">"}
                    </span>
                </div>
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