import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularItem from "../PopularItem/PopularItem";
import Call from "../Call/Call";
import Chef from "../Chef/Chef";
import Feature from "../Feature/Feature";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Twin || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularItem></PopularItem>
      <Call></Call>
      <Chef></Chef>
      <Feature></Feature>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
