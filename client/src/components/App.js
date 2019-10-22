import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/main.css';

import HotelDetails from './HotelDetails';

const App = () => {
  const [hotel, setHotel] = useState('venetian');
  let allHotels;

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8888/api/hotels';
      const res = await axios.get(url);
      allHotels = res.data.list;
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <HotelDetails hotel={hotel} allHotels={allHotels} />
    </div>
  );
};

export default App;
