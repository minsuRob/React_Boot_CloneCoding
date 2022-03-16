import axios from '../../api/axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './SearchPage.css';
import { useState } from 'react';

import {useDebounce} from "../../hooks/useDebounce"

export default function SearchPage() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let qeury = useQuery();
  const searchTerm = qeury.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500); 

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (debouncedSearchTerm) => {
    try {
      const request = await axios.get(`/search/multi?include_adult=false&query=${debouncedSearchTerm}`);
      console.log("request", request);

      setSearchResults(request.data.results);

    } catch (error) {
      console.log("Error", error);
    }
  }

    const renderSearchResults = () => {
      return setSearchResults.length > 0 ? (
        <section className='search-container'>
          {searchResults.map((movie) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className='movie' key={movie.id}>
                  <div className='movie__column-poster'>
                    <img src={movieImageUrl} alt="" className='moive__poster' />
                  </div>
                </div>
              );
            }
          })}
        </section>

      ) : (
        <section className='no-results'>
          <div className='no-results__text'>
            <p>Your search for "{debouncedSearchTerm}" did not have any matches.</p>
            <p>Suggestion:</p>
            <ul>
              <li>Try different keywords</li>
            </ul>
          </div>
        </section>
      );
    };

    return renderSearchResults();
  }
