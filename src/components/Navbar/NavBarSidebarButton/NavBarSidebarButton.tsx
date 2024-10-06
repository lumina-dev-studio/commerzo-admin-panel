import { useDispatch, useSelector } from "react-redux";


// Make sure to import the type of the state

import { useState } from "react";
import { setSideBarToggle } from "@/Redux/api/NavBar/navBarSlice";

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
      className={`absolute top-0 left-0 p-4 transition-all duration-500 bg-indigo-500 rounded-lg ${
        isOpen ? 'rotate-180 left-64' : ''
      }`}
      onClick={toggleSidebar}
    >
      <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
      <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
    </button>
  );
};

export default NavBarSidebarButton;
