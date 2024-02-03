import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../../components/Container/Container";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {

    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch("reviews.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])


  return (
    <div id="testimonial-part">
      <Container>
        <section>
          <SectionTitle
            subHeading="What Our Client Say"
            heading="Testimonial"
          >
           
          </SectionTitle>
        </section>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        

        
        <div >
            {
                reviews.map(review=> <SwiperSlide
                key={reviews._id}
                >
                    <div className="flex flex-col items-center mt-10">
                      <Rating className="" style={{ maxWidth: 250 }} value={review.rating}  />
                    
                        <h5 className="px-10 text-center mt-2  text-black text-1xl primaryFont">{review.details}</h5>
                        <h2 className="text-center primaryFont text-3xl font-bold mt-4 text-orange-400">{review.name}</h2>
                    </div>
                </SwiperSlide> )
            }
            
        </div>

      </Swiper>

      </Container>
    </div>
  );
};

export default Testimonial;
