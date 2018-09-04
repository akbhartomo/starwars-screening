import React from 'react';
import { Link } from 'react-router-dom';

import play from '../../assets/images/ico-play.png';

export const MovieList = ({ movie, films }) => {
  return (
    <Link to="/" className="movie-card--small">
      <ul className="movie-card">
        <li className="movie-card-item movie-play">
          <img src={play} alt="play" />
        </li>
        <li className="movie-card-item">
          <p className="item-title">{movie.title}</p>
        </li>
        <li className="movie-card-item">
          <p>Director:</p>
          <p>{movie.director}</p>
        </li>
        <li className="movie-card-item">
          <p>Release:</p>
          <p>{movie.release_date}</p>
        </li>
      </ul>
    </Link>
  );
};

export default MovieList;
