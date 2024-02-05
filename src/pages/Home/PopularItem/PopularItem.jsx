import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularItemCard from "../../Shared/PopularItemCard/PopularItemCard";
import Container from "../../../components/Container/Container";
import useMenu from "../../../hooks/useMenu";

const PopularItem = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  console.log(menu);
  return (
    <div className="mt-10 py-10">
      <Container>
        <section>
          <SectionTitle
            heading="Our Popular Menu"
            subHeading="our menu"
          ></SectionTitle>
        </section>
        <div className="grid md:grid-cols-2 gap-5 my-4 ">
          {popular.map((item) => (
            <PopularItemCard key={item._id} item={item}></PopularItemCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularItem;
