import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

const Shop = () => {
  const API_URL = "https://dummyjson.com/products?limit=16";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const icons = [
    { name: "quality", title: "Best Quality", span: "High-quality materials" },
    { name: "guarantee", title: "Warranty", span: "1-year warranty included" },
    { name: "shipping", title: "Fast Shipping", span: "Delivery in 2-5 days" },
    { name: "support", title: "24/7 Support", span: "We're here to help" }
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
    <div className="max-w-[1440px] bg-slate-300 mx-auto relative">
      <Header />
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

      <div className="h-[100px] bg-[#F9F1E7]"></div>

  
      {loading ? (
        <p className="text-center text-2xl font-semibold text-gray-700">Loading...</p>
      ) : (
        <div className="grid grid-cols-4 gap-6 p-6">
          {shopProduct.map((product, index) => (
            <div key={index} className="flex flex-col items-start bg-[#F4F5F7] p-4 rounded-lg">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-[#333333] text-2xl font-semibold">{product.title}</h3>
                <span className="text-[#333333] font-medium text-base">{product.span}</span>
                <p className="text-[#B88E2F] mt-2 text-xl font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

<div className="h-[270px] bg-[#FAF3EA] flex justify-start items-center pl-12 gap-12">
  {icons.map((icon, index) => (
    <div key={index} className="flex items-center gap-4">
      <img src={`/images/${icon.name}.png`} alt={icon.name} className="w-[48px] h-[48px]" />
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-[#333]">{icon.title}</h3>
        <span className="text-sm text-gray-600">{icon.span}</span>
      </div>
    </div>
  ))}
</div>
<Footer/>

    </div>
  );
};

export default Shop;
