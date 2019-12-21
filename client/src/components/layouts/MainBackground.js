import React from 'react';
import About from './About';
import Education from './Education';

export const MainBackground = () => {
  return (
    <div className='container-fluid remove-all-margin-padding'>
      <div className='bg'></div>
      <div id='about'>
        <About />
      </div>
      <div id='education'>
        <Education />
      </div>
      <div id='skills'>
        <About />
      </div>
    </div>
  );
};

export default MainBackground;
