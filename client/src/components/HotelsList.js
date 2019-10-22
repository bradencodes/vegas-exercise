import React from 'react'

const HotelsList = ({ allHotelsObj }) => {
  return (
    <ul className='hotelsList'>
      {allHotelsObj.map(hotel => (
        <li key={hotel.code}>
          <span className='name'>{hotel.name}</span>
          <span className='price'>${hotel.price}</span>
        </li>
      ))}
    </ul>
  )
}

export default HotelsList
