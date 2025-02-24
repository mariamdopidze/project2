import React from "react";
import Products from "./Products";

const categories = [
  { name: "Dining", image: "/images/dining.png" },
  { name: "Living", image: "/images/living.png" },
  { name: "Bedroom", image: "/images/bedroom.png" },
];

const Range = () => {
  return (
    <div className="max-w-[1440px]  w-full mx-auto bg-white mt-[-100px]">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[#333333] mt-[56px] font-bold
 text-3xl">Browse The Range</h2>
        <span className="text-[#666666] font-normal text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>

      <div className="flex items-center pl-[113px] gap-10 pt-[62px]">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={category.image} alt={category.name} />
            <span className="text-[#333333] pt-[30px] font-semibold text-2xl">{category.name}</span>
          </div>
        ))}
      </div>

      <Products />
    </div>
  );
};

export default Range;
