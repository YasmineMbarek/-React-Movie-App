import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ movielist= [], onAddMovie = () => {}}) =>

  <div className='mvlist'>
  {
    movielist.map((el, i) => <MovieCard card={el} key={i} />)
  }

   <div className="new-movie-card"  onClick={() => {
                onAddMovie({
                    id: Math.random(),
                    title: prompt('movie title: '),
                    rating: Number(prompt('movie rating: ')),
                    year: Number(prompt('movie year: '))
                })
            }} >
            +
      </div>
  </div>
export default MovieList;