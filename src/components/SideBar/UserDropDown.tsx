import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { BsDiamond } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/Redux/hooks";
import { RootState } from "@/Redux/store";
import { setDropDownMenuToggle } from "@/Redux/api/SideBar/sideBarSlice";
import { usePathname } from "next/navigation";

const UserDropDown = () => {
  const location = usePathname();
  const dispatch = useDispatch();
  const dropDown = useAppSelector((state: RootState) => state?.sideBar.dropDownMenuToggle);

  const toggleDropdown = () => {
    // Toggle the dropdown state for "User"
    if (dropDown === "User") {
      dispatch(setDropDownMenuToggle(""));
    } else {
      dispatch(setDropDownMenuToggle("User"));
    }
  };

  return (
    <li>
      <button
        type="button"
        onClick={toggleDropdown} // Toggle dropdown on button click
        className={`flex hover:text-blue-500 items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700 ${dropDown === "User" && "bg-blue-100 bg-opacity-70 hover:bg-blue-100"}`}
      >
        <FiUser className={`${dropDown === "User" && "text-blue-500"} text-[20px] font-semibold hover:text-blue-500`} />
        <span className={`${dropDown === "User" && "text-blue-500"} flex-1 ml-3 text-left whitespace-nowrap text-[15px] font-semibold hover:text-blue-500`} style={{ fontFamily: 'var(--font-inter)' }}>
          User
        </span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${dropDown === "User" ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <ul className={`${dropDown === "User" ? "block" : "hidden"} py-2 space-y-2`}>
        <li>
          <Link
            href="/user/allUser"
            className={`${location==='/user/allUser'?"text-blue-500":"text-gray-600 "} flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-[15px] font-semibold hover:text-blue-500`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <BsDiamond className={`${location==='/user/allUser'?"font-bold":" opacity-50"} text-[10px] mr-2`}  /> All User
          </Link>
        </li>
        <li>
          <Link
            href="/user/addNewUser"
            className={`${location==='/user/addNewUser'?"text-blue-500":"text-gray-600 "} flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-[15px] font-semibold hover:text-blue-500`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <BsDiamond className={`${location==='/user/addNewUser'?"font-bold":" opacity-50"} text-[10px] mr-2`}  /> Add New User
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className={`${location==='/login'?"text-blue-500":"text-gray-600 "} flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-[15px] font-semibold hover:text-blue-500`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <BsDiamond className={`${location==='/login'?"font-bold":" opacity-50"} text-[10px] mr-2`}  /> Login
          </Link>
        </li>
        <li>
          <Link
            href="/registration"
            className={`${location==='/registration'?"text-blue-500":"text-gray-600 "} flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-[15px] font-semibold hover:text-blue-500`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <BsDiamond className={`${location==='/registration'?"font-bold":" opacity-50"} text-[10px] mr-2`}  /> Sign Up
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default UserDropDown;
