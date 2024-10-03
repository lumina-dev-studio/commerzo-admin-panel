import { IoMdNotificationsOutline } from "react-icons/io";

const NavbarNotification = () => {
  return (
    <div className="  p-2 flex items-center">
    <div className=" h-[35px] w-[35px] bg-gray-200 rounded-full flex items-center justify-center">
    <IoMdNotificationsOutline className=" text-[25px]" />
    

    </div>
  </div>
  );
};

export default NavbarNotification;