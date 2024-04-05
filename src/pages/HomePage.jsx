import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
    return (
        <>
        <Hero />
        <AboutUs />
        <Services />
        <WhyUs />
        <ContactUs />
        </>
    );
};

export default HomePage;