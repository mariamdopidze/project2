import React from "react";
import { useState } from "react";

const AsgaardSofa = () => {
  const [selectedColor, setSectedColor] = useState("");

  const handleColorClick = (color) => {
    setSectedColor(color);
  };
  const size = ["L", "XL", "XS"];
  return (
    <div className="max-w-[1440px] mx-auto flex">
      <div className="flex mt-8   ml-28">
        <div className=" space-y-8">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src="/images/first.png"
              alt="Thumbnail"
              className="w-[76px] h-[80px]"
            />
          ))}
        </div>

        <img
          src="/images/cover.png"
          alt="Asgaard Sofa"
          className="w-[437px] h-[500px] "
        />
      </div>

      <div className="ml-[66px] ">
        <h1 className="text-5xl font-normal text-black mt-[35px]">
          Asgaard Sofa
        </h1>
        <span className="text-2xl font-medium text-[#9F9F9F]">
          Rs. 250,000.00
        </span>

        <div className="flex items-center mt-4">
          <img src="/images/Group 88.png" alt="Rating" className="w-20" />
          <img src="/images/Line.png" alt="Separator" className="mx-2" />
          <span className="text-gray-500 text-sm font-normal">
            5 Customer Review
          </span>
        </div>

        <p className="mt-4 text-black text-sm font-normal max-w-[424px]">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>

        <div className="mt-4 ">
          <span className="block text-sm font-normal text-[#9F9F9F]">Size</span>
          <div className="flex mt-2">
            {size.map((size, index) => (
              <div key={index} className="flex items-center me-4">
                <input
                  id={`size-${size}`}
                  type="checkbox"
                  className="hidden"
                  value={size}
                />
                <label
                  htmlFor={`size-${size}`}
                  className="w-[30px] h-[30px] rounded-md text-white flex items-center justify-center bg-[#B88E2F] gap-2"
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
          <span className="block text-sm font-normal text-[#9F9F9F] mt-4">
            Color
          </span>
          <div className="flex gap-[10px] mt-2">
            <div
              onClick={() => handleColorClick("purple")}
              className={`w-[32px] h-[32px] rounded-full cursor-pointer ${
                selectedColor === "purple" ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: "#816DFA" }}
            ></div>

            <div
              onClick={() => handleColorClick("yellow")}
              className={`w-[32px] h-[32px] rounded-full cursor-pointerbg-[#FFD58A] ${
                selectedColor === "black" ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: "#000000" }}
            ></div>

            <div
              onClick={() => handleColorClick("green")}
              className={`w-[32px] h-[32px] rounded-full cursor-pointer bg-[#83B18B] ${
                selectedColor === "brown" ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: "#B88E2F" }}
            ></div>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded-md">
            Add To Cart
          </button>
          <button className="px-6 py-2 border border-gray-800 text-gray-800 text-sm font-medium rounded-md">
            + Compare
          </button>
        </div>

        <hr className="my-6 border-gray-200" />
        <div className="flex flex-col text-[#9F9F9F] font-normal text-base space-y-3">
        <span >SKU:SS001</span>
        <span>Category:Sofas</span>
        <span>Tags: Sofa, Chair, Home,Shop</span>
        <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default AsgaardSofa;
