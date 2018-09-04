import React from 'react';
import { Link } from 'react-router-dom';

export const MovieRelated = ({ movie }) => {
  return (
    <div className="movie-card">
      <ul>
        <li className="movie-card-item movie-relate--head">
          <div className="movie-relate--group">
            <h4 className="u-mb--10">{movie.title}</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <span>Director:</span>
                <p>{movie.director}</p>
              </li>
              <li className="list-group-item">
                <span>Producer:</span>
                <p>{movie.producer}</p>
              </li>
              <li className="list-group-item">
                <span>Release Date:</span>
                <p>{movie.release_date}</p>
              </li>
            </ul>
          </div>
        </li>
        <p className="movie-card-item">{movie.opening_crawl}</p>
        <Link to="/" className="pull-right">
          <p className="movie-card-item">See more</p>
        </Link>
      </ul>
    </div>
  );
};

export default MovieRelated;
