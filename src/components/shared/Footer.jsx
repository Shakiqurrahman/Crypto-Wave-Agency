import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="pt-40 pb-4 relative">
      <div className="absolute inset-0 -z-20 h-full w-full items-center px-5 py-24 [background:radial-gradient(155%_125%_at_50%_10%,#030014_40%,#2b0331_100%)]"></div>
      <div className="max-width flex flex-wrap md:justify-between  gap-y-10 gap-x-6 md:gap-0 mb-12">
        <div className="md:w-1/4 text-center">
          <img className="w-28 mx-auto" src={logo} alt="" />
          <h2 className="text-xl text-white font-semibold my-2">
            Crypto<span className="text-primary"> Wave</span>{" "}
          </h2>
          <p className="text-dark text-sm">
            Crypto Wave is committed to guiding our clients through the
            complexities of the crypto landscape with clarity and precision.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-white font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-[13px] sm:text-sm list-disc  px-4 text-dark">
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <Link to="/#about">About Us</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <Link to="/#services">Our Services</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <Link to="/#why-us">Why Us</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <Link to="/#clients-partner">Clients & Partner</Link>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl text-white font-semibold">Services</h4>
          <ul className="mt-4 space-y-3 text-[13px] sm:text-sm list-disc  px-4 text-dark">
            <li className="hover:translate-x-3 duration-200">
              Foundation Building
            </li>
            <li className="hover:translate-x-3 duration-200">
              Design & Development
            </li>
            <li className="hover:translate-x-3 duration-200">Marketing</li>
            <li className="hover:translate-x-3 duration-200">
              Networks & Partnerships
            </li>
            <li className="hover:translate-x-3 duration-200">
              Community Building
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl text-white font-semibold">Follow Us</h4>
          <div className="flex gap-4 mt-6">
            <Link
              className="size-10 rounded-lg  bg-[#191145a9] hover:bg-white hover:text-black duration-300 p-2"
              to="https://t.me/cryptowave_g"
              target="_blank"
            >
              <FaTelegramPlane className="text-2xl " />
            </Link>
            <Link
              className="size-10 rounded-lg  bg-[#191145a9] hover:bg-white hover:text-black duration-300 p-2"
              to="https://t.me/crypto_wave_ann"
              target="_blank"
            >
              <FaTelegramPlane className="text-2xl " />
            </Link>
            <Link
              className="size-10 rounded-lg  bg-[#191145a9] hover:bg-white hover:text-black duration-300 p-2"
              to="https://twitter.com/cryptowave___"
              target="_blank"
            >
              <FaXTwitter className="text-2xl " />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-5 border-t border-dark/20">
        <p className="text-center text-[13px] text-dark">
          Copyright © 2024 Crypto Wave | Developed By{" "}
          <Link
            to="https://shakiqur-rahman.netlify.app/#"
            target="_blank"
            className="text-blue-600"
          >
            DevIt BD
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
