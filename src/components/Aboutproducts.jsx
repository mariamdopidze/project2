import React from "react";

const Aboutproducts = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <hr className="my-6 border-gray-200" />
      
    
      <div className="mt-6 px-8 ">
      <div className="flex mx-auto items-center justify-center text-center space-x-8 mt-6 px-8">
        <h3 className="text-2xl font-medium text-black">Description</h3>
        <h3 className="text-2xl font-normal text-[#9F9F9F]">Additional Information</h3>
        <h3 className="text-2xl font-normal text-[#9F9F9F]">Reviews [5]</h3>
      </div>
        <p className="mt-4 text-base text-[#9F9F9F] font-normal max-w-[1026px] mx-auto">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className=" text-base text-[#9F9F9F] font-normal max-w-[1026px] mx-auto mt-[30px]">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine-tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

   
      <div className="flex space-x-4 mt-9 px-24 mx-auto r">
        <img src="/images/sofa1.png" alt="Sofa 1" className=" rounded-xl w-[605px] h-[348px] bg-[#F9F1E7]" />
        <img src="/images/sofa2.png" alt="Sofa 2" className="rounded-xl w-[605px] h-[348px] bg-[#F9F1E7]" />
      </div>
    </div>
  );
};

export default Aboutproducts;
