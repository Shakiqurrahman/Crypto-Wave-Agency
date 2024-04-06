import React from "react";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { teamData } from "../constants/Index";
import leftImg from '../assets/bg-left2.png'

import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section id="team" className="pt-20 sm:pt-32 relative">
        <img className="absolute opacity-70 lg:-top-[40%] -top-40 left-0 -z-10" src={leftImg} alt="" />
      <div className="max-width">
      <h6 className="text-lg sm:text-2xl text-center text-secondary mb-2">
        Our Team
      </h6>
      <h2 className="text-2xl sm:text-4xl text-center font-bold mb-4 sm:mb-8">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {teamData.map((data) => (
          <div key={data.id} className="p-10 bg-[#110d2ed0] rounded-xl flex flex-col justify-center items-center">
            <div className="size-52 pt-1 bg-dark overflow-hidden rounded-xl">
              <img src={data.img} className="w-full" alt="Team Member" />
            </div>
            <h2 className="text-xl text-center text-secondary font-bold mt-3">{data.name}</h2>
            <h6 className="text-sm mb-4 text-dark">{data.profession}</h6>
            <div className="flex gap-3">
              <Link to={data?.linkedin}>
                <FaLinkedinIn className="text-lg size-8 p-2 bg-slate-300 rounded-md text-black hover:bg-secondary hover:text-white duration-300"/>
              </Link>
              <Link to={data?.telegram}>
                <FaTelegramPlane className="text-lg size-8 p-2 bg-slate-300 rounded-md text-black hover:bg-secondary hover:text-white duration-300"/>
              </Link>
              {data.twitter && (
                <Link to={data?.twitter}>
                  <FaXTwitter className="text-lg size-8 p-2 bg-slate-300 rounded-md text-black hover:bg-secondary hover:text-white duration-300"/>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Team;
