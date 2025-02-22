import React from 'react'

const Range = () => {
  return (
    
    <div className='max-w-[1440px] h-auto w-full mx-auto  bg-red-500 mt-[-100px]'>
       <div className="flex flex-col items-center text-center">
  <h2 className='text-[#333333] mt-[56px]'>Browse The Range</h2>
  <span className='text-[#666666]'>Lorem ipsum dolar sit ament, consectetur adipiscing eilt.</span>
</div>
<div className="flex items-center pl-[113px] gap-10 pt-[62px]">
  <div className="flex flex-col items-center">
    <img src="/images/dining.png" alt="Dining" />
    <span className='text-[333333] pt-[30px]'>Dining</span>
  </div>
  <div className="flex flex-col items-center">
    <img src="/images/living.png" alt="Living" />
    <span className='text-[333333] pt-[30px]'>Living</span>
  </div>
  <div className="flex flex-col items-center">
    <img src="/images/bedroom.png" alt="Bedroom" />
    <span className='text-[333333] pt-[30px]'>Bedroom</span>
  </div>
</div>

    </div>
    
  )
}

export default Range
