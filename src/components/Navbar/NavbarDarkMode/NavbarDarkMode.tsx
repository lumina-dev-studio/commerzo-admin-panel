import { MdOutlineDarkMode } from "react-icons/md";

const NavbarDarkMode = () => {
  return (
    <div className="  p-2 flex items-center">
    <div className=" h-[35px] w-[35px] bg-gray-200 rounded-full flex items-center justify-center">
    <MdOutlineDarkMode className=" text-[25px]" />
    

    </div>
  </div>
  );
};

export default NavbarDarkMode;