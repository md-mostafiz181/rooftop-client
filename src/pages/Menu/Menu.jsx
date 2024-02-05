import React from "react";
import { Helmet} from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import PopularItem from "../Home/PopularItem/PopularItem";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Twin || Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our menu"}></Cover>
      <PopularItem></PopularItem>
     
    </div>
  );
};

export default Menu;
