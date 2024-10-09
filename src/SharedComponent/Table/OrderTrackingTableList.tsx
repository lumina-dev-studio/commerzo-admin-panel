
import {
 
    TableCell,
   
    TableRow,
  } from "@/components/ui/table";



const OrderTrackingTableList = ({item,index}:any)=> {
  return (
    <TableRow key={index} >
  

    <TableCell
      className="text-[13px] font-medium text-gray-600 p-3 pt-5"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {item?.Date}
    </TableCell>
    <TableCell
      className="text-[13px] font-medium text-gray-600 p-3"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {item?.Time}
    </TableCell>
    <TableCell
      className="text-[13px] font-medium text-gray-600 p-3"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {item?.Description}
    </TableCell>
    <TableCell
      className="text-[13px] font-medium text-gray-600 p-3"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {item?.Location}
    </TableCell>
   
  
  </TableRow>
  );
};

export default OrderTrackingTableList;