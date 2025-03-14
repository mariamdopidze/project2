import React from 'react'

const Categories = () => {

    const posts = [
        {
          image: "/images/Rectangle 69.png",
          title: "Exploring Minimalist Trends",
          date: "10 Sep 2022",
        },
        {
          image: "/images/Rectangle 69 (1).png",
          title: "The Future of UI/UX Design",
          date: "22 Aug 2022",
        },
        {
          image: "/images/Rectangle 69 (2).png",
          title: "Typography in Web Design",
          date: "15 Jul 2022",
        },
        {
          image: "/images/Rectangle 69 (3).png",
          title: "Color Theory for Designers",
          date: "03 Jun 2022",
        },
        {
          image: "/images/Rectangle 69 (4).png",
          title: "Responsive Design Principles",
          date: "19 May 2022",
        },
      ];
  return (
    <div>
         <div className="flex flex-col">
            

            <ul class="w-[251px] mt-[43px] mx-auto h-[353px] ">
            <h2 className="text-2xl font-medium ">Categories</h2>
              <li class="pt-8 sm:pb-4">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-1 min-w-0">
                    <p class=" text-[#9F9F9F] text-base font-normal truncate dark:text-white">
                    Crafts
                    </p>
                    
                  </div>
                  <div class="inline-flex items-center  text-[#9F9F9F] text-base font-normal dark:text-white">
                    2
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-1 min-w-0">
                    <p class=" text-[#9F9F9F] text-base font-normal truncate dark:text-white">
                    Design
                    </p>
                    
                  </div>
                  <div class="inline-flex items-center  text-[#9F9F9F] text-base font-normal dark:text-white">
                    8
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-1 min-w-0">
                    <p class=" text-[#9F9F9F] text-base font-normal truncate dark:text-white">
                    Handmade
                    </p>
                   
                  </div>
                  <div class="inline-flex items-center  text-[#9F9F9F] text-base font-normal dark:text-white">
                    7
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-1 min-w-0">
                    <p class=" text-[#9F9F9F] text-base font-normal truncate dark:text-white">
                    Interior
                    </p>
                    
                  </div>
                  <div class="inline-flex items-center  text-[#9F9F9F] text-base font-normal dark:text-white">
                    1
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div class="flex-1 min-w-0">
                    <p class=" text-[#9F9F9F] text-base font-normal truncate dark:text-white">
                    Wood
                    </p>
                   
                  </div>
                  <div class="inline-flex items-center  text-[#9F9F9F] text-base font-normal dark:text-white">
                    6
                  </div>
                </div>
              </li>
            </ul>
            <div className=" w-[393px] h-[650px] p-4 mt-[57px] pl-[77px]">
      <h2 className="text-2xl font-medium mb-4">Recent Posts</h2>
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={post.image}
              alt="Post Image"
              className="w-[80px] h-[80px] object-cover"
            />
            <div className="flex flex-col justify-center">
              <h5 className="font-normal text-sm">{post.title}</h5>
              <span className="text-[#9F9F9F] text-xs font-normal mt-1">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>


          </div>
      
    </div>
  )
}

export default Categories
