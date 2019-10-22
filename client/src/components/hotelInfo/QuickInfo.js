import React from 'react';

const QuickInfo = ({ hotelObj }) => {
  const generateStars = num => {
    let stars = '';
    for (let i = 0; i < num; i++) {
      stars += '★';
    }
    return stars;
  };

  return (
    <div className='quickInfo'>
      <h1 className='name' data-rating={generateStars(hotelObj.starRating)}>
        {hotelObj.name.toUpperCase()}
      </h1>
      <aside className='info'>
        <button className='item' data-icon='&#x2352;'>
          {hotelObj.location.areaName}
        </button>
        <p className='item' data-icon='&#x2706;'>
          {hotelObj.phoneNumber}
        </p>
        <p className='item' data-icon='&#x2764;'>
          Best Price Guarantee
        </p>
      </aside>
    </div>
  );
};

export default QuickInfo;
