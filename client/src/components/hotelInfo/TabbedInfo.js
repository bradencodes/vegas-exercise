import React, { useState } from 'react';

const TabbedInfo = ({ hotelObj, selected, setSelected }) => {
  let [isCollapsed, setIsCollapsed] = useState(true);

  const toggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const makeMain = () => {
    if (selected === 'description') {
      return <p>{hotelObj.description}</p>;
    } else if (selected === 'details') {
      return (
        <>
          {hotelObj.details.map(detail => (
            <dl>
              <dt className='label'>{detail.label}:</dt>
              <dd className='value'>{detail.value}</dd>
            </dl>
          ))}
        </>
      );
    } else {
      const hotelMapUrl = hotelObj.media.filter(
        asset => asset.type === 'productMap'
      )[0].href;
      const { address, city, state, postalCode } = hotelObj.location;
      const completeAddress = `${address}, ${city}, ${state} ${postalCode}`;
      return (
        <>
          <span className='address'>{completeAddress}</span>
          <img className='hotelMap' src={hotelMapUrl} alt='hotel_map' />
        </>
      );
    }
  };

  const makeToggleText = () => {
    if (selected === 'description') {
      if (isCollapsed) return 'SHOW FULL DESCRIPTION';
      else return 'HIDE FULL DESCRIPTION';
    } else if (selected === 'details') {
      if (isCollapsed) return 'VIEW MORE DETAILS';
      else return 'VIEW FEWER DETAILS';
    }
  };

  return (
    <section className='tabbedInfo'>
      <div className='tabs'>
        <h3
          className={`tab ${selected === 'description' ? 'selected' : ''}`}
          onClick={() => setSelected('description')}
        >
          DESCRIPTION
        </h3>
        <h3
          className={`tab ${selected === 'details' ? 'selected' : ''}`}
          onClick={() => setSelected('details')}
        >
          DETAILS
        </h3>
        <h3
          className={`tab ${selected === 'location' ? 'selected' : ''}`}
          onClick={() => setSelected('location')}
        >
          LOCATION
        </h3>
      </div>
      <main
        className={`main ${
          isCollapsed && selected !== 'location' ? 'collapsed' : 'expanded'
        }`}
      >
        {makeMain()}
      </main>
      {selected !== 'location' && (
        <button
          className={`toggle ${isCollapsed ? 'down' : 'up'}`}
          onClick={toggleIsCollapsed}
        >
          {makeToggleText()}
        </button>
      )}
    </section>
  );
};

export default TabbedInfo;
