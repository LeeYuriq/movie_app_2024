import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
                 to="/movie-detail"
                 state={{ year, title, summary, poster, genres }} 
                 // v6 방식으로 수정
            >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return (
                                <li key={index} className="movie__genres">
                                    {genre}
                                </li>
                            );
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 60)}...</p>
                </div>
            </Link>
        </div>
    );
    
}

Movie.propTypes = {
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
 };

export default Movie;

