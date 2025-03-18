import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Shop = () => {
  const API_URL = "https://dummyjson.com/products?limit=16";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const icons = [
    { name: "quality", title: "Best Quality", span: "High-quality materials" },
    { name: "guarantee", title: "Warranty", span: "1-year warranty included" },
    { name: "shipping", title: "Fast Shipping", span: "Delivery in 2-5 days" },
    { name: "support", title: "24/7 Support", span: "We're here to help" },
  ];

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const shopProduct = data.map((product) => ({
    img: product.thumbnail,
    title: product.title,
    span: product.description,
    price: `$${product.price}`,
  }));

  return (
    <div>
       <Header />
    <div className="max-w-[1440px]  mx-auto relative">
     
      <div>
        <img
          src="/images/Rectangle.png"
          alt="img"
          className="h-[313px] w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Shop</h1>
          <span className="text-lg">Home / Shop</span>
        </div>
      </div>

      <div className="h-[100px] bg-[#F9F1E7] flex items-center pl-[45px]">
        <div className="flex justify-between w-full">
          <div className="flex items-center space-x-6">
            <img
              src="/images/filtering.png"
              alt="Filter Icon"
              className="w-5 h-5"
            />
            <span className="font-normal text-[#000000] text-xl">Filter</span>
            <img src="/images/Vector.png" alt="Icon" className="w-5 h-5" />
            <img src="/images/Vector2.png" alt="Icon" className="w-5 h-5" />
            <img src="/images/Line.png" alt="Line" className="h-[20px]" />
            <span className="text-[#000000] text-base font-normal">
              Showing 1-26 of 32 results
            </span>
          </div>

          <div className="flex items-center space-x-4 pr-[45px]">
            <span className="text-[#000000] text-xl font-normal">Show</span>
            <div className="px-4 py-1 bg-white border  rounded-md text-[#9F9F9F] text-xl font-normal">
              16
            </div>
            <span className="text-[#000000] text-xl font-normal">Sort by</span>
            <button className="px-4 py-1 bg-white border rounded-md text-[#9F9F9F] text-xl font-normal">
              Default
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-2xl font-semibold text-gray-700">
          Loading...
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-6 p-6 bg-white">
          {shopProduct.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white p-4 rounded-lg "
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-[284px] h-[301px] object-cover rounded-lg bg-slate-100 border border-gray-400"
              />
              <div className=" max-w-[284px] max-h-[145px] bg-gray-200 p-4 rounded-lg overflow-hidden">
                <h3 className="text-[#3A3A3A] text-2xl font-semibold truncate">
                  {product.title}
                </h3>
                <span className="text-[#898989] font-medium text-base block truncate">
                  {product.span}
                </span>
                <p className="text-[#3A3A3A] mt-2 text-xl font-semibold truncate">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      )}
<nav className="flex justify-center mt-[70px] mb-[83px]">
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
      
      <Footer />
    </div>
    </div>
  );
};

export default Shop;
