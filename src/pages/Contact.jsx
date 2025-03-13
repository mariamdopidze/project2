import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const items = [
    {
      imgSrc: "/images/Vector (2).png",
      title: "Address",
      subtitle: "236 5th SE Avenue, New York NY10000, United States",
      secsubtitle: "",
    },
    {
      imgSrc: "/images/Vector (3).png",
      title: "Phone",
      subtitle: "Mobile: +(84) 546-6789 ",
      secsubtitle: "Hotline: +(84) 456-6789",
    },
    {
      imgSrc: "/images/Vector (4).png",
      title: "Working Time",
      subtitle: "Monday-Friday: 9:00 - 22:00",
      secsubtitle: "Saturday-Sunday: 9:00 - 21:00",
    },
  ];

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
          <h1 className="text-5xl font-medium text-black">Contact</h1>
          <div className="flex mt-[9px] items-center">
            <span className="text-base text-black font-medium">Home</span>
            <img src="/images/arrow.png" alt="Arrow" className="mx-2" />
            <span className="text-base text-black font-light">Contact</span>
          </div>
        </div>
      </div>
      <div className="h-[1144px] ">
        <div className="pt-[105px]">
          <h2 className="text-4xl font-semibold text-center">
            Get In Touch With Us
          </h2>
          <p className="text-base font-normal text-[#9F9F9F] max-w-[644px] mx-auto mt-[10px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="w-[1049px] h-[923px]  mx-auto flex ">
          <div className="flex flex-col space-y-4 w-[393px] h-[537px]  mt-[140px] ml-[70px]">
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-6">
                <img
                  src={item.imgSrc}
                  alt={`Icon ${index + 1}`}
                  className="w-[23px] h-[23px]"
                />
                <div className="mt-[10px]">
                  <h5 className="text-lg font-medium">{item.title}</h5>
                  <p className="text-sm text-gray-500 ">{item.subtitle}</p>
                  <p className="text-sm text-gray-500">{item.secsubtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="mt-[119px]">
            <div className="mb-5">
              <label
                for="text"
                class="block mb-[22px] text-sm font-medium text-gray-900 dark:text-white"
              >
               Your name
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[528px] h-[75px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Abc"
                required
              />
            </div>
            <div className="mb-[22px]">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[528px] h-[75px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Abc@def.com"
                required
              />
            </div>

            <div class="mb-[22px]">
              <label
                for="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[528px] h-[75px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="This is an optional"
                required
              />
            </div>
          
          
            <label
              for="message"
              className="block mb-[22px] text-sm font-medium text-gray-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-[527px] h-[120px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Hi! i’d like to ask about"
            ></textarea>

            <button className="w-[237px] h-[55px] bg-[#B88E2F] mt-[49px] rounded-md text-white">Submit</button>
          </form>
        </div>
        <div className="h-[270px] bg-[#FAF3EA] flex justify-center mt-[55px] mx-auto items-center  gap-12">
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
    </div>
  );
};

export default Contact;
