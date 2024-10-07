import Link from "next/link";
import { useState } from "react";
import { BiCategory } from "react-icons/bi";

import { BsDiamond } from "react-icons/bs";
const DashboardDropdown = () => {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
      setDropdown(!dropdown);
    };
  
  return (
    <li>
      <h3 className=' text-[12px] text-gray-500 opacity-50 font-semibold my-2.5  ms-3' >MAIN HOME</h3>
    <button
      type="button"
      onClick={toggleDropdown} // Toggle dropdown on button click
      className="flex hover:text-blue-500 items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-50  dark:text-white dark:hover:bg-gray-700"
    >
   
     <BiCategory className=" text-[20px] font-semibold  hover:text-blue-500" />

<span className="flex-1 ml-3 text-left whitespace-nowrap text-[15px] font-semibold hover:text-blue-500" style={{ fontFamily: 'var(--font-inter)' }}>Category</span>
   
      <svg
        className={`w-6 h-6 transition-transform duration-200 ${
          dropdown ? "rotate-180" : ""
        }`} // Rotate icon when dropdown is open
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
    <ul className={`${dropdown ? "block" : "hidden"} py-2 space-y-2`}>
      <li>
        <Link
          href="http://localhost:3000/"
          className="flex items-center w-full p-2  transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-gray-600  text-[15px] font-semibold hover:text-blue-500" style={{ fontFamily: 'var(--font-inter)' }}
        >
       <BsDiamond className=" text-[10px] opacity-50 mr-2" />   Home 1
        </Link>
      </li>
      <li>
      <Link
          href="http://localhost:3000"
          className="flex items-center w-full p-2   transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11  text-gray-600  text-[15px] font-semibold hover:text-blue-500" style={{ fontFamily: 'var(--font-inter)' }}
        
        >
        <BsDiamond className=" text-[10px] opacity-50 mr-2" /> Home 2
          </Link>
      </li>
      <li>
      <Link
          href="http://localhost:3000"
          className="flex items-center w-full p-2   transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11  text-gray-600  text-[15px] font-semibold hover:text-blue-500" style={{ fontFamily: 'var(--font-inter)' }}
        
        >
        <BsDiamond className=" text-[10px] opacity-50 mr-2" /> Home 3
          </Link>
      </li>
     
    
    </ul>
  </li>
  );
};

export default DashboardDropdown;