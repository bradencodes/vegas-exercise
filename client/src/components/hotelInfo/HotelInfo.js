import React from 'react';

import QuickInfo from './QuickInfo';

const HotelInfo = ({ hotelObj }) => {
  return (
    <>
      {!hotelObj ? (
        <div className='hotelInfo skeleton' />
      ) : (
        <div className='hotelInfo'>
          <QuickInfo hotelObj={hotelObj} />
        </div>
      )}
    </>
  );
};

export default HotelInfo;
