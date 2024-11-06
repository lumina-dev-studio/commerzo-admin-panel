import { TableCell, TableRow } from "@/components/ui/table";
import { IoEyeOutline } from "react-icons/io5";
import { LuPenLine } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import Skeleton from 'react-loading-skeleton';


const AlluserTableList = ({ item, index, isLoading }:any) => {
  return (
    <TableRow key={index} className={index % 2 === 1 ? "bg-gray-100 border-none" : "border-none"}>
      {/* Profile Image & Name */}
      <TableCell style={{ fontFamily: "var(--font-inter)", padding: "0" }} className="p-0 rounded-s-xl">
        <div className="flex items-center gap-5 p-3 rounded-2xl">
          {isLoading ? (
            <>
              <Skeleton height={50} width={50} borderRadius={8} />
              <Skeleton width={100} />
            </>
          ) : (
            <>
              <img
                className="h-[50px] w-[50px] rounded-xl"
                src={item?.image || "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt="User"
              />
              <p className="hover:text-blue-500 cursor-pointer font-semibold" style={{ fontFamily: 'var(--font-inter)' }}>
                {item?.name?.length > 15 ? `${item?.name.slice(0, 15)}...` : item?.name}
              </p>
            </>
          )}
        </div>
      </TableCell>

      {/* Phone Number */}
      <TableCell className="text-[13px] font-medium text-gray-600 p-3">
        {isLoading ? (
          <Skeleton width={80} />
        ) : (
          <p className="hover:text-blue-500 cursor-pointer text-gray-900 font-semibold">
            {item?.phoneNumber?.length > 15 ? `${item?.phoneNumber.slice(0, 15)}...` : item?.phoneNumber}
          </p>
        )}
      </TableCell>

      {/* Email */}
      <TableCell className="text-[13px] font-medium text-gray-600 p-3 text-center">
        {isLoading ? (
          <Skeleton width={120} />
        ) : (
          <p className="hover:text-blue-500 cursor-pointer text-gray-900 font-semibold">
            {item?.email}
          </p>
        )}
      </TableCell>

      {/* Role */}
      <TableCell className="text-[13px] font-medium text-gray-600 p-3 text-center">
        {isLoading ? (
          <Skeleton width={60} />
        ) : (
          <p className="hover:text-blue-500 cursor-pointer text-gray-900 font-semibold">
            {item?.role}
          </p>
        )}
      </TableCell>

      {/* Actions (View, Edit, Delete) */}
      <TableCell className="text-[13px] font-medium text-gray-600 p-3">
        <div className="flex gap-5 items-center">
          {isLoading ? (
            <>
              <Skeleton circle={true} height={20} width={20} />
              <Skeleton circle={true} height={20} width={20} />
              <Skeleton circle={true} height={20} width={20} />
            </>
          ) : (
            <>
              <IoEyeOutline className="text-blue-500 text-[20px] cursor-pointer" />
              <LuPenLine className="text-green-500 text-[20px] cursor-pointer" />
              <RiDeleteBinLine className="text-red-500 text-[20px] cursor-pointer" />
            </>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AlluserTableList;
