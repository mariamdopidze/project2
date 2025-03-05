import React from "react";
import Header from "../components/Header";
import General from "../components/General";
import Footer from "../components/Footer";

const Comparison = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />

      
      <div className="relative">
        <img
          src="/images/Rectangle.png"
          alt="Banner"
          className="h-[313px] w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <img src="/images/HouseLogos.png" alt="House Logo" />
          <h1 className="text-5xl font-medium text-black">Product Comparison</h1>
          <div className="flex mt-[9px] items-center">
            <span className="text-base text-black font-medium">Home</span>
            <img src="/images/arrow.png" alt="Arrow" className="mx-2" />
            <span className="text-base text-black font-light">Comparison</span>
          </div>
        </div>
      </div>

     
      <div className="p-6 flex items-center justify-between gap-8">
        
       
        <div className="flex flex-col items-start">
          <h3 className="text-3xl font-medium max-w-[223px]">
            Go to Product page for more Products
          </h3>
          <span className="font-medium text-xl cursor-pointer text-[#727272] mt-[21px]">
            View More
          </span>
        </div>

       
        <div className="flex gap-[48px] mr-[76px]">
          {[1, 2].map((_, index) => (
            <div key={index} className="p-4 rounded-lg flex flex-col items-center">
              <img
                src="/images/first.png"
                alt="Asgaard Sofa"
                className="w-[280px] h-[177px] object-cover mb-2 rounded"
              />
              <h4 className="text-2xl font-medium">Asgaard Sofa</h4>
              <span className="text-lg font-medium">Rs. 250,000.00</span>
              <span className="text-yellow-500 font-semibold">⭐ 4.7</span>
            </div>
          ))}
        </div>

      
        <div className="flex flex-col items-center mr-[79px]">
          <h4 className="text-2xl font-semibold">Add A Product</h4>
          <button className="mt-2 px-6 py-2 border border-[#B88E2F] text-[#B88E2F] font-semibold rounded-lg">
            Add Product
          </button>
        </div>
      </div>
      <General/>
      <Footer/>
    </div>
  );
};

export default Comparison;
