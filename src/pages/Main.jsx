import React from "react";

const Main = () => {
  return (
    <div className="mx-auto flex items-center justify-between max-w-[1250px] relative mt-[65px]">
      <div className="h-[716px] w-full">
        <img
          src="/images/wall.png"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="w-[550px] h-[400px] bg-[#FFF3E3] absolute top-[228px] left-[640px] ">
          <span className="text-[#333333]">New Arrival</span>
          <h1 className="text-[#B88E2F] ">Discover Our New Collection</h1>
          <p className="text-[#333333]">
            lorem ipsum dolar sit amet, consectetur adipiscing elit, Ut elit
            tellus, luctus nec ullamcorper mattis
          </p>
          <button className="w-[222px] h-[74px] bg-[#B88E2F] text-white">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
