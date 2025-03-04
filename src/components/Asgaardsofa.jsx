import React from "react";

const AsgaardSofa = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex">
      <div className="flex mt-8 ml-[115px]">
        <div className="w-[76px] h-[80px] space-y-8">
          {[...Array(4)].map((_, index) => (
            <img key={index} src="/images/first.png" alt="Thumbnail " />
          ))}
        </div>

        <img
          src="/images/cover.png"
          alt="Asgaard Sofa"
          className="w-[497px] h-[500px]"
        />
      </div>

      <div className="ml-8">
        <h1 className="text-2xl font-bold">Asgaard Sofa</h1>
        <span className="text-xl text-gray-700">Rs. 250,000.00</span>
        <div className="flex items-center mt-2">
          <img src="/images/star-rating.png" alt="Rating" className="w-20" />
          <span className="ml-2 text-gray-600">5 Customer Review</span>
        </div>
        <p className="mt-4 text-gray-700">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>
      </div>
    </div>
  );
};

export default AsgaardSofa;
