import React from "react";

const navItems = ["Home", "Shop", "About", "Contact"];
const icons = ["men", "search", "heart", "cart"];

const Header = () => {
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 top-0 start-0 border-b mx-auto max-w-[1440px] border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/logo.png" className="h-8" alt="Flowbite Logo" />
          </a>

          <div className="flex md:order-2 gap-11">
            {icons.map((icon, index) => (
              <img key={index} src={`/images/${icon}.png`} alt={icon} className="w-[28px] h-[28px]" />
            ))}
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 gap-16 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      item === "Home" ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500" : ""
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
