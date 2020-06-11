import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie, setLoading } from '../redux/searchActions';


export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    // this.props.fetchMovie(this.props.id)
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;

    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
             
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
              <li className="list-group-item bg-light">
                <strong>boxoffice:</strong> {movie.imdbRating > 7 ? <h4>Hit</h4> : <h4>Flop</h4>}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body  my-5 ">
            <div className="col-md-12">
              <h3>About </h3>
              {movie.Plot}
              <hr />
             
              <Link to="/" className="btn btn-primary ">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <p>Loading...</p> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(Movie);
