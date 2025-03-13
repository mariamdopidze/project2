import React from "react";
import Header from "../components/Header";
import Exploring from "../components/Exploring";
import Handmade from "../components/Handmade";

const Blog = () => {
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
          <h1 className="text-5xl font-medium text-black">Blog</h1>
          <div className="flex mt-[9px] items-center">
            <span className="text-base text-black font-medium">Home</span>
            <img src="/images/arrow.png" alt="Arrow" className="mx-2" />
            <span className="text-base text-black font-light">Blog</span>
          </div>
        </div>
      </div>
      <div className="h-[2710px] bg-slate-300 pl-[100px] pt-[106px]">
        <div className="w-[820px] h-[2490px]">
        <img
          src="/images/Rectangle 68.png"
          alt=""
          className="w-[817px] h-[500px]"
        />
        <div className="flex gap-8 mt-[17px]">
          {[
            { src: "/images/admin.png", label: "Admin" },
            { src: "/images/calender.png", label: "Calendar" },
            { src: "/images/tag.png", label: "Tag" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={item.src} alt={item.label} className="w-6 h-6" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <h2 className="mt-[15px] text-3xl font-medium">Going all-in with millennial design</h2>
        <p className="mt-[12px] text-[#9F9F9F] text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <span className="underline cursor-pointer text-black mt-[30px] ">Read More</span>

        <Exploring/>
        <Handmade/>
      </div>

      
      </div>
    </div>
  );
};

export default Blog;
