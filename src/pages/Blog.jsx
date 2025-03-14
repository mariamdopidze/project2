import React from "react";
import Header from "../components/Header";
import Exploring from "../components/Exploring";
import Handmade from "../components/Handmade";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

const Blog = () => {
  const icons = [
    { name: "quality", title: "Best Quality", span: "High-quality materials" },
    { name: "guarantee", title: "Warranty", span: "1-year warranty included" },
    { name: "shipping", title: "Fast Shipping", span: "Delivery in 2-5 days" },
    { name: "support", title: "24/7 Support", span: "We're here to help" },
  ];

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
      <div className="h-[2710px]  pl-[100px] pt-[106px] flex">
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
          <h2 className="mt-[15px] text-3xl font-medium">
            Going all-in with millennial design
          </h2>
          <p className="mt-[12px] text-[#9F9F9F] text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <span className="underline cursor-pointer text-black mt-[30px] ">
            Read More
          </span>

          <Exploring />
          <Handmade />

          <nav className="flex justify-end mt-[54px]">
            <ul className="inline-flex -space-x-px text-base gap-10">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-[60px] w-[60px] leading-tight text-gray-500 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-[60px] w-[60px] leading-tight text-gray-500 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-4 h-[60px] w-[60px] text-blue-600 rounded-xl border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-[60px] w-[98px] leading-tight text-gray-500 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-[393px] h-[537px] ml-[30px] ">
          <form className="w-[311px] h-[58px] mt-[22px] mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div class="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-black rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </form>
         <Categories/>
        </div>
      </div>
      <div className="h-[270px] bg-[#FAF3EA] flex justify-center  mx-auto items-center  gap-12">
        {icons.map((icon, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={`/images/${icon.name}.png`}
              alt={icon.name}
              className="w-[48px] h-[48px]"
            />
            <div className="flex flex-col">
              <h3 className="text-2xl  font-semibold text-[#242424]">
                {icon.title}
              </h3>
              <span className="text-xl font-medium text-[#898989]">
                {icon.span}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
