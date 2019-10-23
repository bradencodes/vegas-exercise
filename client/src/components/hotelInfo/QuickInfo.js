import React from 'react';

const QuickInfo = ({ hotelObj, setSelected }) => {
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
        <p
          className='item'
          data-icon='&#x2352;'
          onClick={() => setSelected('location')}
          style={{ cursor: 'pointer' }}
        >
          {hotelObj.location.areaName}
        </p>
        <p className='item' data-icon='&#x2706;'>
          {hotelObj.phoneNumber}
        </p>
        <p className='item' data-icon='&#x2764;'>
          Best Price Guarantee
        </p>
      </aside>

      <aside className='price'>
        <p className='num'>${hotelObj.price}</p>
        <p className='label'>HOTEL ROOMS FROM</p>
      </aside>
    </div>
  );
};

export default QuickInfo;
