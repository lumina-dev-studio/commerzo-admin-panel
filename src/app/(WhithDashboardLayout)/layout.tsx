import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/SideBar/SideBar";
import Footer from "@/SharedComponent/Footer/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div>

        <Navbar/>

     <SideBar>
       {children}
        </SideBar> 

        <Footer/>  
        
        
      
    </div>
  );
};

export default layout;