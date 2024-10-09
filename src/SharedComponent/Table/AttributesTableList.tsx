import {
   
    TableCell,
 
    TableRow,
  } from "@/components/ui/table";
  import { IoEyeOutline } from "react-icons/io5";
  import { LuPenLine } from "react-icons/lu";
  import { RiDeleteBinLine } from "react-icons/ri";



const AttributesTableList = ({item,index}:any) => {
  return (
    <TableRow key={index} className={index % 2 === 1 ? "bg-gray-100 border-none" : " border-none"}>
            <TableCell
              style={{ fontFamily: "var(--font-inter)", padding: "0" }}
              className="p-0 rounded-s-xl"
            >
             
                <div className="hover:text-blue-500 cursor-pointer ms-3">{item?.Category}</div>
              
            </TableCell>

            <TableCell
              className="text-[13px] font-medium text-gray-600 p-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {item?.Value}
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

export default AttributesTableList;