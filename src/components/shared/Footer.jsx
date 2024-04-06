import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="mt-40 max-width pb-4">
      <div className="flex flex-wrap md:justify-between  gap-10 md:gap-0 mb-12">
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
          <ul className="mt-4 space-y-4 text-sm list-disc  px-4">
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <a href="/#about">About Us</a>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <a href="/#services">Our Services</a>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <a href="/#why-us">Why Us</a>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <a href="/#clients-partner">Clients & Partner</a>
            </li>
            <li className="hover:translate-x-3 hover:text-primary duration-200">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl text-white font-semibold">Services</h4>
          <ul className="mt-4 space-y-4 text-sm list-disc  px-4">
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
              className="size-10 rounded-lg  bg-[#110c2eb3] hover:bg-white hover:text-black duration-300 p-2"
              to="https://t.me/cryptowave_g"
              target="_blank"
            >
              <FaTelegramPlane className="text-2xl " />
            </Link>
            <Link
              className="size-10 rounded-lg  bg-[#110c2eb3] hover:bg-white hover:text-black duration-300 p-2"
              to="https://t.me/crypto_wave_ann"
              target="_blank"
            >
              <FaTelegramPlane className="text-2xl " />
            </Link>
            <Link
              className="size-10 rounded-lg  bg-[#110c2eb3] hover:bg-white hover:text-black duration-300 p-2"
              to="https://twitter.com/cryptowave___"
              target="_blank"
            >
              <FaXTwitter className="text-2xl " />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-5 border-t border-dark/20">
        <p className="text-center text-sm text-dark">All rights deserved - Shakiqur 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
