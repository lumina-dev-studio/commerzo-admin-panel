import type {Metadata} from "next";
import Login from "@/components/Login/Login";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Login",
}

const page = () => {
    return (
        <div className="relative min-h-[100vh] flex justify-center items-center w-full bg-cover" style={{backgroundImage: "url(images/login-bg.jpg)"}}>
            <Login/>
        </div>
    );
};

export default page;