import React, { useState } from 'react'
import './navbar.css'
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [isAutoCompleteVisible,setIsAutoCompleteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const {movieList} = useMovieList(searchTerm);
  const navigator = useNavigate();

  function handleAutoCompleteClick(movieImdbId) {
    navigator(`/movie/${movieImdbId}`)
  }

  return (
    <nav className="nav">
       <div className="nav-brand">Movie Quest</div>
       <div className="nav-search">
          <input className="search" type="search" name="search" id="search" placeholder='What movie are you thinking about...'
            onFocus={() => {
              setIsAutoCompleteVisible(true);
            }}
            onBlur={() => setIsAutoCompleteVisible(false)}
            onChange={useDebounce((e) => {
              setSearchTerm(e.target.value);
            })}
          />
          <div className="search-list" style={{display: (isAutoCompleteVisible) ? 'block' : 'none'}}>
          <div className='auto-complete'>Showing the results for auto complete...</div>
            {movieList.length > 0 && movieList.map(movie => 
              <div onMouseDown={() => handleAutoCompleteClick(movie.imdbID)} key={movie.imdbID} className='auto-complete'>{movie.Title}</div>
            )}
          </div>
       </div>
        <button className="nav-theme-btn">Theme</button>
    </nav>
  )
}

export default Navbar;