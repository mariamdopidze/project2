import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1440px] h-[670px] w-full mx-auto bg-[#FCF8F3]'>
     <div className='flex'>
      <div className='flex flex-col pt-[223px] pl-[100px]'>
        <h2>50+ Beautiful rooms inspiration</h2>
        <span>Our designer already made a lot of beautiful prototipe of rooms that inspira you</span>
        <button className='w-[176px] h-[48px] text-white bg-[#B88E2F]'>Explore More</button>
      </div>
      <div className='flex'>
<img src="/images/Rectangle2.png" alt='img'className='w-[404px] h-[582px]'/>
<img src="/images/Rectangle1.png" alt='img'/>

      </div>
      </div>
    </div>
  )
}

export default Rooms
