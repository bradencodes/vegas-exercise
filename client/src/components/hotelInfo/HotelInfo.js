import React from 'react';

import QuickInfo from './QuickInfo';
import TabbedInfo from './TabbedInfo';

const HotelInfo = ({ hotelObj }) => {
  return (
    <>
      {!hotelObj ? (
        <div className='hotelInfo skeleton' />
      ) : (
        <div className='hotelInfo'>
          <QuickInfo hotelObj={hotelObj} />
          <TabbedInfo hotelObj={hotelObj} />
        </div>
      )}
    </>
  );
};

export default HotelInfo;
