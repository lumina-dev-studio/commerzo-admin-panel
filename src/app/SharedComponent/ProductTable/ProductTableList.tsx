"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProductTableList = () => {
  const data = [
    { Product: "John Brown", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Product ID": 45, Quantity: "New York No. 1 Lake Park", Sale: 50, Stock: 100 },
    { Product: "Jim Green", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Product ID": 46, Quantity: "London No. 1 Lake Park", Sale: 70, Stock: 120 },
    { Product: "Joe Black", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Product ID": 47, Quantity: "Sidney No. 1 Lake Park", Sale: 40, Stock: 60 },
    { Product: "Edward King", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Product ID": 48, Quantity: "LA No. 1 Lake Park", Sale: 55, Stock: 150 },
    { Product: "Jim Red", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Product ID": 49, Quantity: "Melbourne No. 1 Lake Park", Sale: 35, Stock: 80 },
  ];

  return (
    <Table>
      <TableCaption>A list of product data.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead style={{ fontFamily: "var(--font-inter)" }} className="text-[15px] rounded-s-xl bg-gray-200 p-3 text-gray-900 w-[500px] font-bold">
            Product
          </TableHead>
          <TableHead style={{ fontFamily: "var(--font-inter)" }} className="text-[15px] text-gray-900 font-bold bg-gray-200 p-3">
            Product ID
          </TableHead>
          <TableHead style={{ fontFamily: "var(--font-inter)" }} className="text-[15px] text-gray-900 font-bold bg-gray-200 p-3">
            Quantity
          </TableHead>
          <TableHead style={{ fontFamily: "var(--font-inter)" }} className="text-[15px] text-gray-900 font-bold bg-gray-200 p-3">
            Sale
          </TableHead>
          <TableHead style={{ fontFamily: "var(--font-inter)" }} className="text-[15px] text-gray-900 font-bold bg-gray-200 p-3 ">
            Stock
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className=" space-y-5 ">
        {data.map((item, index) => (
     <TableRow key={index} className={index % 2 === 1 ? "bg-gray-200  " : ""}>
  <TableCell style={{ fontFamily: "var(--font-inter)", padding: "0" }} className="p-0 rounded-s-xl ">
    <div className="flex items-center gap-5 p-3 rounded-2xl ">
      <div>
        <img className="h-[50px] w-[50px] text-[15px] font-bold bg-gray-900" src={item?.image} alt="" />
      </div>
      <div className="hover:text-blue-500 cursor-pointer">{item?.Product}</div>
    </div>
  </TableCell>

  <TableCell className="text-[13px] font-medium text-gray-600 p-3 " style={{ fontFamily: "var(--font-inter)" }}>
    {item?.["Product ID"]}
  </TableCell>
  <TableCell className="text-[13px] font-medium text-gray-600 p-3 " style={{ fontFamily: "var(--font-inter)" }}>
    {item.Quantity}
  </TableCell>
  <TableCell className="text-[13px] font-medium text-gray-600 p-3 " style={{ fontFamily: "var(--font-inter)" }}>
    {item.Sale}
  </TableCell>
  <TableCell className="text-[13px] font-medium text-gray-600 p-3 " style={{ fontFamily: "var(--font-inter)" }}>
    {item.Stock}
  </TableCell>
</TableRow>

        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTableList;
