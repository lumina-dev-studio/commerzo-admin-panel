"use client"

import { useSelector } from "react-redux";
import NavbarChat from "./NavbarChat/NavbarChat";
import NavbarDarkMode from "./NavbarDarkMode/NavbarDarkMode";
import NavbarFullScreen from "./NavbarFullScreen/NavbarFullScreen";
import NavbarLanguage from "./NavbarLanguage/NavbarLanguage";
import NavbarNotification from "./NavbarNotification/NavbarNotification";
import NavbarOption from "./NavbarOption/NavbarOption";
import NavBarSidebarButton from "./NavBarSidebarButton/NavBarSidebarButton";
import NavbarUserOption from "./NavbarUserOption/NavbarUserOption";
import SearchNavBar from "./SearchNavBar/SearchNavBar";
import { RootState } from "@/Redux/store";


const Navbar = () => {

  const isOpen = useSelector((state: RootState) => state.navBar.sidebarToggle);
  return (
    <div className=" w-full h-20 bg-white grid grid-cols-12  top-0 z-10    fixed  bg-opacity-70">
       
<section className={`${!isOpen?"col-span-1": "col-span-2"}  `}>
   <div className="flex   justify-between items-center h-full">
   {isOpen && <div >
    <h1 className=" text-gray-700 font-bold h-full "> Sass Project Logo</h1>
    </div>}
    <NavBarSidebarButton/>
 
   </div>
   
</section>
<section className={`${!isOpen?"col-span-6 grid items-center h-full":"col-span-5  grid items-center h-full ms-10"} `}>
<SearchNavBar/>
</section>
<section className= {`col-span-3`}>
  <div className="   md:hidden lg:flex items-center mt-3  gap-3 ms-2">

   
   <NavbarDarkMode/>
   <NavbarNotification/>
   <NavbarChat/>
   <NavbarFullScreen/>
   <NavbarOption/>
  
   
  </div>

  
</section>

<section className=" col-span-2 ms-5 mt-2 ">
<NavbarUserOption/>
</section>

    </div>
  );
};

export default Navbar;