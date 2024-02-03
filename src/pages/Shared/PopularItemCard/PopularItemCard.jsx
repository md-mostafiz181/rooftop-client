import React from "react";
import Container from "../../../components/Container/Container";

const PopularItemCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <Container>
      <div className="flex space-x-5 px-2">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[100px]"
          src={image}
          alt="popular item image"
        />
        <div>
                <h3 className="uppercase primaryFont text-2xl ">{name}-----------</h3>
                <h5 className="primaryFont">{recipe}</h5>
        </div>
        <div>
            <p className="primaryFont font-bold text-[#BB8506]">{price}</p>
        </div>
      </div>
    </Container>
  );
};

export default PopularItemCard;
