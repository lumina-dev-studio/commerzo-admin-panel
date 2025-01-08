import DashBoardLayout from "@/components/Dahsboard/DashboardLayout";
import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/SideBar/SideBar";
import {Toaster} from "@/components/ui/sonner";

const layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            <DashBoardLayout>
                <Navbar/>
                <SideBar>
                    {children}
                </SideBar>
                <Toaster/>
            </DashBoardLayout>
        </div>
    );
};

export default layout;