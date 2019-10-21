import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/main.css';

import HotelDetails from './HotelDetails';

const App = () => {
  const [hotel, setHotel] = useState('venetian');
  const [allHotels, setAllHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8888/api/hotels';
      const res = await axios.get(url);
      setAllHotels(res.data.list);

      console.log(res.data.list);
    };

    fetchData();
    setTimeout(() => console.log(allHotels), 1000);
  }, []);

  return (
    <div className='App'>
      <HotelDetails hotel={hotel} allHotels={allHotels} />
    </div>
  );
};

export default App;
