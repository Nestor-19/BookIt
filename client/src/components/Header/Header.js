import React from 'react';
import './Header.css';
import {FaPlane, FaBed, FaCarAlt} from "react-icons/fa";
import {MdAttractions, MdLocalTaxi} from "react-icons/md";

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
              <div className='headerListItem active'>
                  <FaBed />
                  <span>Stays</span>
              </div>
              <div className='headerListItem'>
                  <FaPlane />
                  <span>Flights</span>
              </div>
              <div className='headerListItem'>
                  <FaCarAlt />
                  <span>Car Rentals</span>
              </div>
              <div className='headerListItem'>
                  <MdAttractions />
                  <span>Attractions</span>
              </div>
              <div className='headerListItem'>
                  <MdLocalTaxi />
                  <span>Airport Taxis</span>
              </div>
        </div>

        <h1 className='title'>Book your next stay</h1>
        <p className='description'>Search deals on hotels, homes, and much more...</p>

      </div>
    </div>
  )
}

export default Header