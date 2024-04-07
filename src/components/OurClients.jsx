import React from "react";
import Marquee from "react-fast-marquee";
import { clientsRow1, clientsRow2 } from "../constants/Index";

const OurClients = () => {
  return (
    <section id="clients-partner" className="pt-20 sm:pt-32 relative">
      <div className="fade-gradient absolute w-full h-full z-30 "></div>
      <div className="absolute z-50 flex flex-col justify-center items-center w-full h-full">
      <h6 className="text-lg sm:text-2xl text-center text-secondary mb-2">
        Our Clients
      </h6>
      <h2 className="text-2xl sm:text-[40px] leading-snug text-center font-bold mb-4 sm:mb-8">
        We’re Grateful To Work <br />
        With Incredible Clients
      </h2>
      </div>
      <div className="mt-20 mb-16 lg:mb-32">
      <Marquee
        gradient
        gradientColor="#030014"
        gradientWidth={60}
        speed={35}
      >
        {clientsRow1.map((data) => (
          <img
            className="size-16 md:size-28 mx-6 md:mx-20 "
            key={data.id}
            src={data.img}
            alt="clients"
          />
        ))}
      </Marquee>
      <Marquee
        gradient
        gradientColor="#030014"
        gradientWidth={60}
        speed={35}
        direction="right"
        className="mt-20"
      >
        {clientsRow2.map((data) => (
          <img
            className="size-16 md:size-28 mx-6 md:mx-20 "
            key={data.id}
            src={data.img}
            alt="clients"
          />
        ))}
      </Marquee>
      </div>
    </section>
  );
};

export default OurClients;
