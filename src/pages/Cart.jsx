import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {

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
          <h1 className="text-5xl font-medium text-black">Cart</h1>
          <div className="flex mt-[9px] items-center">
            <span className="text-base text-black font-medium">Home</span>
            <img src="/images/arrow.png" alt="Arrow" className="mx-2" />
            <span className="text-base text-black font-light">Cart</span>
          </div>
        </div>
      </div>

      <div className="flex gap-10 mt-10 h-[525px]">
        <div className="w-[817px] p-4">
          <ul className="flex px-6 gap-4 items-center justify-between h-[55px] font-medium bg-[#F9F1E7] p-2 rounded">
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
          <div className="flex items-center gap-8 mt-4">
            <img
              src="/images/first.png"
              alt="Product"
              className="w-[80px] h-[80px]"
            />
            <span>Asgaard sofa</span>
            <span>Rs. 250,000.00</span>
            <span>Rs. 250,000.00</span>
          </div>
        </div>

        <div className="w-[393px] h-[390px] bg-[#F9F1E7] p-6 rounded-lg flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-center">Cart Totals</h3>
          <div className="flex justify-between border-b pb-2">
            <span className="text-base">Subtotal</span>
            <span className="text-base">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between border-b pb-2 mt-2">
            <span className="text-lg font-medium">Total</span>
            <span className="text-lg font-medium">Rs. 250,000.00</span>
          </div>
          <button className="w-full h-[59px] border border-black mt-4 font-medium text-lg">
            Check Out
          </button>
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
      <Footer />
    </div>
  );
};

export default Cart;
