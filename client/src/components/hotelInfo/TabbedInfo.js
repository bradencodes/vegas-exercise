import React, { useState } from 'react';

const TabbedInfo = ({ hotelObj }) => {
  let selected = 'description';
  let isCollapsed = true;

  const makeMain = () => {
    if (selected === 'description') {
      return <p>{hotelObj.description}</p>;
    }
  };

  const makeToggleText = () => {
    if (selected === 'description') {
      if (isCollapsed) return 'SHOW FULL DESCRIPTION';
    }
  };

  return (
    <section className='tabbedInfo'>
      <div className='tabs'>
        <h3 className='tab selected'>DESCRIPTION</h3>
        <h3 className='tab'>DETAILS</h3>
        <h3 className='tab'>LOCATION</h3>
      </div>
      <main className='main collapsed'>{makeMain()}</main>
      <button className='toggle'>{makeToggleText()}</button>
    </section>
  );
};

export default TabbedInfo;
