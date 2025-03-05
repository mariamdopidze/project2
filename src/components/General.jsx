import React from "react";

const General = () => {
  const details1 = [
    "1 sectional sofa",
    "TFCBLIGRBL6SRHS",
    "Solid Wood",
    "L-shaped",
    "Fabric + Cotton",
    "Bright Grey & Lion",
  ];

  const details2 = [
    "Foam",
    "Bright Grey & Lion",
    "No",
    "280 KG",
    "India",
  ];

  const dimensions = [
    "265.32 cm",
    "76 cm",
    "167.76 cm",
    "45 KG",
    "41.52 cm",
    "5.46 cm",
  ];

  const warranty = [
    "1 Year Manufacturing Warranty",
    "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
    "Warranty Against Manufacturing Defect",
    "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
    "1 Year",
  ];

  const icons = [
    { name: "quality", title: "Best Quality", span: "High-quality materials" },
    { name: "guarantee", title: "Warranty", span: "1-year warranty included" },
    { name: "shipping", title: "Fast Shipping", span: "Delivery in 2-5 days" },
    { name: "support", title: "24/7 Support", span: "We're here to help" },
  ];

  return (
    <div className="space-y-8">
      
      <hr className="border-t border-gray-200 w-full mb-0" />

      <div className="grid grid-cols-3 gap-8 w-full mt-4">
        <div className="p-4 border">
          <h3 className="font-semibold mt-0 mb-4">General</h3>
          <ul className="list-none space-y-4">
            <li>Sales Package</li>
            <li>Secondary Material</li>
            <li>Configuration</li>
            <li>Upholstery Material</li>
            <li>Upholstery Color</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-4">Product</h3>
          <ul className="list-none space-y-4">
            <li>Filling Material</li>
            <li>Finish Type</li>
            <li>Adjustable Headrest</li>
            <li>Maximum Load Capacity</li>
            <li>Origin of Manufacture</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-4">Dimensions</h3>
          <ul className="list-none space-y-4">
            <li>Width</li>
            <li>Height</li>
            <li>Depth</li>
            <li>Weight</li>
            <li>Seat Height</li>
            <li>Leg Height</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-4">Warranty</h3>
          <ul className="list-none space-y-4">
            <li>Warranty Summary</li>
            <li>Warranty Service Type</li>
            <li>Covered in Warranty</li>
            <li>Not Covered in Warranty</li>
            <li>Domestic Warranty</li>
          </ul>
        </div>

        <div className="p-4 border">
       
          <ul className="list-none space-y-4">
            {details1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <ul className="list-none mt-4 space-y-4">
            {details2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <ul className="list-none mt-4 space-y-4">
            {dimensions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <ul className="list-none mt-4 space-y-4 max-w-[241px]">
            {warranty.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button className="bg-[#B88E2F] text-xl font-normal w-[215px] h-[64px] text-white mt-6">
            Add To Cart
          </button>
        </div>

        <div className="p-4 border">
         
          <ul className="list-none space-y-4">
            {details1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <ul className="list-none mt-4 space-y-4">
            {details2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <ul className="list-none mt-4 space-y-4">
            {dimensions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <ul className="list-none mt-4 space-y-4 max-w-[241px]">
            {warranty.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button className="bg-[#B88E2F] text-xl font-normal w-[215px] h-[64px] text-white mt-6">
            Add To Cart
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
    </div>
  );
};

export default General;
