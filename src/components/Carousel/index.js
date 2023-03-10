import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = ({ data }) => {
  useEffect(() => {
    console.log("))))", data.data);
  }, [data]);
  return (
    <div className="overflow-x-hidden">
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.data?.map((category, index) => (
          <SwiperSlide className="w-full bg-transparent rounded-md" key={index}>
            <div className="w-full bg-transparent rounded-md shadow">
              <img
                src={category.avatar}
                alt={category.title}
                className="w-full rounded-md"
              />
              <div className="w-full text-gray-700 text-center text-xl font-bold">
                {category.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
