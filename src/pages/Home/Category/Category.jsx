import React from "react";
import "./Category.css";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Category = () => {
  return (
    <section id="category-part">


      <Container >

      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11 am to 10 pm"}
      ></SectionTitle>
        <section className="mt-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}


          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full" src={slide1} alt="" />
            <p className="  lg:text-2xl md:text-1xl sm:text-1xl primaryFont uppercase -mt-10 text-center text-white">Salad</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full"  src={slide2} alt="" />
            <p className="  lg:text-2xl md:text-1xl sm:text-1xl primaryFont uppercase -mt-10 text-center text-white">Pizza</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full"  src={slide3} alt="" />
            <p className="  lg:text-2xl md:text-1xl sm:text-1xl primaryFont uppercase -mt-10 text-center text-white">Soup</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full"  src={slide4} alt="" />
            <p className="  lg:text-2xl md:text-1xl sm:text-1xl primaryFont uppercase -mt-10 text-center text-white">Desserts</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full"  src={slide5} alt="" />
            <p className="  lg:text-2xl md:text-1xl sm:text-1xl primaryFont uppercase -mt-10 text-center text-white">Salad</p>
          </SwiperSlide>
        </Swiper>
        </section>
      </Container>
    </section>
  );
};

export default Category;
