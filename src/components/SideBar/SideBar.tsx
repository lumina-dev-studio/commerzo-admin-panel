"use client"
import { RootState } from "@/Redux/store";
import Drawer from "./Drawer";
import { useAppSelector } from "@/Redux/hooks";

const SideBar = ({ children }: any) => {
  const isOpen = useAppSelector((state: RootState) => state.navBar.sidebarToggle);
    return (
      <div className="grid grid-cols-12">
       <section className={`${!isOpen?"col-span-0":"col-span-2"} p-4  `}>

       <Drawer/>
       </section>
      
       
         
          
      
  
        {/* Main content section */}
        <section className={`${!isOpen?"col-span-12":"col-span-10"} p-4  `}>
          {children}
        </section>
      </div>
    );
  };
  
  export default SideBar;
  