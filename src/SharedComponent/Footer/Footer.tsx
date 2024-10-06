import { FaRegHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" h-[100px] bg-white ">
      <div className=" text-gray-500 text-[15px] flex items-center justify-center gap-3 h-full" style={{ fontFamily: 'var(--font-inter)' }}>
    <p>  Copyright © 2024 Remos. Design with</p>
      
       <p> <FaRegHeart className=" text-red-400 text-[15px]" /> </p>

     <p>by <span className=" text-blue-500">Themesflat </span>All rights reserved.</p> 
      </div>
    </div>
  );
};

export default Footer;