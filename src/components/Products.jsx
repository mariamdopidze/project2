import React from "react";
import Rooms from "./Rooms";

const Products = () => {
  return (
    <div>
      <h2 className="flex flex-col items-center text-center mt-[57px]">
        Our Products
      </h2>
      <div className="grid grid-flow-col grid-rows-2 gap-4 mx-auto pt-[32px] pl-[113px] pr-[92px]">
        <div>
          <img src="/images/syltherine.png" alt="" />
        </div>

        <div>
          
          <img src="/images/syltherine.png" alt="" />
        </div>

        <div>
        
          <img src="/images/lolito.png" alt="" />
        </div>
        <div>
        
          <img src="/images/respira.png" alt="" />
        </div>
        <div>
        
          <img src="/images/grifo.png" alt="" />
        </div>
        <div>
        
          <img src="/images/muggo.png" alt="" />
        </div>
        <div>
         
          <img src="/images/pingky.png" alt="" />
        </div>
        <div>
        
          <img src="/images/potty.png" alt="" />
        </div>
      </div>
      <button className="text-[#B88E2F] w-[245px] h-[48px] border-[#B88E2F] rounded-md border items-center text-center mx-auto flex top-[40px]">Show More</button>
    <Rooms/>
    </div>
  );
};

export default Products;
