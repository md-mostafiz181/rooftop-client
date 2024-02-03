import React from "react";
import Container from "../../../components/Container/Container";
import "./Chef.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import chef from "../../../assets/home/chef.png";

const Chef = () => {
  return (
    <Container>
      <div id="chef-part">
        <section>
          <SectionTitle
            subHeading="Should Try"
            heading="CHEF RECOMMENDS"
          ></SectionTitle>
        </section>

        <div className="card-main grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
          <div className="card w-96">
            <figure>
              <img
                src={chef}
                alt="chef image"
              />
            </figure>
            <div className="card-body bg-[#F3F3F3]">
              <h2 className="text-2xl font-bold text-center primaryFont">Caeser Salad</h2>
              <p className="primaryFont text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className=" btn-cart">ADD TO CART</button>
              </div>
            </div>
          </div>
          <div className="card w-96">
            <figure>
              <img
                src={chef}
                alt="chef image"
              />
            </figure>
            <div className="card-body bg-[#F3F3F3]">
              <h2 className="text-2xl font-bold text-center primaryFont">Caeser Salad</h2>
              <p className="primaryFont text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className=" btn-cart">ADD TO CART</button>
              </div>
            </div>
          </div>
          <div className="card w-96">
            <figure>
              <img
                src={chef}
                alt="chef image"
              />
            </figure>
            <div className="card-body bg-[#F3F3F3]">
              <h2 className="text-2xl font-bold text-center primaryFont">Caeser Salad</h2>
              <p className="primaryFont text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className=" btn-cart">ADD TO CART</button>
              </div>
            </div>
          </div>
          <div className="card w-96">
            <figure>
              <img
                src={chef}
                alt="chef image"
              />
            </figure>
            <div className="card-body bg-[#F3F3F3]">
              <h2 className="text-2xl font-bold text-center primaryFont">Caeser Salad</h2>
              <p className="primaryFont text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className=" btn-cart">ADD TO CART</button>
              </div>
            </div>
          </div>
          <div className="card w-96">
            <figure>
              <img
                src={chef}
                alt="chef image"
              />
            </figure>
            <div className="card-body bg-[#F3F3F3]">
              <h2 className="text-2xl font-bold text-center primaryFont">Caeser Salad</h2>
              <p className="primaryFont text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className=" btn-cart">ADD TO CART</button>
              </div>
            </div>
          </div>
          <div className="card w-96">
            <figure>
              <img
                src={chef}
                alt="chef image"
              />
            </figure>
            <div className="card-body bg-[#F3F3F3]">
              <h2 className="text-2xl font-bold text-center primaryFont">Caeser Salad</h2>
              <p className="primaryFont text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className=" btn-cart">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Chef;
