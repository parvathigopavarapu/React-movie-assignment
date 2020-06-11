import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../redux/searchActions';

export class SearchForm extends Component {
    constructor(){
        super()
        this.state ={
            text:''
        }
    }
  onChange = e => {
      this.setState ({
          text : e.target.value
      })
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    
    e.preventDefault();
    this.props.fetchMovies(this.state.text);
    this.props.setLoading();
  };

  render() {
    return (
        <div className="container text-center">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(JSON.stringify(state))
    return {
       text: state.text
    }
};

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
