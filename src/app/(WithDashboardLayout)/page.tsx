import SmallChart from "@/components/Chart/SmallChart/SmallChart";
import {Metadata} from "next";
export const metadata:Metadata = {
    title: "Home",
}
const page = () => {
    return (
        <div>
            <section className="grid grid-cols-4">
                <SmallChart/>
            </section>
        </div>
    );
};

export default page;