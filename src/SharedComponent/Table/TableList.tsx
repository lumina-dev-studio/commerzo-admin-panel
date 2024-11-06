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
import OrderDetailTableList from "./OrderDetailTableList";
import OrderTrackingTableList from "./OrderTrackingTableList";
import AlluserTableList from "./AlluserTableList";
import Skeleton from "react-loading-skeleton";


const TableList = ({ tableHead, tableData,condition, categoryRefetch ,isLoading}: any) => {
  return (
    <Table >
      <TableHeader>
        {/* table head maping strat */}
{/* 
       {condition==="ProductList" && <TableRow>
          {tableHead?.map((head: string, index: number) => (
            <TableHead
              key={index}
              style={{ fontFamily: "var(--font-inter)" }}
              className={`text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
              ${index === 0 ? " rounded-s-xl   " : ""}
              
              ${index === 2 ? "w-[220px]   " : ""}
              ${index === 6 ? " text-center  " : ""}
              
              
              
              `}
            >
              {head} 
            </TableHead>
          ))}
        </TableRow>} */}






{condition === "ProductList" && (
  isLoading ? (
    <Skeleton width="100%" height={30} />
  ) : (
    <TableRow>
      {tableHead?.map((head: string, index: number) => (
        <TableHead
          key={index}
          style={{ fontFamily: "var(--font-inter)" }}
          className={`text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
            ${index === 0 ? "rounded-s-xl" : ""}
            ${index === 2 ? "w-[220px]" : ""}
            ${index === 6 ? "text-center" : ""}
          `}
        >
          {head}
        </TableHead>
      ))}
    </TableRow>
  )
)}


{/* {condition==="CategoryList" && <TableRow>
          {tableHead?.map((head: string, index: number) => (
            <TableHead
              key={index}
              style={{ fontFamily: "var(--font-inter)" }}
              className={`text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
              ${index === 2 ? "w-[220px]   " : ""} 
              ${index === 0 ? " rounded-s-xl   " : ""} 
              ${index === 6 ? " ps-8  " : ""} 
              
              
              `}
            >
              {head}
            </TableHead>
          ))}
        </TableRow>} */}



 {condition === "CategoryList" && (
  isLoading ? (
    <Skeleton width="100%" height={30} />
  ) : (
    <TableRow>
      {tableHead?.map((head: string, index: number) => (
        <TableHead
          key={index}
          style={{ fontFamily: "var(--font-inter)" }}
          className={`text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
            ${index === 2 ? "w-[220px]" : ""} 
            ${index === 0 ? "rounded-s-xl" : ""} 
            ${index === 6 ? "ps-8" : ""} 
          `}
        >
          {head}
        </TableHead>
      ))}
    </TableRow>
  )
)}


 
    

       {condition==="OrderList" && <TableRow>
          {tableHead?.map((head: string, index: number) => (
            <TableHead
              key={index}
              style={{ fontFamily: "var(--font-inter)" }}
              className={`text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
              ${index === 0 ? "w-[320px]  rounded-s-xl " : ""} 
              ${index === 2 ? " ps-8 " : ""} 
              ${index === 8 ? " ps-8 " : ""} 
         
              
              
              
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
              ${index === 0 ? "w-[520px]  rounded-s-xl " : ""}
              ${index === 3 ? "w-[220px] ps-8  " : ""}
              
              
              `}
            >
              {head}
            </TableHead>
          ))}
        </TableRow>}


{condition==="OrderDetail" && <TableRow className=" border-none">
          {tableHead?.map((head: string, index: number) => (
            <TableHead
              key={index}
              style={{ fontFamily: "var(--font-inter)" }}
              className={`
              ${index === 0 ? "w-[320px]    " : ""} `}
            >
              {head}
            </TableHead>
          ))}
        </TableRow>}

{condition==="OrderTracking" && <TableRow className=" border-none">
          {tableHead?.map((head: string, index: number) => (
            <TableHead
              key={index}
              style={{ fontFamily: "var(--font-inter)" }}
              className={` text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
              ${index === 0 ? "rounded-s-xl    " : ""}  
                 ${index === 2 ? "w-[320px] ps-[60px]  " : ""} 
              ${index === 3 ? "w-[320px] text-center    " : ""} 
            ` 
            
            }
            >
              {head}
            </TableHead>
          ))}
        </TableRow>}

{/* {condition==="AllUser" && <TableRow className=" border-none">
          {tableHead?.map((head: string, index: number) => (
            <TableHead
              key={index}
              style={{ fontFamily: "var(--font-inter)" }}
              className={` text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
              ${index === 0 ? "rounded-s-xl    " : ""}  
                 ${index === 2 ? "w-[320px] ps-[60px]  " : ""} 
              ${index === 3 ? "w-[100px] text-center    " : ""} 
              ${index === 4 ? "w-[100px] text-center    " : ""} 
            ` 
            
            }
            >
              {head}
            </TableHead>
          ))}
        </TableRow>} */}

{condition === "AllUser" && (
  isLoading ? (
    
      <Skeleton width="100%" height={30} />
       
  
  ) : (
    <TableRow className="border-none">
      {tableHead?.map((head: string, index: number) => (
        <TableHead
          key={index}
          style={{ fontFamily: "var(--font-inter)" }}
          className={`text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
            ${index === 0 ? "rounded-s-xl" : ""}  
            ${index === 2 ? "w-[320px] ps-[60px]" : ""} 
            ${index === 3 ? "w-[100px] text-center" : ""} 
            ${index === 4 ? "w-[100px] text-center" : ""} 
          `}
        >
          {head}
        </TableHead>
      ))}
    </TableRow>
  )
)}





  {/* table head maping end */}

{/* table body maping strat */}
      </TableHeader>
    {/* {condition==="ProductList"&& <TableBody className="space-y-5">
        {tableData?.map((item: any, index: number) => ( <ProductTableList item={item} index={index}/>
          
        ))}
      </TableBody>}   */}

{condition === "ProductList" && (
  <TableBody className="space-y-5">
    {isLoading ? (
      // Render skeleton rows if loading
      Array.from({ length: 5 }).map((_, index) => (
        <ProductTableList key={index} isLoading={true} /> // Use ProductTableList for skeleton rows
      ))
    ) : (
      // Render actual product rows when not loading
      tableData?.map((item: any, index: number) => (
        <ProductTableList key={index} item={item} index={index} isLoading={false} /> // Pass isLoading as false
      ))
    )}
  </TableBody>
)}

{/* 
    {condition==="CategoryList"&& <TableBody className="space-y-5">
        {tableData?.map((item: any, index: number) => ( <CategoryTableList item={item} index={index} categoryRefetch={categoryRefetch}/>
          
        ))}
      </TableBody>}   */}


{condition === "CategoryList" && (
  <TableBody className="space-y-5">
    {isLoading ? (
      // Render skeleton rows if loading
      Array.from({ length: 5 }).map((_, index) => (
        <CategoryTableList key={index} isLoading={true} />
      ))
    ) : (
      // Render actual category rows when not loading
      tableData?.map((item: any, index: number) => (
        <CategoryTableList
          key={item?.id || index} // Ensure a unique key for each item
          item={item}
          index={index}
          isLoading={false} // Pass false to indicate data has loaded
          categoryRefetch={categoryRefetch}
        />
      ))
    )}
  </TableBody>
)}
  


    {condition==="Attributes"&& <TableBody className="space-y-5">
        {tableData?.map((item: any, index: number) => ( <AttributesTableList item={item} index={index}/>
          
        ))}
      </TableBody>}  


    {condition==="OrderList"&& <TableBody className="space-y-5">
        {tableData?.map((item: any, index: number) => ( <OrderTableList item={item} index={index}/>
          
        ))}
      </TableBody>}  

    {condition==="OrderDetail"&& <TableBody className="space-y-5">
        {tableData?.map((item: any, index: number) => ( <OrderDetailTableList item={item} index={index}/>
          
        ))}
      </TableBody>}  

    {condition==="OrderTracking"&& <TableBody className="space-y-5">
        {tableData?.map((item: any, index: number) => ( <OrderTrackingTableList item={item} index={index}/>
          
        ))}
      </TableBody>}  

      
    {/* {condition==="AllUser"&& <TableBody className="space-y-5">
        {tableData?.map((item: any, index: number) => ( <AlluserTableList item={item} index={index} isLoading={isLoading}/>
          
        ))}
      </TableBody>}   */}

{condition === "AllUser" && (
  <TableBody className="space-y-5">
    {isLoading ? (
      // Render a number of skeleton rows
      Array?.from({ length: 5 })?.map((_, index) => (
        <AlluserTableList key={index} isLoading={true} />
      ))
    ) : (
      tableData?.map((item: any, index: number) => (
        <AlluserTableList key={index} item={item} index={index} isLoading={false} />
      ))
    )}
  </TableBody>
)}



      {/* table body maping end */}
    </Table>
  );
};

export default TableList;
