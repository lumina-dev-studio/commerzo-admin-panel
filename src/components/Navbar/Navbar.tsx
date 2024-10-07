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
    <div className=" h-20 bg-white grid grid-cols-12  top-0 z-10    fixed ">
       
<section className={`${!isOpen?"col-span-1": "col-span-2"}  `}>
   <div className="flex  absolute  items-center h-full">
   {isOpen && <div >
    <h1 className=" text-gray-700 font-bold "> Sass Project Logo</h1>
    </div>}
    <div >
   <NavBarSidebarButton/>
    </div>
   </div>
   
</section>
<section className={`${!isOpen?"col-span-6 grid items-center h-full":"col-span-5 grid items-center h-full"} `}>
<SearchNavBar/>
</section>
<section className= {`col-span-3`}>
  <div className=" flex gap-3">

   <NavbarLanguage/>
   <NavbarDarkMode/>
   <NavbarNotification/>
   <NavbarChat/>
   <NavbarFullScreen/>
   <NavbarOption/>
  
   
  </div>

  
</section>

<section className=" col-span-2 ms-5 ">
<NavbarUserOption/>
</section>

    </div>
  );
};

export default Navbar;