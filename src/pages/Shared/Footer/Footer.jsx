import React from "react";
import "./Footer.css";
import Container from "../../../components/Container/Container";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer-part">
      <Container>
        <div className="footer-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <div className="footer-left text-center ">
            <h1 className="text-3xl font-bold primaryFont text-white">
              CONTACT US
            </h1>

            <div className="priamryFont text-white mt-5">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
          <div className="footer-right text-center  ">
            <h1 className="text-3xl font-bold primaryFont text-white">
              FOLLOW US
            </h1>
            <p className="text-white mt-5">Join us on social media</p>

            <div className="icon-div flex justify-center items-center gap-5 text-white text-3xl">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </Container>


    </div>
  );
};

export default Footer;
