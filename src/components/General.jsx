import React from "react";

const General = () => {
  return (
    <div className="grid grid-cols-3 w-[1330px]">
      <div className="p-4 border-t-2">
        <h3 className="font-semibold mt-[42px] mb-[28px]">General </h3>
        <ul className="list-none space-y-8">
          <li>Sales Package</li>
          <li>Secondary Material</li>
          <li>Configuration</li>
          <li>Upholstery Material</li>
          <li>Upholstery Color</li>
        </ul>

        <h3 className="font-semibold mt-[96px] mb-[28px]">Product </h3>
        <ul className="list-none space-y-8">
          <li>Filling Material</li>
          <li>Finish Type</li>
          <li>Adjustable Headrest</li>
          <li>Maximum Load Capacity</li>
          <li>Origin of Manufacture</li>
        </ul>

        <h3 className="font-semibold mt-[96px] mb-[28px]">Dimensions</h3>
        <ul className="list-none space-y-8">
          <li>Width</li>
          <li>Height</li>
          <li>Depth</li>
          <li>Weight</li>
          <li>Seat Height</li>
          <li>Leg Height</li>
        </ul>

        <h3 className="font-semibold mt-[96px] mb-[28px]">Warranty</h3>
        <ul className="list-none space-y-8">
          <li>Warranty Summary</li>
          <li>Warranty Service Type</li>
          <li>Covered in Warranty</li>
          <li>Not Covered in Warranty</li>
          <li>Domestic Warranty</li>
        </ul>
      </div>

      <div className="p-4 border border-t border-l border-r">
        
        <ul className="list-none mt-[92px] space-y-8">
          <li>1 sectional sofa</li>
          <li>TFCBLIGRBL6SRHS</li>
          <li>Solid Wood</li>
          <li>L-shaped</li>
          <li>Fabric + Cotton</li>
          <li>Bright Grey & Lion</li>
        </ul>

        
        <ul className="list-none mt-[159px] space-y-[34px]">
          <li>Foam</li>
          <li>Bright Grey & Lion</li>
          <li>No</li>
          <li>280 KG</li>
          <li>India</li>
          <li></li>
        </ul>
       
        <ul className="list-none  mt-[159px] space-y-[34px]">
          <li>265.32 cm</li>
          <li>76 cm</li>
          <li>167.76 cm</li>
          <li>45 KG</li>
          <li>41.52 cm</li>
          <li>5.46 cm</li>
        </ul>

      
        <ul className="list-none mt-[163px] space-y-[34px] max-w-[241px]">
          <li>1 Year Manufacturing Warranty</li>
          <li>
            For Warranty Claims or Any Product Related Issues Please Email at
            operations@trevifurniture.com
          </li>
          <li>Warranty Against Manufacturing Defect</li>
          <li>
            The Warranty Does Not Cover Damages Due To Usage Of The Product
            Beyond Its Intended Use And Wear & Tear In The Natural Course Of
            Product Usage.
          </li>
          <li>1 Year</li>
        </ul>

        <button className=" bg-[#B88E2F] text-xl font-normal w-[215px] h-[64px] text-white mt-[53px]">
          Add To Cart
        </button>
      </div>

      <div className="p-4 border-t border-l border-r border mt-[79px] ">
      
        <ul className="list-none space-y-[34px]">
          <li>1 Three Seater, 2 Single Seater</li>
          <li>DTUBLIGRBL568</li>
          <li>Solid Wood</li>
          <li>L-shaped</li>
          <li>Fabric + Cotton</li>
          <li>Bright Grey & Lion</li>
        </ul>

       
        <ul className="list-none space-y-[34px] mt-[159px]">
          <li>Matte</li>
          <li>Bright Grey & Lion</li>
          <li>yes</li>
          <li>300 KG</li>
          <li>India</li>
        </ul>

       
        <ul className="list-none space-y-[34px] mt-[159px]">
          <li>265.32 cm</li>
          <li>76 cm</li>
          <li>167.76 cm</li>
          <li>65 KG</li>
          <li>41.52 cm</li>
          <li>5.46 cm</li>
        </ul>

       
        <ul className="list-none space-y-[34px] mt-[159px] max-w-[241px]">
          <li>1.2 Year Manufacturing Warranty</li>
          <li>
            For Warranty Claims or Any Product Related Issues Please Email at
            support@xyz.com
          </li>
          <li>
            Warranty of the product is limited to manufacturing defects only.
          </li>
          <li>
            The Warranty Does Not Cover Damages Due To Usage Of The Product
            Beyond Its Intended Use And Wear & Tear In The Natural Course Of
            Product Usage.
          </li>
          <li>3 Months</li>
        </ul>

        <button className=" bg-[#B88E2F] text-xl font-normal w-[215px] h-[64px] text-white mt-[82px]">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default General;
