import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"

const Row = ({ title, fetchUrl, isLargeRow, id }) => {
    const [movies, setMovies] = useState([]);
    const BASE_URL = 'http://image.tmdb.org/t/p/original/';
    useEffect(() => {
        fetchMovieData();
    }, [fetchUrl])

    const fetchMovieData = async () => {
        const requests = await axios.get(fetchUrl);
        console.log("requests ", requests);
        setMovies(requests.data.results);
        return requests;
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
        </section>
    );
};


export default Row;