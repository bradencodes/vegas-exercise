import React from 'react'

const HotelsList = ({ allHotelsObj }) => {
  return (
    <ul className='hotelsList'>
      {allHotelsObj.map(hotel => (
        <li key={hotel.code}>
          <span>{hotel.name}</span>
          <span>${hotel.price}</span>
        </li>
      ))}
    </ul>
  )
}

export default HotelsList
