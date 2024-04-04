import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';

const HomePage = () => {
    return (
        <>
        <div className='max-width'>
        <Hero />
        </div>
        <AboutUs />
        </>
    );
};

export default HomePage;