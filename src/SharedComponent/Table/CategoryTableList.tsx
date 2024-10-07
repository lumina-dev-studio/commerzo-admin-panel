import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { IoFastFoodOutline } from "react-icons/io5";

const CategoryTableList = ({item,index}:any) => {
  return (
    <TableRow key={index} className={index % 2 === 1 ? "bg-gray-100" : ""}>
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
              <IoFastFoodOutline className=" text-[20px]"/>
              </p>
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
              {item?.Sale}
            </TableCell>
          
            
          
          
          </TableRow>
  );
};

export default CategoryTableList;