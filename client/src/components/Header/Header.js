import { useState } from 'react';
import './Header.css';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {FaPlane, FaCarAlt, FaCalendarAlt} from "react-icons/fa";
import {MdAttractions, MdLocalTaxi} from "react-icons/md";
import {IoBedSharp, IoPerson} from "react-icons/io5";
import { DateRange} from 'react-date-range';
import { format } from 'date-fns';

const Header = (props) => {

  const [openCalendar, setOpenCalendar] = useState(false);

  const [currentDate, setCurrentDate] = useState([{
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }])

  const [openOptions, setOpenOptions] = useState(false);

  const [roomOptions, setRoomOptions] = useState({
      adults: 1,
      children: 0,
      rooms: 1
  })

  const handleOptionClick = (optionName, optionOperation) => {
    setRoomOptions(prev => {return {
      ...prev, [optionName]: optionOperation === "i" ? roomOptions[optionName] + 1 : roomOptions[optionName] - 1
    }})
  }

  return (
    <div className='header'>
      <div className={props.type === "list" ? "headerContainer listMode" : "headerContainer"}>
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

        {props.type !== "list" &&
          <> 
          <h1 className='title'>Book your next stay</h1>
          <p className='description'>Search deals on hotels, homes, and much more...</p>

          <div className='search'>
              <div className='searchItem'>
                <IoBedSharp className='icons'/>
                <input type="text" placeholder='Where are you going?' className='searchInput'/>
              </div>

              <div className='searchItem'>
                <FaCalendarAlt className='icons'/>
                <span className='searchText' onClick={() => setOpenCalendar(!openCalendar)}>
                  {`${format(currentDate[0].startDate, "MM/dd/yyyy")} to ${format(currentDate[0].endDate, "MM/dd/yyyy")} `}
                </span>
                {openCalendar && <DateRange 
                editableDateInputs = {true} 
                onChange = {item => setCurrentDate([item.selection])}
                moveRangeOnFirstSelection = {false}
                ranges = {currentDate}
                className="dateRange"
                />}
              </div>

              <div className='searchItem'>
                <IoPerson className='icons'/>
                <span className='searchText' onClick={() => setOpenOptions(!openOptions)}>
                  {`${roomOptions.adults} adult · ${roomOptions.children} children · ${roomOptions.rooms} room`} 
                </span>
                {openOptions && <div className='roomOptions'>
                  <div className='optionItem'>
                    <span className='optionText'>Adult</span>
                    <div className='optionCounter'>
                      <button className='counterButton' onClick={() => handleOptionClick("adults", "i")}>+</button>
                      <span className='counterNumber'>{roomOptions.adults}</span>
                      <button disabled={roomOptions.adults <= 1} className='counterButton' onClick={() => handleOptionClick("adults", "d")}>-</button>
                    </div>
                  </div>

                  <div className='optionItem'>
                    <span className='optionText'>Children</span>
                    <div className='optionCounter'>
                      <button className='counterButton' onClick={() => handleOptionClick("children", "i")}>+</button>
                      <span className='counterNumber'>{roomOptions.children}</span>
                      <button disabled={roomOptions.children <= 0} className='counterButton' onClick={() => handleOptionClick("children", "d")}>-</button>
                    </div>
                  </div>

                  <div className='optionItem'>
                    <span className='optionText'>Room</span>
                    <div className='optionCounter'>
                      <button className='counterButton' onClick={() => handleOptionClick("rooms", "i")}>+</button>
                      <span className='counterNumber'>{roomOptions.rooms}</span>
                      <button disabled={roomOptions.rooms <= 1} className='counterButton' onClick={() => handleOptionClick("rooms", "d")}>-</button>
                    </div>
                  </div>
                </div>}

              </div>

              <div className='searchItem'>
                <button className='searchButton'>Search</button>
              </div>
          </div>
        </>}
      </div>
    </div>
  )
}

export default Header