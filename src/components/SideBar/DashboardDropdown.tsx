import Link from "next/link";
import {BiHome} from "react-icons/bi";

const DashboardDropdown = () => {
    return (
        <li>
            <Link href="/"
                  type="button"
                  className="sidebarMenu"
            >
                <BiHome className="sidebarMenuIcon"/>
                <span className="sidebarMenuLabel"
                      style={{fontFamily: 'var(--font-inter)'}}>Home</span>
            </Link>
        </li>
    );
};

export default DashboardDropdown;
