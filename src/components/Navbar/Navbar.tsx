import NavbarNotification from "./NavbarNotification/NavbarNotification";
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
            <div className="md:hidden lg:flex items-center gap-3 ms-2 justify-end">
                <NavbarNotification/>
                <NavbarLogOut/>
                <NavbarUserOption/>
            </div>
        </div>
    );
};

export default Navbar;