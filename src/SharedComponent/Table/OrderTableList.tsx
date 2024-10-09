import {
    
    TableCell,
  
    TableRow,
  } from "@/components/ui/table";
  import { IoEyeOutline } from "react-icons/io5";
  import { LuPenLine } from "react-icons/lu";
  import { RiDeleteBinLine } from "react-icons/ri";
  

const OrderTableList =({item,index}:any)=> {
  return (
    <TableRow key={index} className={index % 2 === 1 ? "bg-gray-100 border-none" : " border-none"}>
    <TableCell
      style={{ fontFamily: "var(--font-inter)", padding: "0" }}
      className="p-0 rounded-s-xl"
    >
      <div className="flex items-center gap-5 p-3 rounded-2xl">
        <div>
          <img
            className="h-[50px] w-[50px] text-[15px] font-bold bg-gray-900"
            src={item?.image}
            alt=""
          />
        </div>
        <div className="hover:text-blue-500 cursor-pointer">{item?.Product}</div>
      </div>
    </TableCell>

    <TableCell
      className="text-[13px] font-medium text-gray-600 p-3"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <p>
      {item?.OrderId    }
      </p>
    </TableCell>
    <TableCell
      className="text-[13px] font-medium text-gray-600 p-3 text-center"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {item?.Price}
    </TableCell>
    <TableCell
      className="text-[13px] font-medium text-gray-600 p-3"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {item?.Quantity}
    </TableCell>
    <TableCell
      className="text-[13px] font-medium text-gray-600 p-3"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {item?.Payment}
    </TableCell>

    <TableCell
      className="text-[13px] font-medium text-gray-400 p-3"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {item?.Status==="Success"&& <span className=" bg-green-100/50 text-green-500 rounded-xl px-2 py-1">{item?.Status}</span>}
      {item?.Status==="Pending"&& <span className=" bg-gray-100/50 text-gray-500 rounded-xl px-2 py-1">{item?.Status}</span>}
      {item?.Status==="Cancel"&& <span className=" bg-red-100/50 text-red-500 rounded-xl px-2 py-1">{item?.Status}</span>}
    </TableCell>
  
    <TableCell
      className="text-[13px] font-medium text-gray-600 p-3"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {item?.Tracking}
    </TableCell>

    <TableCell
              className="text-[13px] font-medium text-gray-600 p-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >

                <div className=" flex gap-5 items-center">
                 <section>
                    <IoEyeOutline className=" text-blue-500 text-[20px] cursor-pointer"/>
                 </section>
                 <section>
                    <LuPenLine className=" text-green-500 text-[20px] cursor-pointer"/>
                 </section>
                 <section>
                    <RiDeleteBinLine className=" text-red-500 text-[20px] cursor-pointer"/>
                 </section>
               

                </div>
            </TableCell>
  
  
  </TableRow>
  );
};

export default OrderTableList;