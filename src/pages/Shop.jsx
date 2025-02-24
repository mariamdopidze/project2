import React from 'react';
import Header from '../components/Header';

const Shop = () => {
  return (
    <div className='max-w-[1440px] mx-auto relative'>
      <Header />
      <div className=''>
        <img src="/images/Rectangle.png" alt="img" className='h-[313px] w-full object-cover' />
        
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
          <h1 className='text-4xl font-bold'>Shop</h1>
          <span className='text-lg'>Home / Shop</span>
        </div>
      </div>
<div className='h-[100px] bg-[#F9F1E7]'>

</div>

    </div>
  );
}

export default Shop;
