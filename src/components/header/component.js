import React from 'react';

import imgprofile from '../../assets/images/ico-profile.png';

export const Header = ({
  profile
}) => {
  return (
    <div className="section-page">
      <div className="section-page">
        <h1 className="main-title">{profile.name}</h1>
      </div>
      <div className="section-flex section-profile">
        <div className="col-profile profile-avatar">
          <img src={imgprofile} alt="Profile" />
        </div>
        <div className="col-profile profile-information">
          <ul className="list-group">
            <li className="list-group-item">
              <span>Height:</span>
              {profile.height}
            </li>
            <li className="list-group-item">
              <span>Mass:</span>
              {profile.mass}
            </li>
            <li className="list-group-item">
              <span>Hair color:</span>
              {profile.hair_color}
            </li>
            <li className="list-group-item">
              <span>Skin color:</span>
              {profile.skin_color}
            </li>
            <li className="list-group-item">
              <span>Birth Year:</span>
              {profile.birth_year}
            </li>
            <li className="list-group-item">
              <span>Gender:</span>
              {profile.gender}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
