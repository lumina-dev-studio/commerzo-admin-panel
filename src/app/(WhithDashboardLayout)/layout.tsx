import DashBoardLayout from "@/components/Dahsboard/DashboardLayout";
import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/SideBar/SideBar";
import {Toaster} from "@/components/ui/sonner";
import Footer from "@/SharedComponent/Footer/Footer";

const layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            <DashBoardLayout>
                <Navbar/>
                <SideBar>
                    {children}
                </SideBar>
                <Footer/>
                <Toaster/>
            </DashBoardLayout>
        </div>
    );
};

export default layout;