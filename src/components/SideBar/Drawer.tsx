'use client';


import { RootState } from '@/Redux/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EcommerceDropdown from './EcommerceDropdown';
import CategoryDropdown from './CategoryDropdown';
import DashboardDropdown from './DashboardDropdown';
import AttributesDropdown from './AttributesDropdown';


const Sidebar: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.navBar.sidebarToggle);
  return (
    <div className="flex">
      {/* Toggle Button */}
    

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-0 w-64 h-full transition-all duration-500 transform pt-20 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-gray-50 dark:bg-gray-800 shadow-lg`}
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 overflow-y-auto rounded">
           
          <ul className="space-y-2">
          
            {/* Dashboard Link */}
           <DashboardDropdown/>
        
       
            {/* E-commerce Dropdown Links */}
         
            <EcommerceDropdown/>

         {/* Category Dropdown Links */}
            <CategoryDropdown/>

         {/* Attributes Dropdown Links */}
            <AttributesDropdown/>

            {/* Additional Links */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                  ></path>
                  <path
                    d="M3 5a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zM3 1a1 1 0 100 2 1 1 0 000-2zm0 16a1 1 0 100 2 1 1 0 000-2zM9 1a1 1 0 100 2 1 1 0 000-2zM9 17a1 1 0 100 2 1 1 0 000-2zM15 1a1 1 0 100 2 1 1 0 000-2zm0 16a1 1 0 100 2 1 1 0 000-2z"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Analytics</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

   
    </div>
  );
};

export default Sidebar;
