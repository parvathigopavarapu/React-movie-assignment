import React, { Component } from 'react';

import { connect } from 'react-redux';

import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
  render() {

    const { movies } = this.props;
    console.log('props are' + JSON.stringify(this.props))
    let content = '';

    content =
      movies != null
        ? movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return <div className="row mt-5">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesContainer);
