"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductTableList from "./ProductTableList";
import CategoryTableList from "./CategoryTableList";
import AttributesTableList from "./AttributesTableList";
import OrderTableList from "./OrderTableList";


const TableList = ({ tableHead, tableData,condition }: any) => {
  return (
    <Table >
      <TableHeader>
        {/* table head maping strat */}

       {condition==="ProductList" && <TableRow>
          {tableHead?.map((head: string, index: number) => (
            <TableHead
              key={index}
              style={{ fontFamily: "var(--font-inter)" }}
              className={`text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
              ${index === 2 ? "w-[220px]   " : ""}`}
            >
              {head}
            </TableHead>
          ))}
        </TableRow>}

 
       {condition==="CategoryList" && <TableRow>
          {tableHead?.map((head: string, index: number) => (
            <TableHead
              key={index}
              style={{ fontFamily: "var(--font-inter)" }}
              className={`text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
              ${index === 2 ? "w-[220px]   " : ""} `}
            >
              {head}
            </TableHead>
          ))}
        </TableRow>}

       {condition==="OrderList" && <TableRow>
          {tableHead?.map((head: string, index: number) => (
            <TableHead
              key={index}
              style={{ fontFamily: "var(--font-inter)" }}
              className={`text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
              ${index === 0 ? "w-[320px]   " : ""} 
         
              
              
              
              `}
            >
              {head}
            </TableHead>
          ))}
        </TableRow>}

{condition==="Attributes" && <TableRow>
          {tableHead?.map((head: string, index: number) => (
            <TableHead
              key={index}
              style={{ fontFamily: "var(--font-inter)" }}
              className={`text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
              ${index === 0 ? "w-[520px]   " : ""} ${index === 3 ? "w-[220px]   " : ""}`}
            >
              {head}
            </TableHead>
          ))}
        </TableRow>}
  {/* table head maping end */}

{/* table body maping strat */}
      </TableHeader>
    {condition==="ProductList"&& <TableBody className="space-y-5">
        {tableData?.map((item: any, index: number) => ( <ProductTableList item={item} index={index}/>
          
        ))}
      </TableBody>}  

    {condition==="CategoryList"&& <TableBody className="space-y-5">
        {tableData?.map((item: any, index: number) => ( <CategoryTableList item={item} index={index}/>
          
        ))}
      </TableBody>}  


    {condition==="Attributes"&& <TableBody className="space-y-5">
        {tableData?.map((item: any, index: number) => ( <AttributesTableList item={item} index={index}/>
          
        ))}
      </TableBody>}  
    {condition==="OrderList"&& <TableBody className="space-y-5">
        {tableData?.map((item: any, index: number) => ( <OrderTableList item={item} index={index}/>
          
        ))}
      </TableBody>}  
      {/* table body maping end */}
    </Table>
  );
};

export default TableList;
