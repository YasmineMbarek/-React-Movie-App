import React from "react";
import Rating from "./Rating";
const MovieCard = ({ card }) => {
  return (
    <div className="MovieCard">
      <div className="movie-rating">
        <Rating count={card.rate} />
      </div>
      <div className="movie-image">
        <img src={card.img} alt="#" />
      </div>

      <div className="movie-description">{card.title}</div>
    </div>
  );
};

export default MovieCard;