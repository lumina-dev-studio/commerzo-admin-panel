import { useDispatch, useSelector } from "react-redux";


// Make sure to import the type of the state

import { useState } from "react";
import { setSideBarToggle } from "@/Redux/api/NavBar/navBarSlice";

import { RiMenuUnfold3Fill } from "react-icons/ri";
const NavBarSidebarButton = () => {
  const dispatch = useDispatch();
    // State to manage sidebar visibility
    const [isOpen, setIsOpen] = useState(true);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
      setIsOpen((prev) => !prev);
      dispatch(setSideBarToggle(!isOpen));
    };
  
  
  // Select the current sidebar state from the Redux store


  return (

      <button
      className={`absolute top-0 left-0 mt-2.5 p-4 transition-all duration-500  rounded-lg ${
        isOpen ? 'rotate-180 left-64 ' : ''
      }`}
      onClick={toggleSidebar}
    >
      <RiMenuUnfold3Fill className={`${isOpen=== false?" text-blue-500 bg-red-500":"text-gray-500"}font-bold text-[25px] `} />
     
    </button>
 
  );
};

export default NavBarSidebarButton;
