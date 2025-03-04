import React from 'react';
import Header from "../components/Header";

const Singleproduct = () => {
  return (
    <div className='max-w-[1440px]  mx-auto'>
         <Header />
         <div className="bg-[#F9F1E7] h-[100px] flex items-center px-6">
  <div className="flex items-center space-x-2 pl-[99px]">
    <span className='text-[#9F9F9F] text-base font-normal'>Home</span>
    <img src="/images/arrow.png" alt="Arrow" className="w-[20px] h-[20px]" />
    <span  className='text-[#9F9F9F] text-base font-normal'>Shop</span>
    <img src="/images/arrow.png" alt="Arrow" className="w-[20px] h-[20px]" />
    <img src="/images/Line.png" alt="Line" className="h-[20px]" />
    <span className='text-[#000000] text-base font-normal'>Asgaard sofa</span>
  </div>
</div>

      
    </div>
  )
}

export default Singleproduct
