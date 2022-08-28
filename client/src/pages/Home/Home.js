import React from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Cities from '../../components/Cities/Cities';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='homeContainer'>
                <Cities />
            </div>
        </div>
    )
}

export default Home;