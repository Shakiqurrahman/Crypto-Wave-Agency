import React from 'react';
import ClientContact from './ClientContact';

const ContactUs = () => {
    return (
        <section id="contact" className="mb-40 max-width">
        <h6 className="text-lg sm:text-2xl text-center text-secondary mb-1 sm:mb-2">
          Contact Us
        </h6>
        <h2 className="text-2xl sm:text-4xl text-center font-bold mb-4 sm:mb-8">
        Reach Out to Our Agency
        </h2>
        <ClientContact />
        </section>
    );
};

export default ContactUs;