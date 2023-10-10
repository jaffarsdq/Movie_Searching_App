import { useNavigate } from 'react-router-dom';
import './movieCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactSvg from '../../assets/react.svg'
function MovieCard({ Title, Year, Type, Poster,id }) {
    const navigator = useNavigate();
    function handleClick() {
        navigator(`/movie/${id}`)
    }

    return (
        <div onClick={handleClick} className='movie-wrapper'>
            <div className='movie-image'>
                <LazyLoadImage  
                    key={Poster}
                    className='img' 
                    src={Poster} 
                    placeholderSrc={ReactSvg}
                    effect="blur"
                />
            </div>
            <div className='movie-title'>
                <span>{Title.length > 17 ? `${Title.substring(0, 17)}...` : Title}</span>
            </div>
            <div className='movie-year'>
                <span>Released in: {Year}</span>
            </div>
            <div className='movie-type'>
                <span>Type: {Type}</span>
            </div>
        </div>
    )
}

export default MovieCard;