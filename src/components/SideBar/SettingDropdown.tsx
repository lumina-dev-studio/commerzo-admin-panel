import Link from "next/link";
import {IoSettingsOutline} from "react-icons/io5";


const SettingDropdown = () => {
    return (
        <Link href="/setting"
              type="button"
              className="flex hover:text-blue-500 items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-50  dark:text-white dark:hover:bg-gray-700"
        >
            <IoSettingsOutline className=" text-[20px] font-semibold  hover:text-blue-500"/>
            <span className="flex-1 ml-3 text-left whitespace-nowrap text-[15px] font-semibold hover:text-blue-500"
                  style={{fontFamily: 'var(--font-inter)'}}>Setting</span>
        </Link>
    );
};

export default SettingDropdown;