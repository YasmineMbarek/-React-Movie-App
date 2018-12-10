import React, { Component } from 'react';
import './App.css';

import NameFilter from "./nameFilter.js";
import RatingFilter from "./RatingFilter.js";
import MovieList from "./MovieList.js";


const theMoviesList = [
  {
    id: 1,
    title: "Ralph Breaks the Internet",
    img:
      "https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p13044225_p_v11_ad.jpg",
    year: "2018",
    rate: "5"
  },
  {
    id: 2,
    title: "Dr. Seuss' The Grinch",
    img:
      "https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p12806157_p_v13_ac.jpg",
    year: "2017",
    rate: "4"
  },
  {
    id: 3,
    title: "Creed II    ",
    img:
      "https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p14810963_p_v13_ab.jpg",
    year: "2019",
    rate: "3"
  },
  
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minrating: 1,
      movies: theMoviesList,
      titleFilter: ""
    };
    
  }

  addNewMovie(newMovie) {
    this.setState({ movie: this.state.movies.concat(newMovie) });
  }
  moviesFiltred() {
    return this.state.movies.filter(
      el =>
        el.rate >= this.state.minrating &&
        el.title.toLowerCase().includes(this.state.titleFilter.trim())
    );
  }

  render() {
    return (
      <div className="App">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleFilter}
            onChange={newTitleFilter => {
              this.setState({
                titleFilter: newTitleFilter
              });
            }}
          />
          <RatingFilter
            count={this.state.minrating}
            onChange={newRating => {
              this.setState({
                minrating: newRating
              });
            }}
          />
        </header>
        <main className="movie-app-list">
          <MovieList movielist={this.moviesFiltred()
          }
          onAddMovie={(newMovie) => this.addNewMovie(newMovie)} /> 
        </main>
      </div>
    );
  }
}

export default App;
