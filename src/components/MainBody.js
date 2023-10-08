import React from 'react';
import './MainBody.css'; 

function MainBody() {
  return (
    <div className='custom-component'>
      <h2 className='heading'>Find Over 25000+ C In India</h2>
      <div className='search-container'> 
        <input type='text' placeholder='Search for collage, exams, course and more..' className='search-bar' />
        <button className='search-button'>Search</button>
      </div>
      <button className='custom-button'>Need Counselling</button>
      <p className='underline-text'>Indian Institute Of Management, Ahemdabad</p>
    </div>
  );
}

export default MainBody;
