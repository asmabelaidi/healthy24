import React from 'react'

function RatingStars() {
    const spanElement = <img src="/assets/icons/star.png" alt="star" />;

    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <span key={index}>{spanElement}</span>
        ))}
      </div>
  )
}

export default RatingStars