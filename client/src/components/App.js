import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/main.css';

import HotelDetails from './HotelDetails';

const App = () => {
  let hotelName = 'venetian';
  const [allHotelsObj, setAllHotelsObj] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8888/api/hotels');

      const removeDuplicates = list => {
        let seen = {};
        let uniqueList = [];
        list.forEach(item => {
          if (!seen[item.code]) uniqueList.push(item);
          seen[item.code] = true;
        });
        return uniqueList;
      };

      const uniqueList = removeDuplicates(res.data.list);
      const sortedList = uniqueList.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
      setAllHotelsObj(sortedList);
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      {allHotelsObj && (
        <HotelDetails hotelName={hotelName} allHotelsObj={allHotelsObj} />
      )}
    </div>
  );
};

export default App;
