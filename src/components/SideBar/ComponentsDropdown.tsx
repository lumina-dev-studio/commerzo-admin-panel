import Link from "next/link";
import { LuDatabase } from "react-icons/lu";


const ComponentsDropdown = () => {
    return (
    <div>
        <h3 className=' text-[12px] text-gray-500 opacity-50  font-bold mb-2.5 mt-5 ms-3' >COMPONENTS</h3>
    <Link href="#"
          type="button"
         
          className="flex hover:text-blue-500 items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-50  dark:text-white dark:hover:bg-gray-700"
        >
       
         <LuDatabase className=" text-[20px] font-semibold  hover:text-blue-500" />
    
    <span className="flex-1 ml-3 text-left whitespace-nowrap text-[15px] font-semibold hover:text-blue-500" style={{ fontFamily: 'var(--font-inter)' }}>Gallery</span>
       
        
        </Link>
    </div>
  );
};

export default ComponentsDropdown;