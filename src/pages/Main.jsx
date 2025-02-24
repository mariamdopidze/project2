import React from "react";
import Header from "../components/Header";
import Range from "../components/Range";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto  max-w-[1440px] relative mb-[95px]">
        <div className="h-[716px] w-full">
          <img
            src="/images/wall.png"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="w-[643px] h-[443px] bg-[#FFF3E3] absolute top-[253px] left-[739px] pl-[39px] pt-[62px]">
            <span className="text-[#333333] font-semibold text-base font-sans">
              New Arrival
            </span>
            <h1 className="text-[#B88E2F] pt-[4px] font-bold text-5xl">
              Discover Our
              <span className="block text-[#B88E2F]">New Collection</span>
            </h1>
            <p className="text-[#333333] pt-[20px] text-lg font-medium">
              lorem ipsum dolar sit amet, consectetur adipiscing elit, Ut elit
              tellus, luctus nec ullamcorper mattis
            </p>
            <button className="w-[222px] h-[74px] bg-[#B88E2F] font-bold text-base text-white mt-[43px] rounded">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <Range />
    </div>
  );
};

export default Main;
