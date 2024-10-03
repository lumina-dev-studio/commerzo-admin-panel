import NavbarChat from "./NavbarChat/NavbarChat";
import NavbarDarkMode from "./NavbarDarkMode/NavbarDarkMode";
import NavbarFullScreen from "./NavbarFullScreen/NavbarFullScreen";
import NavbarLanguage from "./NavbarLanguage/NavbarLanguage";
import NavbarNotification from "./NavbarNotification/NavbarNotification";
import NavbarOption from "./NavbarOption/NavbarOption";
import NavbarUserOption from "./NavbarUserOption/NavbarUserOption";
import SearchNavBar from "./SearchNavBar/SearchNavBar";


const Navbar = () => {
  return (
    <div className=" h-20 bg-white grid grid-cols-12">
       
<section className="  col-span-2">
   <div className="flex gap-10  items-center h-full">
   <div >
    <h1 className=" text-gray-700 font-bold "> Sass Project Logo</h1>
    </div>
    <div>
    <h1 className=" text-gray-700 font-bold "> Menu emoji</h1>
    </div>
   </div>
   
</section>
<section className="col-span-5 grid items-center h-full">
<SearchNavBar/>
</section>
<section className=" col-span-3">
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