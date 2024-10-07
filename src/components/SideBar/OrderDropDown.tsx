import Link from "next/link";
import { useState } from "react";
import { LiaFileMedicalSolid } from "react-icons/lia";
import { BsDiamond } from "react-icons/bs";
const OrderDropDown = () => {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
      setDropdown(!dropdown);
    };
  return (
    <li>
    <button
      type="button"
      onClick={toggleDropdown} // Toggle dropdown on button click
      className="flex hover:text-blue-500 items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-50  dark:text-white dark:hover:bg-gray-700"
    >
   
     <LiaFileMedicalSolid className=" text-[20px] font-semibold  hover:text-blue-500" />

<span className="flex-1 ml-3 text-left whitespace-nowrap text-[15px] font-semibold hover:text-blue-500" style={{ fontFamily: 'var(--font-inter)' }}>Order</span>
   
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
          href="#"
          className="flex items-center w-full p-2  transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-gray-600  text-[15px] font-semibold hover:text-blue-500" style={{ fontFamily: 'var(--font-inter)' }}
        >
       <BsDiamond className=" text-[10px] opacity-50 mr-2" />   Order List
        </Link>
      </li>
      <li>
      <Link
          href="#"
          className="flex items-center w-full p-2   transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11  text-gray-600  text-[15px] font-semibold hover:text-blue-500" style={{ fontFamily: 'var(--font-inter)' }}
        
        >
        <BsDiamond className=" text-[10px] opacity-50 mr-2" />     Order Detail
          </Link>
      </li>
      <li>
      <Link
          href="#"
          className="flex items-center w-full p-2   transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11  text-gray-600  text-[15px] font-semibold hover:text-blue-500" style={{ fontFamily: 'var(--font-inter)' }}
        
        >
        <BsDiamond className=" text-[10px] opacity-50 mr-2" />     Order tracking
          </Link>
      </li>
     
    
    </ul>
  </li>
  );
};

export default OrderDropDown;