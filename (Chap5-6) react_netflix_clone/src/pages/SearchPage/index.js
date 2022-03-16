import axios from '../../api/axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './SearchPage.css';

export default function SearchPage() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let qeury = useQuery();
  const searchTerm = qeury.get("q");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);

      setSearchResults(request.data.results);

    } catch (error) {
      console.log("Error", error);
    }

    const renderSearchResults = () => {
      return setSearchResults.length > 0 ? (
        <section className='search-container'>
          {searchResults.map((movie) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className='movie'>
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
            <p>Your search for "{searchTerm}" did not have any matches.</p>
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
}
