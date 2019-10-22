import React from 'react';

const QuickInfo = ({ hotelObj }) => {
  const generateStars = (num) => {
    let stars = '';
    for (let i = 0 ; i < num ; i++) {
      stars += '★'
    }
    return stars;
  }

  return (
    <div className='quickInfo'>
      <span className="name" data-rating={generateStars(hotelObj.starRating)}>{hotelObj.name.toUpperCase()}</span>
    </div>
  )
}

export default QuickInfo;
