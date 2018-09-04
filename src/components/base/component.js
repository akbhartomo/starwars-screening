import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header } from '../header/component';
import { TitleMovie } from '../title/component';
import { TitleRelatedMovie } from '../titleRelated/component';
import { MovieList } from '../movieList/component';
import { MovieRelated } from '../movieRelated/component';

export class Base extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      profile: [],
      movie: [],
      relatedData: [],
      value: '',
      key: '',
      films: null
    };
    this.getProfile = this.getProfile.bind(this);
    this.getListMovie = this.getListMovie.bind(this);
  }

  getProfile() {
    let url = 'https://swapi.co/api/people/1/';
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);

        this.setState({
          profile: responseJson
        });
      });
  }

  getListMovie() {
    let url = 'https://swapi.co/api/films/';
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);

        this.setState({
          movie: responseJson
        });
      });
  }

  componentDidMount() {
    this.getProfile();
    this.getListMovie();

    // const {url} = this.state.movie.results.url;

    // let URI = `https://swapi.co/api/films/${url}`;
    // fetch(URI, {
    //   method: 'GET'
    // })
    //   .then((films) => {
    //     this.setState(() => ({films}))
    //   })
  }

  render() {
    const data = this.state.movie.results || [];
    const sliced = data.slice(0, 4);
    const related = data.slice(6);

    return (
      <div className="movie-container">
        <Header profile={this.state.profile} />
        <div className="section-page">
          <div className="movie-card-group movie-card-col-8">
            <TitleMovie profile={this.state.profile} />
            <div className="movie-cards">
            {sliced.length > 0
              ? sliced.map((value, key) => {
                  return <MovieList movie={value} key={key} />;
                })
              : 'Loading...'}
            </div>
          </div>
          <div className="movie-card-group movie-card-col-4">
            <TitleRelatedMovie title={this.props.titleRelated} />
            {related.length > 0
              ? related.map((value, key) => {
                  return <MovieRelated movie={value} key={key} />;
                })
              : 'Loading...'}
          </div>
        </div>
      </div>
    );
  }
}

Base.propTypes = {
  titleRelated: PropTypes.string
};

Base.defaultProps = {
  titleRelated: "Related Another Movie's"
};

export default Base;
