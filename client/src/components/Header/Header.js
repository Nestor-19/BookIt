import React from 'react';
import './Header.css';
import {FaPlane, FaCarAlt, FaCalendarAlt} from "react-icons/fa";
import {MdAttractions, MdLocalTaxi} from "react-icons/md";
import {IoBedSharp, IoPerson} from "react-icons/io5";

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
              <div className='headerListItem active'>
                  <IoBedSharp />
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

        <div className='search'>
            <div className='searchItem'>
              <IoBedSharp className='icons'/>
              <input type="text" placeholder='Where are you going?' className='searchInput'/>
            </div>
            <div className='searchItem'>
              <FaCalendarAlt className='icons'/>
              <span className='searchText'> Check-in - Check-out</span>
            </div>
            <div className='searchItem'>
              <IoPerson className='icons'/>
              <span className='searchText'> 2 adults 0 children 1 room</span>
            </div>
            <div className='searchItem'>
              <button className='searchButton'>Search</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header