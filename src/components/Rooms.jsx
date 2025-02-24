import React from 'react'
import Footer from './Footer'

const Rooms = () => {
  return (
    <div className='max-w-[1440px] h-[670px] w-full mx-auto bg-[#FCF8F3]'>
     <div className='flex'>
      <div className='flex flex-col pt-[223px] pl-[100px]'>
        <h2 className='text-4xl font-bold'>50+ Beautiful rooms inspiration</h2>
        <span className='text-base font-medium pt-[7px]'>Our designer already made a lot of beautiful prototipe of rooms that inspira you</span>
        <button className='w-[176px] h-[48px] text-white bg-[#B88E2F] mt-[25px] text-base font-semibold'>Explore More</button>
      </div>
      <div className='flex pt-[44px] gap-6 mr-[555px]'>
<img src="/images/Rectangle2.png" alt='img'className='w-[401px] h-[582px]'/>
<img src="/images/Rectangle1.png" alt='img' className='w[372px] h-[486px]'/>

      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Rooms
