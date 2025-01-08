import Link from "next/link";
import {FiShoppingCart} from "react-icons/fi";
import {BsDiamond} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {RootState} from "@/Redux/store";
import {useAppSelector} from "@/Redux/hooks";
import {setDropDownMenuToggle} from "@/Redux/api/SideBar/sideBarSlice";
import {usePathname} from "next/navigation";

const ProductDropdown = () => {
    const location = usePathname();
    const dispatch = useDispatch();
    const dropDown = useAppSelector((state: RootState) => state.sideBar.dropDownMenuToggle);

    const toggleDropdown = () => {
        // Toggle the dropdown state for "product"
        if (dropDown === "product") {
            dispatch(setDropDownMenuToggle(""));
        } else {
            dispatch(setDropDownMenuToggle("product"));
        }
    };

    return (
        <li>
            <h3 className="text-[13px] text-gray-500 opacity-50 font-bold mb-2.5 mt-6 ms-3">ALL PAGE</h3>
            <button
                type="button"
                onClick={toggleDropdown} // Toggle dropdown on button click
                className={`${dropDown === "product" && "bg-blue-100 bg-opacity-70 hover:bg-blue-100"} p-3 flex hover:text-blue-500 items-center w-full text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700`}
            >
                <FiShoppingCart
                    className={`${dropDown === "product" && "text-blue-500"} text-[20px] font-semibold hover:text-blue-500`}/>
                <span
                    className={`${dropDown === "product" && "text-blue-500"} flex-1 ml-3 text-left whitespace-nowrap text-[15px] font-semibold hover:text-blue-500`}
                    style={{fontFamily: 'var(--font-inter)'}}>
          Product
        </span>
                <svg
                    className={`w-6 h-6 transition-transform duration-200 ${dropDown === "product" ? "rotate-180" : ""}`}
                    fill={`${dropDown === "product" ? "rgb(59 130 246)" : "currentColor"}`}
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
            <ul className={`${dropDown === "product" ? "block" : "hidden"} py-2 space-y-2`}>
                <li>
                    <Link
                        href="/product/manageProduct"
                        className={`${location === '/product/manageProduct' ? "text-blue-500" : "text-gray-600 "} flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-[15px] font-semibold hover:text-blue-500`}
                        style={{fontFamily: 'var(--font-inter)'}}
                    >
                        <BsDiamond
                            className={`${location === '/product/manageProduct' ? "font-bold" : " opacity-50"} text-[10px] mr-2`}/> Manage
                        Product
                    </Link>
                </li>
                <li>
                    <Link
                        href="/product/manageCategory"
                        className={`${location === '/product/manageCategory' ? "text-blue-500" : "text-gray-600 "} flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11 text-[15px] font-semibold hover:text-blue-500`}
                        style={{fontFamily: 'var(--font-inter)'}}
                    >
                        <BsDiamond
                            className={`${location === '/product/manageCategory' ? "font-bold" : " opacity-50"} text-[10px] mr-2`}/> Manage
                        Category
                    </Link>
                </li>

            </ul>
        </li>
    );
};

export default ProductDropdown;
