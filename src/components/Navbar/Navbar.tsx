"use client";
import NavbarChat from "./NavbarChat/NavbarChat";
import NavbarDarkMode from "./NavbarDarkMode/NavbarDarkMode";
import NavbarFullScreen from "./NavbarFullScreen/NavbarFullScreen";

import NavbarNotification from "./NavbarNotification/NavbarNotification";
import NavbarOption from "./NavbarOption/NavbarOption";
import NavbarUserOption from "./NavbarUserOption/NavbarUserOption";
import NavbarLogOut from "./NavbarLogOut/NavbarLogOut";
import Image from "next/image";
import Search from "@/components/Navbar/Search/Search";


const Navbar = () => {
    return (
        <div className=" w-full h-20 bg-[#1A1A1A] grid grid-cols-3 top-0 z-10 fixed text-white items-center px-5">
            <div className="flex items-center gap-1">
                <Image src="images/logo-icon.svg" alt="Logo" width={21} height={24}/>
                <h1 className="text-2xl font-bold italic" style={{fontFamily: "var(--font-playfair)"}}>Commerzo</h1>
            </div>
            <Search/>
            <div>
                <div className="md:hidden lg:flex items-center mt-3  gap-3 ms-2">
                    <NavbarDarkMode/>
                    <NavbarNotification/>
                    <NavbarChat/>
                    <NavbarFullScreen/>
                    <NavbarOption/>
                    <NavbarLogOut/>
                    <NavbarUserOption/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;