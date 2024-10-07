import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";





const SocialMediaDropdown = () => {
  return (
    <div className="pb-20">
        <h3 className=' text-[13px] text-gray-500 opacity-50  font-bold mb-2.5 mt-6  ms-3' >CONNECT US</h3>

        <div className=" flex gap-2">
           <div className=" h-[40px] w-[40px] border rounded-xl flex justify-center items-center">
            <SlSocialFacebook/>
           </div>
           <div className=" h-[40px] w-[40px] border rounded-xl flex justify-center items-center">
            <CiTwitter/>
           </div>
           <div className=" h-[40px] w-[40px] border rounded-xl flex justify-center items-center">
            <FiLinkedin/>
           </div>
           <div className=" h-[40px] w-[40px] border rounded-xl flex justify-center items-center">
            <FaInstagram/>
           </div>
           

        </div>
    </div>
  );
};

export default SocialMediaDropdown;