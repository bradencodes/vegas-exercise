import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/main.css';

const App = () => {
  const [currentHotel, setCurrentHotel] = useState(null);
  const [hotels, setHotels] = useState(null);

  useEffect(async () => {
    const allHotels = await axios.get('http://localhost:8888/api/hotels');

    const venetian = await axios.get('http://localhost:8888/api/hotels/venetian');
  })

  return (
    <div className='App'>
      <button id='navBack'>SEE ALL LAS VEGAS HOTELS</button>
      <div className='pageContainer'>
        <img src='' alt='hotelImage'/>
        <QuickInfo hotel={currentHotel}>

      </div>
    </div>
  );
}

export default App;
