import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterLine } from "react-icons/ri";


import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";





const SocialMediaDropdown = () => {
  return (
    <div className="pb-20">
        <h3 className=' text-[13px] text-gray-500 opacity-50  font-bold mb-2.5 mt-6  ms-3' >CONNECT US</h3>

        <div className=" flex gap-2">
           <div className=" h-[40px] w-[40px] border rounded-xl flex justify-center items-center hover:text-blue-500 cursor-pointer">
            <SlSocialFacebook/>
           </div>
           <div className=" h-[40px] w-[40px] border rounded-xl flex justify-center items-center text-blue-500  text-[20px] cursor-pointer">
            <RiTwitterLine />
           </div>
           <div className=" h-[40px] w-[40px] border rounded-xl flex justify-center items-center hover:text-blue-500 cursor-pointer">
            <FiLinkedin/>
           </div>
           <div className=" h-[40px] w-[40px] border rounded-xl flex justify-center items-center hover:text-blue-500  cursor-pointer">
            <FaInstagram/>
           </div>
           

        </div>
    </div>
  );
};

export default SocialMediaDropdown;