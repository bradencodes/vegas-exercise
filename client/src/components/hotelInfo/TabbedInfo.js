import React, { useState } from 'react';

const TabbedInfo = ({ hotelObj }) => {
  let selected = 'description';
  let [isCollapsed, setIsCollapsed] = useState(true);

  const toggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const makeMain = () => {
    if (selected === 'description') {
      return <p>{hotelObj.description}</p>;
    }
  };

  const makeToggleText = () => {
    if (selected === 'description') {
      if (isCollapsed) return 'SHOW FULL DESCRIPTION';
      else return 'HIDE FULL DESCRIPTION';
    }
    if (selected === 'details') {
      if (isCollapsed) return 'VIEW MORE DETAILS';
      else return 'VIEW FEWER DETAILS';
    }
  };

  return (
    <section className='tabbedInfo'>
      <div className='tabs'>
        <h3 className='tab selected'>DESCRIPTION</h3>
        <h3 className='tab'>DETAILS</h3>
        <h3 className='tab'>LOCATION</h3>
      </div>
      <main className={`main ${isCollapsed ? 'collapsed' : 'expanded'}`}>{makeMain()}</main>
      <button className='toggle' onClick={toggleIsCollapsed}>
        {makeToggleText()}
      </button>
    </section>
  );
};

export default TabbedInfo;
