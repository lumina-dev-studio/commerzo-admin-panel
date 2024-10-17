import {
    
    TableCell,
  
    TableRow,
  } from "@/components/ui/table";
 
  import { IoEyeOutline } from "react-icons/io5";
import { LuPenLine } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
 
const AlluserTableList = ({item,index}:any) => {
  return (
    <TableRow key={index} className={index % 2 === 1 ? "bg-gray-100 border-none" : " border-none"}>
    <TableCell
               style={{ fontFamily: "var(--font-inter)", padding: "0" }}
               className="p-0 rounded-s-xl"
             >
               <div className="flex items-center gap-5 p-3 rounded-2xl">
                 <div>
                   <img
                     className="h-[50px] w-[50px] rounded-xl"
                    //  src={item?.image}
                     src={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                     alt=""
                   />
                 </div>
                 <div>
            
                 <p className="hover:text-blue-500 cursor-pointer  font-semibold"style={{ fontFamily: 'var(--font-inter)' }} >{item?.name}</p>
                 </div>
               </div>
             </TableCell>
 
 
             <TableCell
       className="text-[13px] font-medium text-gray-600 p-3"
       style={{ fontFamily: "var(--font-inter)" }}
     >
          <div>
             
                 <p className="hover:text-blue-500 cursor-pointer text-gray-900 font-semibold"style={{ fontFamily: 'var(--font-inter)' }} >
                     {item?.phoneNumber}</p>
                 </div>
     
     </TableCell>
 
     <TableCell
       className="text-[13px] font-medium text-gray-600 p-3 text-center"
       style={{ fontFamily: "var(--font-inter)" }}
     >
         <div>
               
                 <p className="hover:text-blue-500 cursor-pointer  text-gray-900 font-semibold"style={{ fontFamily: 'var(--font-inter)' }} >
                     {item?.email}</p>
                 </div>
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

export default AlluserTableList;