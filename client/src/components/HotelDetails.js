import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HotelsList from './HotelsList';
import HotelInfo from './hotelInfo/HotelInfo';

const HotelDetails = ({ hotelName, allHotelsObj }) => {
  const [hotelObj, setHotelObj] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:8888/api/hotels/${hotelName}`
      );
      setHotelObj(res.data);
    };

    fetchData();
  }, [hotelName]);

  const hotelImageUrl = hotelObj
    ? hotelObj.media.filter(asset => asset.type === 'productImage')[0].href
    : null;

  return (
    <div>
      <button id='navBack'>SEE ALL LAS VEGAS HOTELS</button>
      <div className='pageContainer'>
        <img src={hotelImageUrl} alt='hotel_image' className='skeleton' />
        <HotelsList allHotelsObj={allHotelsObj} />
        <HotelInfo hotelObj={hotelObj} />
      </div>
    </div>
  );
};

export default HotelDetails;
