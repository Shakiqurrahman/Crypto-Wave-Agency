import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/about-img.png";
import Lottie from "lottie-react";
import ImgGIF from '../assets/about-us.json'

const AboutUs = () => {
  return (
    <section id="about" className="py-16 sm:py-36 relative">
      <div className="max-width flex flex-col-reverse md:flex-row items-center justify-center gap-10 sm:gap-6">
        <div className="w-full">
          <h6 className="text-lg sm:text-2xl text-secondary mb-2">About Us</h6>
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">
            Welcome to <span className="text-primary">Crypto Wave</span>
          </h2>
          <p className="text-[16px] text-dark text-justify mb-6">
            Your premier destination for comprehensive crypto solutions. We
            specialize in providing top-tier services across the Cexs
            listing,Fundrasied,OTC Deal, Project development and marketing.
          </p>
          <p className="text-[16px] text-dark text-justify mb-6">
            Crypto Wave is committed to guiding our clients through the
            complexities of the crypto landscape with clarity and precision.
          </p>
          <p className="text-[16px] text-dark text-justify mb-6">
            At Crypto Wave, innovation is at the heart of everything we do. We
            stay ahead of the curve by leveraging the latest technologies and
            industry trends to deliver unparalleled results for our clients.
            Trust us to be your trusted partner in navigating the exciting world
            of cryptocurrency.
          </p>
          <div className="mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-secondary via-current to-primary p-0.5 rounded-[30px] inline-block py-3 hover:bg-gradient-to-l duration-500">
              <Link
                to="#contact"
                className="px-5 py-3 sm:py-[11px] bg-main rounded-[30px]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* <img className="w-full mx-auto animation-moving" src={img} alt="" /> */}
          <Lottie className="w-4/5 mx-auto" animationData={ImgGIF}/>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
