import React from "react";
import PopularItemCard from "../../Shared/PopularItemCard/PopularItemCard";
import Cover from "../../Shared/Cover/Cover";
import "./MenuCategory.css"

const MenuCategory = ({ items, title}) => {
    console.log(items)
  return (
    <div>
      {title && <Cover  title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-5 my-10 ">
        {items ?.map((item) => (
          <PopularItemCard key={item._id} item={item}></PopularItemCard>
        ))}

       
      </div>
      <button id="btn-order" className="uppercase primaryFont">Order your Favourite Food </button>
    </div>
  );
};

export default MenuCategory;
