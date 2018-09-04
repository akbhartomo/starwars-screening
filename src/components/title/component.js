import React from 'react';
import { Link } from 'react-router-dom';

export const TitleMovie = ({ profile }) => {
  return (
    <div>
      <h2 className="sub-title">
        {profile.name} Movie's
      </h2>
      <Link to="/" className="pull-right">
        <p className="movie-card-item">See more</p>
      </Link>
    </div>
  );
};

export default TitleMovie;
