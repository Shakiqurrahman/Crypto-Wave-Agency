import React from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { partnersData } from "../constants/Index";

const Partners = () => {
  return (
    <section className="pt-20 max-width">
      <h6 className="text-lg sm:text-2xl text-center text-secondary mb-2">
        Partners
      </h6>
      <h2 className="text-2xl sm:text-4xl text-center font-bold mb-4 sm:mb-8">
        Our Partners in Success
      </h2>
      <div className="select-none">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true} 
        >
          {partnersData.map((data) => (
            <div key={data.id}>
              <SwiperSlide>
                <h2 className="text-2xl text-center text-primary font-semibold">
                  {data.title}
                </h2>
                <div className="p-8 sm:p-16">
                  <img className="w-full" src={data.img} alt="" />
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
