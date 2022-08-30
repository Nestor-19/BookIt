import { useState } from 'react'
import { format } from 'date-fns';
import './HotelList.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import Items from '../../components/Items/Items';


const HotelList = () => {

  const currDate = new Date();

  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [currentDate, setCurrentDate] = useState(location.state.currentDate);
  const [roomOptions, setRoomOptions] = useState(location.state.roomOptions);

  const [openCalendar, setOpenCalendar] = useState(false);



  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className='hotelListContainer'>
        <div className='hlWrapper'>
            <div className='hlSearch'>
              <h1 className='hlTitle'>Search</h1>
              <div className='hlItem'>
                  <label>Destination </label>
                  <input type="text" placeholder={destination}></input>
              </div>
              <div className='hlItem'>
                  <label>Check-in Date </label>
                  <span onClick={() => setOpenCalendar(!openCalendar)}>{`${format(currentDate[0].startDate, "MM/dd/yyyy")} to ${format(currentDate[0].endDate, "MM/dd/yyyy")} `}</span>
                  {openCalendar && <DateRange 
                    onChange = {item => setCurrentDate([item.selection])}
                    minDate={currDate}
                    ranges = {currentDate}
                  />}
              </div>

              <div className='hlItem'>
                <label className='optionItemTitle'>Options</label>
                <div className='hlOptions'>
                  <div className='optionItem'>
                    <span className='optionItemText'>Minimum Price</span>
                    <input className='optionInput' type="number"></input>
                  </div>
                  <div className='optionItem'>
                    <span className='optionItemText'>Maximum Price</span>
                    <input className='optionInput' type="number"></input>
                  </div>
                  <div className='optionItem'>
                    <span className='optionItemText'>Adult</span>
                    <input className='optionInput' type="number" placeholder={roomOptions.adults} min={1}></input>
                  </div>
                  <div className='optionItem'>
                    <span className='optionItemText'>Children</span>
                    <input className='optionInput' type="number" placeholder={roomOptions.children} min={0}></input>
                  </div>
                  <div className='optionItem'>
                    <span className='optionItemText'>Room</span>
                    <input className='optionInput' type="number" placeholder={roomOptions.rooms} min={1}></input>
                  </div>

                </div>
              </div>

              <button className='hlsearchButton'>Search</button>

            </div>
            <div className='hlResult'>
              <Items />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HotelList 