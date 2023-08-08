import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'
import ThemeContext from '../../context/ThemeContext';
import CircumIcon from "@klarr-agency/circum-icons-react";
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';



function Navbar() {

  const [isAutoCompleteVisible,setIsAutoCompleteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const {movieList} = useMovieList(searchTerm);
  const navigator = useNavigate();
  const {theme, setTheme} = useContext(ThemeContext);

  function handleAutoCompleteClick(movieImdbId) {
    navigator(`/movie/${movieImdbId}`)
  }

  return (
    <nav className="nav" >
        <Link to={'/'} className="nav-brand">Movie Quest</Link>
        <div className="nav-search">
            <input className="search" 
                    type="search" 
                    name="search" 
                    id="search" 
                    placeholder='What movie are you thinking about...'
                    onFocus={() => {
                      setIsAutoCompleteVisible(true);
                    }}
                    onBlur={() => setIsAutoCompleteVisible(false)}
                  onChange={useDebounce((e) => {
                    setSearchTerm(e.target.value);
                  })}
            />
            <div className="search-list" 
                style={{display: (isAutoCompleteVisible) ? 'block' : 'none'}}>
                <div className='auto-complete'>
                  Showing the results for auto complete...
                </div>
                    {movieList.length > 0 && movieList.map(movie => 
                        <div 
                          onMouseDown={() => handleAutoCompleteClick(movie.imdbID)} key={movie.imdbID} className='auto-complete'>{movie.Title}
                        </div>
                    )}
            </div>
        </div>
        <div className="nav-theme-btn" onClick={() => setTheme((theme == 'dark') ? 'light' : 'dark')}>
          <CircumIcon name={(theme == 'dark') ? 'light' : 'dark'}/>
        </div>
    </nav>
  )
}
// <CircumIcon name="dark"/>
export default Navbar;