import React, { useEffect, useState } from "react";

const Relatedproduct = () => {
  const API_URL = "https://dummyjson.com/products?limit=4";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      console.error("error feching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchData()
  },[])


  const products =data.map((product) => ({
    img: product.thumbnail,
    title: product.title,
    span: product.description,
    price: `$${product.price}`,
  }));
  return <div>
     <hr className="my-6 border-gray-200" />
    <div className="mx-auto text-center text-[#000000] font-medium text-4xl">Related Products</div>
  {loading ? (
        <p className="text-center text-2xl font-semibold text-gray-700">
          Loading...
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-2 p-6 bg-white  ">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white p-4 rounded-lg "
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-[284px] h-[301px] object-cover rounded-lg bg-slate-100 border border-gray-400"
              />
              <div className=" max-w-[284px] max-h-[145px] overflow-hidden  bg-gray-200 p-4 rounded-lg">
                <h3 className="text-[#3A3A3A] text-2xl font-semibold truncate ">
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
      <button className=" text-[#B88E2F] font-semibold text-base border border-[#B88E2F] w-[245px] h-[48px] mx-auto block">Show More</button>

  </div>;
};

export default Relatedproduct;
