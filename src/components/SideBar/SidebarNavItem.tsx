import Link from "next/link";
import React from 'react';

interface SidebarNavItem {
    icon: React.ReactNode;
    label: string;
    url: string;
    isActive: boolean;
}

const SidebarNavItem = ({icon, label, url, isActive}: SidebarNavItem) => {
    return (
        <li>
            <Link href={url} className={`sidebarMenu ${isActive ? "active" : ""}`}>
                {icon}
                <span className="sidebarMenuLabel"
                      style={{fontFamily: 'var(--font-inter)'}}>{label}</span>
            </Link>
        </li>
    );
}
export default SidebarNavItem;