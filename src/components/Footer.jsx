import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1440px] h-[505px] w-full mx-auto bg-white">
      <footer className="bg-white dark:bg-gray-900">
        <hr className="my-6 border-gray-200 mt-[8px]" />
        <div className="mx-auto w-[1240px] h-[419px] max-w-screen-xl p-4 py-6 lg:py-8 mt-[48px]">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white ">
                  Funiro.
                </span>
              </a>
              <div className="flex flex-col mt-[50px] text-base text-[#9F9F9F] ">
                <span className="">400 University Dirve Suite 200 Coral </span>
                <span>Gables</span>
                <span>FL 33134 USA</span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-base font-semibold text-[#9F9F9F] uppercase dark:text-white">
                  Links
                </h2>
                <ul class="text-black dark:text-gray-400 font-medium text-base space-y-8">
                  <li>
                    <a href="https://flowbite.com/" class="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="mb-6 text-base font-semibold text-[#9F9F9F] uppercase dark:text-white">
                  Help
                </h2>
                <ul class="text-black dark:text-gray-400 font-medium text-base space-y-8">
                  <li class="mt-[48px]">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      Payment options
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Returns
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Newsletters
                </h2>
                <ul class="  space-y-6">
                  <li class="mt-[48px] flex gap-6">
                    <button className="border-b text-sm font-normal text-[#9F9F9F] border-black gap-4">Enter Your Email Address</button>
                    <button className="border-b border-black">SUBSCRIBE</button>
                    
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-black text-base sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                Funiro
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
