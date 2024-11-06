import Skeleton from "react-loading-skeleton";
import UpdateProfile from "./UpdateUser/UpdateProfile";

const Setting = ({isLoading}:any) => {
  return (
    <div className="p-5">
        <h1 className=" text-2xl font-bold my-8 ">{isLoading?<Skeleton width={200} height={30} />:"Setting"}</h1>
  

      <UpdateProfile/>
    </div>
  );
};

export default Setting;