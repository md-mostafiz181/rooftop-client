import React from "react";
import { Parallax } from 'react-parallax';

const Cover = ({img, title}) => {
  return (

    <Parallax
    blur={{ min: -50, max: 50 }}
    bgImage={img}
    bgImageAlt="the dog"
    strength={-200}
>
<div
      className="hero h-[700px]"
     
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase primaryFont">{title}</h1>
          <p className="mb-5 uppercase primaryFont lg:text-2xl md:text-1xl sm:text-1xl">
            would you like to try this dish?
          </p>
          
        </div>
      </div>
    </div>
</Parallax>

  );
};

export default Cover;
