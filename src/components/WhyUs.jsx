import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5"
import { MdOutlineDone } from "react-icons/md";
;
import rightImg from "../assets/bg-right.png";
import img from "../assets/why-us.svg";

const WhyUs = () => {
  return (
    <section className="mb-16 sm:mb-36 relative">
      <img
        className="absolute top-0 md:-top-[90%]  right-0 -z-10"
        src={rightImg}
        alt=""
      />

      <div className=" max-width">
        <h6 className="text-lg sm:text-2xl text-center text-secondary mb-2">
          Why Us
        </h6>
        <h2 className="text-2xl sm:text-[36px] leading-tight text-center font-bold mb-4 sm:mb-8">
          Your trusted partner for <br /> growth & success in Web3{" "}
        </h2>
        <div className="mt-20 flex flex-col md:flex-row gap-10 md:gap-6 items-center justify-center">
          <div className="w-full">
            <img className="w-4/5 mx-auto" src={img} alt="" />
            
          </div>
          <div className="w-full space-y-8">
            <div className="flex gap-3">
              <MdOutlineDone
                className="text-white translate-y-2 bg-secondary size-7 p-[1.8px] rounded-full"
              />
              <p className="text-dark text-[17px] w-full">
                Crypto Wave we bring a wealth of experience, a deep
                understanding of the crypto market, and a commitment to your
                success.
              </p>
            </div>
            <div className="flex gap-3">
              <MdOutlineDone
                className="text-white translate-y-2 bg-secondary size-7 p-[1.8px] rounded-full"
              />
              <p className="text-dark text-[17px] w-full">
                Our track record of delivering results speaks for itself, and
                our tailored approach ensures that we address your unique needs
                and challenges effectively.
              </p>
            </div>
            <div className="flex gap-3">
              <MdOutlineDone
                className="text-white translate-y-2 bg-secondary size-7 p-[1.8px] rounded-full"
              />
              <p className="text-dark text-[17px] w-full">
                With us by your side, you can confidently navigate the
                complexities of the crypto landscape and seize opportunities for
                growth and prosperity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
