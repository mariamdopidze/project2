import React from "react";
import Rooms from "./Rooms";

const productData = [
  {
    img: "/images/syltherine.png",
    title: "Syltherine",
    span: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    img: "/images/syltherine.png",
    title: "Syltherine",
    span: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    img: "/images/lolito.png",
    title: "Lolito",
    span: "Stylish cafe chair",
    price: "Rp2.500.000",
  },
  {
    img: "/images/respira.png",
    title: "Respira",
    span: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    img: "/images/grifo.png",
    title: "Grifo",
    span: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    img: "/images/muggo.png",
    title: "Muggo",
    span: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    img: "/images/pingky.png",
    title: "Pingky",
    span: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    img: "/images/potty.png",
    title: "Potty",
    span: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
];

const Products = () => {
  return (
    <div>
      <h2 className="flex flex-col items-center text-center mt-[57px] font-bold text-4xl">
        Our Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto pt-[32px] pl-[113px] pr-[92px]">
        {productData.map((product, index) => (
          <div key={index} className="flex flex-col items-start bg-[#F4F5F7]">
            <img src={product.img} alt={product.title} className="w-full" />
            <div className="mt-4 text-center">
              <h3 className="text-[#333333] text-2xl font-semibold ">
                {product.title}
              </h3>
              <span className="text-[#333333] font-medium text-base">
                {product.span}
              </span>
              <p className="text-[#B88E2F] mt-2 text-xl font-semibold">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="text-[#B88E2F] w-[245px] h-[48px] border-[#B88E2F] rounded-md border items-center justify-center text-center mx-auto text-base font-semibold flex">
        Show More
      </button>

      <Rooms />
    </div>
  );
};

export default Products;
