import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-between items-center px-14 py-8">
      <Link
        to="/"
        className="transform transition-transform duration-300 hover:scale-105"
      >
        <img src="/images/logo.png" className="h-8" alt="Flowbite Logo" />
      </Link>
      <div className="flex gap-[75px]">
        <Link
          to="/"
          className="text-[16px] font-medium hover:underline underline-offset-4 hover:text-grey-500"
        >
          Home
        </Link>
        <Link
          to="/Shop"
          className="text-[16px] font-medium hover:underline underline-offset-4 hover:text-grey-500"
        >
          Shop
        </Link>
        <Link
          to="/single"
          className="text-[16px] font-medium hover:underline underline-offset-4 hover:text-grey-500"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-[16px] font-medium hover:underline underline-offset-4 hover:text-grey-500"
        >
          Contact
        </Link>
      </div>
      <div className="flex gap-[45px]">
        <Link
          to="#"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <img src="/images/men.png" alt="" />
        </Link>
        <Link
          to="#"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <img src="/images/search.png" alt="" />
        </Link>
        <Link
          to="#"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <img src="/images/heart.png" alt="" />
        </Link>
        <Link
          to="/cart"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <img src="/images/cart.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
