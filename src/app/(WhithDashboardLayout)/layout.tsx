import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/SideBar/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>

        <Navbar/>

     <SideBar>
       {children}
        </SideBar>   
        
        
      
    </div>
  );
};

export default layout;