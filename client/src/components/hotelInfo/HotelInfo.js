import React, { useState } from 'react';

import QuickInfo from './QuickInfo';
import TabbedInfo from './TabbedInfo';

const HotelInfo = ({ hotelObj }) => {
  let [selected, setSelected] = useState('description');

  return (
    <>
      {!hotelObj ? (
        <div className='hotelInfo skeleton' />
      ) : (
        <div className='hotelInfo'>
          <QuickInfo hotelObj={hotelObj} setSelected={setSelected} />
          <TabbedInfo
            hotelObj={hotelObj}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      )}
    </>
  );
};

export default HotelInfo;
