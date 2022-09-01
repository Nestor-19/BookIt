import React from 'react'
import './Hotel.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import {IoLocationSharp} from "react-icons/io5";
import MailingList from '../../components/MailingList/MailingList';
import Footer from '../../components/Footer/Footer';

const Hotel = () => {

  const tempImages = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1000/237443247.jpg?k=af7add425dbe8ad78849a8442e0968c9cceee4318403916ae09519dcf600c996&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/237443326.jpg?k=8c5d8cb1bc80c01a699949a76886e15f2e6ca9e87314815683078b35296fe162&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/226843799.jpg?k=8831d9a09758f4dd6fc7a580afad2028dd53d83c6c72fe8993e8fbf917106b07&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/237443352.jpg?k=4bf49302d21ccaebdc1d575ea0cfb41f3715d6ef1a771216e3c306d33f796831&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/237443203.jpg?k=3a6affd40ed8b8481e36c4174a725004589d3e3f81bb9aa78806679ef942eefc&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/226843808.jpg?k=f5064c2887c026d04e635fa803755dff16853b874753e88c4a5fb828b78507c4&o=&hp=1"
    },
  ];


  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className='hotelContainer'>
        <div className='hWrapper'>

          <button className='hButton'>Reserve</button>

          <h1 className='hTitle'>Hôtel Regent's Garden - Astotel</h1>

          <div className='hAddress'>
            <IoLocationSharp />
            <span>6, Rue Pierre Demours, 17th arr., 75017 Paris, France</span>
          </div>

          <span className='hDistance'> 701 m from Charles de Gaulle – Étoile Metro and RER Stations</span>
          <span className='hPrice'>Get a free taxi to airport</span>

          <div className='hImages'>
            {tempImages.map(image => (
              <div className='hImageWrapper'>
                <img src={image.src} className='hImage'/>
              </div>
            ))}
          </div>

          <div className='hDetails'>
              <div className='hDetailText'>
                <p className='hDescription'>
                  Located in central Paris, this hotel is a 10-minute walk from the Arc de Triomphe and the Palais des Congrès de Paris. It offers elegant guest rooms and a garden. Free WiFi is available.
                  The contemporary rooms are equipped with air conditioning, a flat-screen TV, an iPad and a mini-bar.
                </p>
                <p className='hDescription'>
                  Regent's Garden serves a buffet breakfast with fair-trade teas and coffee and organic cereals and jams. Guests can enjoy the environmentally friendly breakfast in the salon or on the terrace.
                  With a 24-hour reception, an airport shuttle is also available.
                </p>
                <p className='hDescription'>
                This is our guests' favorite part of Paris, according to independent reviews.
                Couples in particular like the location – they rated it 9.5 for a two-person trip.
                </p>
                <p className='hDescription'>
                  Hôtel Regent's Garden - Astotel has been welcoming Booking.com guests since Jun 7, 2005
                Hotel chain/brand: Astotel
                </p>
              </div>

              <div className='hDetailPrice'>
                <h1>Perfect for a 5-night stay!</h1>
                <span>Located in the best-rated area in Paris, this hotel has an excellent location score of 9.3</span>
                <h2>
                  <b>$855</b> (5 nights)
                </h2>
                <button className='hReserve'>Reserve</button>
              </div>
          </div>
        </div>
        <MailingList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel

