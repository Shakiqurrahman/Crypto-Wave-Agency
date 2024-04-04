import React from "react";
import { FaBuildingShield } from "react-icons/fa6";
import { MdDesignServices, MdOutlineTimeline } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { SiSlideshare } from "react-icons/si";



const Services = () => {
  return (
    <section className="pb-16 sm:pb-36 max-width">
      <h6 className="text-lg sm:text-2xl text-center text-secondary mb-2">
        Services
      </h6>
      <h2 className="text-2xl sm:text-4xl text-center font-bold mb-4 sm:mb-8">
        We help Build and Scale
      </h2>
      <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#110d2ed0] p-10 flex flex-col justify-center items-center space-y-4 rounded-[30px]">
          <FaBuildingShield className="text-5xl text-secondary" />
          <h3 className="text-2xl font-semibold">Foundation Building</h3>
          <p className="text-[16px] text-dark text-center">
            With our expertise and dedication, we lay the groundwork for your
            venture's long-term growth and sustainability, ensuring you're
            equipped to thrive in today's competitive landscape.
          </p>
        </div>
        <div className="bg-[#110d2ed0] p-10 flex flex-col justify-center items-center space-y-4 rounded-[30px]">
          <MdDesignServices className="text-5xl text-secondary" />
          <h3 className="text-2xl font-semibold">Design & Development</h3>
          <p className="text-[16px] text-dark text-center">
            Deliver UX/UI design, website and DAPP development, and blockchain
            solutions to create functional and user-friendly products.
          </p>
        </div>
        <div className="bg-[#110d2ed0] p-10 flex flex-col justify-center items-center space-y-4 rounded-[30px]">
          <MdOutlineTimeline className="text-5xl text-secondary" />
          <h3 className="text-2xl font-semibold">Marketing</h3>
          <p className="text-[16px] text-dark text-center">
            With 2000+ KOLs, we provide comprehensive marketing solutions to
            accelerate client growth.
          </p>
        </div>
        <div className="bg-[#110d2ed0] p-10 flex flex-col justify-center items-center space-y-4 rounded-[30px]">
          <SiSlideshare className="text-5xl text-secondary" />
          <h3 className="text-2xl font-semibold">Networks & Partnerships</h3>
          <p className="text-[16px] text-dark text-center">
            Access fundraising, audits, cybersecurity, market strategies,
            exchange collaborations, and launchpads through our extensive
            network.
          </p>
        </div>
        <div className="bg-[#110d2ed0] p-10 flex flex-col justify-center items-center space-y-4 rounded-[30px]">
          <HiUserGroup className="text-5xl text-secondary" />
          <h3 className="text-2xl font-semibold">Community Building</h3>
          <p className="text-[16px] text-dark text-center">
            We specialize in crafting tailored strategies to create vibrant,
            engaged communities around your brand, product, or cause.
          </p>
        </div>
        <div className="bg-[#110d2ed0] p-10 flex flex-col justify-center items-center space-y-4 rounded-[30px]">
          <MdOutlineTimeline className="text-5xl text-secondary" />
          <h3 className="text-2xl font-semibold">3D Studio</h3>
          <p className="text-[16px] text-dark text-center">
            Hub of creativity and innovation, specializing in crafting stunning
            and high-quality 3D visuals that captivate and engage audiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
