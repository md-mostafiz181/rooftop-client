import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "../../components/Container/Container";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Twin || Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our menu"}></Cover>
      <Container>
        <SectionTitle
          subHeading="Don't miss"
          heading="Today's offer"
        ></SectionTitle>

        <MenuCategory items={offered}></MenuCategory>

        {/* dessert menu items */}

        
      </Container>

      <Cover img={dessertImg} title={"Dessert"}></Cover>

      <Container>
       <MenuCategory items={dessert}></MenuCategory>
      </Container>

      <Cover img={saladImg} title={"Salad"}></Cover>

      <Container>
       <MenuCategory items={salad}></MenuCategory>
      </Container>

      <Cover img={pizzaImg} title={"Pizza"}></Cover>

      <Container>
       <MenuCategory items={pizza}></MenuCategory>
      </Container>
    </div>
  );
};

export default Menu;
