import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import "../../src/main.css";

import "swiper/css";
import "swiper/css/pagination";

import message from "../../public/icons/message.png";
import play from "../../public/icons/play.png";

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

const testimonials_data = [
  {
    id: 1,
    name: "Kirsten Sy",
    position: "BYTE 4 President",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium harum accusamus et? Veritatis recusandae inventore necessitatibus quisquam velit, consequuntur error voluptatum beatae delectus eveniet dolore totam et sequi adipisci ea.",
  },
  {
    id: 2,
    name: "TJ Lao",
    position: "BYTE 3 President",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium harum accusamus et? Veritatis recusandae inventore necessitatibus quisquam velit, consequuntur error voluptatum beatae delectus eveniet dolore totam et sequi adipisci ea.",
  },
  {
    id: 3,
    name: "Lance Villacin",
    position: "BYTE 3 Executive VP",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium harum accusamus et? Veritatis recusandae inventore necessitatibus quisquam velit, consequuntur error voluptatum beatae delectus eveniet dolore totam et sequi adipisci ea.",
  },
];

const Testimonials = (props) => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide key={props.id}>
        <div className="h-full w-full flex md:flex-row flex-col items-center justify-around mb-50 md:mb-20">
          <div className="w-full md:w-1/2 flex items-center justify-center mr-0 md:mr-10">
            <div className="bg-gray-400 h-96 w-80"></div>
          </div>
          <div className="w-full md:w-1/2 flex items-start justify-start flex-col mt-10 md:m-0">
            <div>
              <img src={message} alt="Message" />
            </div>
            <div>
              <h2>Kirsten Sy</h2>
              <h3>BYTE 4 President</h3>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
              modi fuga ex libero cupiditate et consectetur eligendi ut sapiente
              facere magni, veniam doloribus tempora ipsa autem, laudantium
              atque. Dolore, velit?
            </p>
          </div>
          <img src={play} alt="Play" />
        </div>
      </SwiperSlide>
      <SwiperSlide key={props.id}>
        <div className="h-full w-full flex md:flex-row flex-col items-center justify-around mb-50 md:mb-20">
          <div className="w-full md:w-1/2 flex items-center justify-center mr-0 md:mr-10">
            <div className="bg-gray-400 h-96 w-80"></div>
          </div>
          <div className="w-full md:w-1/2 flex items-start justify-start flex-col mt-10 md:m-0">
            <div>
              <img src={message} alt="Message" />
            </div>
            <div>
              <h2>Kirsten Sy</h2>
              <h3>BYTE 4 President</h3>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
              modi fuga ex libero cupiditate et consectetur eligendi ut sapiente
              facere magni, veniam doloribus tempora ipsa autem, laudantium
              atque. Dolore, velit?
            </p>
          </div>
          <img src={play} alt="Play" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonials;
