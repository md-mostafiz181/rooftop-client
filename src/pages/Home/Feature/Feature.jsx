import React from "react";
import "./Feature.css";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"

const Feature = () => {
  return (
    <div id="feature-part" className="bg-fixed">
      <div className="overlay"></div>
      <Container>
        <div className="feature-main">
          <section>
            <SectionTitle
              subHeading="Check it out"
              heading="FROM OUR MENU"
            ></SectionTitle>
          </section>

          <div className="feature-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-4 my-10">
            <div className="feature-item ">
              <img className="featuredImage" src={featuredImg} alt="" />

            </div>
            <div className="feature-item">
              <div className="featured-text">
                <h3 className="ps-5 text-white primaryFont">March 20, 2023</h3>
                <h2 className="ps-5 text-white text-1xl primaryFont my-3">WHERE CAN I GET SOME?</h2>
                <p className="ps-5 text-white primaryFont mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus eius doloremque aperiam placeat officiis dolore nihil repellat quis tempora eos. Molestias optio sit animi fugit iure odio. Non tenetur repellendus quisquam earum ipsam quaerat dolores est quam dignissimos placeat eos accusantium veritatis fugit blanditiis, velit omnis et. Ipsam, neque tenetur?</p>
                <button className="btn-read">Read More</button>

              </div>
            </div>
          </div>


        </div>
      </Container>
    </div>
  );
};

export default Feature;
