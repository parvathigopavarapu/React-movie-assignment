import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import Movie from './components/Movie'
import Navbar from './components/Navbar';
import store from './redux/store';
import MovieInfo from './components/MovieInfo'


function App() {
  return (
    <Provider store={store}>
       <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/movie" component={MovieInfo} />
            <Route exact path="/movie/:id" component={Movie} />
            
          </div>
        </Router>
        </Provider>
     
  );
}

export default App;
