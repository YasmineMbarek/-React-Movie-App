import React from "react";
import Rating from "./Rating";

const RatingFilter = ({ onChange, count }) => (
  <div className="rating-filter">
    <span className="rating-filter-text">Minimum rating</span>
    <span>
      {/* <Rating count={4} /> */}
      <Rating
        count={count}
        onChangeRating={newRating => {
          onChange(newRating);
        }}
      />
    </span>
  </div>
);

export default RatingFilter;

