import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars, faEllipsisV, faGraduationCap, faMapMarker, faAngleDown, faPen } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src="https://images.yourstory.com/cs/images/companies/CollegeDunia-1591254020862.PNG" alt="Header Image" />
            </div>
            <div style={{cursor:'pointer'}}>
                <div style={{ color: 'orange', fontWeight: 'bold' }}>
                    <FontAwesomeIcon icon={faGraduationCap} /> Select Goal & <FontAwesomeIcon icon={faMapMarker} />  City
                </div>
                <FontAwesomeIcon icon={faAngleDown} /> Select Goal
            </div>

            <div className="header-center">
                <input type="text" className="search-bar" placeholder='Search for collage, exams, course and more..' />
            </div>
            <div style={{cursor:'pointer'}}>
                <FontAwesomeIcon icon={faPen} /> Write a Review
                <div style={{ border: '1px solid black', fontSize: '12px', textAlign: 'center', width: '80px', marginLeft: '25px', backgroundColor: 'orange' }}>
                    Get upto 500*
                </div>
            </div>

            <div className="header-right">
                <a href="#" className="explore-icon" >
                    <FontAwesomeIcon icon={faEllipsisV} />
                    <FontAwesomeIcon icon={faEllipsisV} />
                    <FontAwesomeIcon icon={faEllipsisV} />  Explore
                </a>
                {/* <p>Explore</p> */}
                <a href="#" className="notification-icon" style={{ border: '2px solid black', borderRadius: '50%', padding: '10px', position: 'relative' }}>
                    <FontAwesomeIcon icon={faBell} />
                    <span className="notification-alert" style={{ position: 'absolute', top: '-2px', right: '-2px', width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%', textAlign: 'center', color: 'white', fontWeight: 'bold' }}>

                    </span>
                </a>
                <a href="#" className="explore-icon" style={{ position: 'relative', display: 'inline-block' }}>
                    <div className="ellipse-border">
                        <FontAwesomeIcon icon={faBars} />
                        <div className="circle-inside">
                            <div id='paintCircle'>
                           
                            </div>
                        </div>
                    </div>
                 
                </a>

            </div>
        </div>
    );
}

export default Header;
