import React from 'react';

const HotelsList = ({ allHotelsObj }) => {
  return (
    <>
      {!allHotelsObj ? (
        <ul className='hotelsList skeleton' />
      ) : (
        <ul className='hotelsList'>
          {allHotelsObj.map(hotel => (
            <li key={hotel.code}>
              <span className='name'>{hotel.name}</span>
              <span className='price'>${hotel.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HotelsList;
