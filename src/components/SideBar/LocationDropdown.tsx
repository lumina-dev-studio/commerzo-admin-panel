import Link from "next/link";
import { TfiLocationPin } from "react-icons/tfi";
import { BsDiamond } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/Redux/hooks";
import { RootState } from "@/Redux/store";
import { setDropDownMenuToggle } from "@/Redux/api/SideBar/sideBarSlice";

const LocationDropdown = () => {
  const dispatch = useDispatch();
  const dropDown = useAppSelector((state: RootState) => state.sideBar.dropDownMenuToggle);

  const toggleDropdown = () => {
    // Toggle the dropdown state for "Location"
    if (dropDown === "Location") {
      dispatch(setDropDownMenuToggle(""));
    } else {
      dispatch(setDropDownMenuToggle("Location"));
    }
  };

  return (
    <li>
      <h3 className="text-[13px] text-gray-500 opacity-50 font-bold mb-2.5 mt-6 ms-3">SETTING</h3>
      <button
        type="button"
        onClick={toggleDropdown} // Toggle dropdown on button click
        className={`flex hover:text-blue-500 items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700 ${
          dropDown === "Location" && "bg-blue-100 bg-opacity-70 hover:bg-blue-100"
        }`}
      >
        <TfiLocationPin
          className={`text-[20px] font-semibold ${dropDown === "Location" && "text-blue-500"} hover:text-blue-500`}
        />
        <span
          className={`flex-1 ml-3 text-left whitespace-nowrap text-[15px] font-semibold hover:text-blue-500 ${
            dropDown === "Location" && "text-blue-500"
          }`}
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Location
        </span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${
            dropDown === "Location" ? "rotate-180" : ""
          }`} // Rotate icon when dropdown is open
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
      <ul className={`${dropDown === "Location" ? "block" : "hidden"} py-2 space-y-2`}>
        <li>
          <Link
            href="#"
            className="flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-gray-600 text-[15px] font-semibold hover:text-blue-500"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <BsDiamond className="text-[10px] opacity-50 mr-2" /> Countries
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-gray-600 text-[15px] font-semibold hover:text-blue-500"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <BsDiamond className="text-[10px] opacity-50 mr-2" /> States
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-gray-600 text-[15px] font-semibold hover:text-blue-500"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <BsDiamond className="text-[10px] opacity-50 mr-2" /> Cities
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default LocationDropdown;
