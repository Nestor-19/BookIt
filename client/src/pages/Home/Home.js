import React from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Cities from '../../components/Cities/Cities';
import Properties from '../../components/Properties/Properties';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='homeContainer'>
                <Cities />
                <h1 className='homeTitle'>Browse by property type</h1>
                <Properties />
            </div>
        </div>
    )
}

export default Home;