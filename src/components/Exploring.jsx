import React from 'react'


const Exploring = () => {
  return (
    <div>
        
        <img src="/images/Rectangle...png" alt=" " className='mt-[54px]'/>
        <div className="flex gap-8 mt-[17px]">
          {[
            { src: "/images/admin.png", label: "Admin" },
            { src: "/images/calender.png", label: "Calendar" },
            { src: "/images/tag.png", label: "Handmade" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={item.src} alt={item.label} className="w-6 h-6" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <h2 className="mt-[15px] text-3xl font-medium">Exploring new ways of decorating</h2>
        <p className="mt-[12px] text-[#9F9F9F] text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <span className="underline cursor-pointer text-black mt-[30px] ">Read More</span>
      
    </div>
  )
}

export default Exploring
