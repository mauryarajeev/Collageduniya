import React from 'react';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const courseLinks = ['Courses', 'B.Tech', 'MBA','M.Tech', 'BBBS', 'B.com', 'B.Sc', 'B.Sc(Nursing)', 'B.A', 'BBA', 'BCA'];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {courseLinks.map((course, index) => (
          <li key={index} className="nav-item">
            <a href="#">{course}</a>
          </li>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%', color: 'white' }}>
          <FontAwesomeIcon icon={faTag} style={{ marginRight: '5px', marginTop:'5px', color: 'aqua' }} />Course Finder
        </div>

      </ul>

    </nav>
  );
}

export default Navbar;
