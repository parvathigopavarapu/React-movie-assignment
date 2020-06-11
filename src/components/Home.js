import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';

export class Home extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <p>Loading...</p> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading
});

export default connect(mapStateToProps)(Home);
