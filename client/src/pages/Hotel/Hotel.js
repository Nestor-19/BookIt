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
      src: "https://cf.bstatic.com/xdata/images/hotel/max1000/237443247.jpg?k=af7add425dbe8ad78849a8442e0968c9cceee4318403916ae09519dcf600c996&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1000/237443247.jpg?k=af7add425dbe8ad78849a8442e0968c9cceee4318403916ae09519dcf600c996&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1000/237443247.jpg?k=af7add425dbe8ad78849a8442e0968c9cceee4318403916ae09519dcf600c996&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1000/237443247.jpg?k=af7add425dbe8ad78849a8442e0968c9cceee4318403916ae09519dcf600c996&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1000/237443247.jpg?k=af7add425dbe8ad78849a8442e0968c9cceee4318403916ae09519dcf600c996&o=&hp=1"
    },
  ];


  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className='hotelContainer'>
        <div className='hWrapper'>

          <button className='hButton'>Reserve</button>

          <h1 className='hTitle'>Rixos</h1>

          <div className='hAddress'>
            <IoLocationSharp />
            <span>Some temporary address</span>
          </div>

          <span className='hDistance'>Some temporary distance</span>
          <span className='hPrice'>Some temporary $price</span>

          <div className='hImages'>
            {tempImages.map(image => (
              <div className='hImageWrapper'>
                <img src={image.src} className='hImage'/>
              </div>
            ))}
          </div>

          <div className='hDetails'>
              <div className='hDetailText'>
                <h1 className='hTitle'>Hôtel Regent's Garden - Astotel</h1>
                <p className='hDescription'>
                Located in central Paris, this hotel is a 10-minute walk from the Arc de Triomphe and the Palais des Congrès de Paris. It offers elegant guest rooms and a garden. Free WiFi is available.
                The contemporary rooms are equipped with air conditioning, a flat-screen TV, an iPad and a mini-bar. Each room has a private bathroom with a hairdryer and free European Ecolabel bathroom amenities. This hotel provides duvets made from fair-trade cotton.
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

