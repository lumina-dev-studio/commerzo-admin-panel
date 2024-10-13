import Link from "next/link";
import { LiaFileMedicalSolid } from "react-icons/lia";
import { BsDiamond } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/Redux/hooks";
import { RootState } from "@/Redux/store";
import { setDropDownMenuToggle } from "@/Redux/api/SideBar/sideBarSlice";
import { usePathname } from "next/navigation";

const OrderDropDown = () => {
  const location = usePathname();
  const dispatch = useDispatch();
  const dropDown = useAppSelector((state: RootState) => state.sideBar.dropDownMenuToggle);

  const toggleDropdown = () => {
    // Toggle the dropdown state for "Order"
    if (dropDown === "Order") {
      dispatch(setDropDownMenuToggle(""));
    } else {
      dispatch(setDropDownMenuToggle("Order"));
    }
  };

  return (
    <li>
      <button
        type="button"
        onClick={toggleDropdown} // Toggle dropdown on button click
        className={`flex hover:text-blue-500 items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700 ${dropDown === "Order" && "bg-blue-100 bg-opacity-70 hover:bg-blue-100"}`}
      >
        <LiaFileMedicalSolid className={`${dropDown === "Order" && "text-blue-500"} text-[20px] font-semibold hover:text-blue-500`} />
        <span className={`${dropDown === "Order" && "text-blue-500"} flex-1 ml-3 text-left whitespace-nowrap text-[15px] font-semibold hover:text-blue-500`} style={{ fontFamily: 'var(--font-inter)' }}>
          Order
        </span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${dropDown === "Order" ? "rotate-180" : ""}`}
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
      <ul className={`${dropDown === "Order" ? "block" : "hidden"} py-2 space-y-2`}>
        <li>
          <Link
            href="/order/orderList"
            className={`${location==='/order/orderList'?"text-blue-500":"text-gray-600 "} flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-[15px] font-semibold hover:text-blue-500`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <BsDiamond className={`${location==='/order/orderList'?"font-bold":" opacity-50"} text-[10px] mr-2`} /> Order List
          </Link>
        </li>
        <li>
          <Link
            href="/order/orderDetail"
            className={`${location==='/order/orderDetail'?"text-blue-500":"text-gray-600 "} flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-[15px] font-semibold hover:text-blue-500`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <BsDiamond className={`${location==='/order/orderDetail'?"font-bold":" opacity-50"} text-[10px] mr-2`} /> Order Detail
          </Link>
        </li>
        <li>
          <Link
            href="/order/orderTracking"
            className={`${location==='/order/orderTracking'?"text-blue-500":"text-gray-600 "} flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-[15px] font-semibold hover:text-blue-500`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <BsDiamond className={`${location==='/order/orderTracking'?"font-bold":" opacity-50"} text-[10px] mr-2`} /> Order Tracking
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default OrderDropDown;
