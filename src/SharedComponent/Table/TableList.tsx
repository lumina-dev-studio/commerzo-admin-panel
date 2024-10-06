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

const TableList = ({ tableHead, tableData }: any) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHead?.map((head: string, index: number) => (
            <TableHead
              key={index}
              style={{ fontFamily: "var(--font-inter)" }}
              className={`text-[15px] bg-gray-100 p-3 text-gray-900 font-bold 
              ${index === 1 ? "w-[220px] rounded-s-xl" : ""}`}
            >
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="space-y-5">
        {tableData.map((item: any, index: number) => ( <ProductTableList item={item} index={index}/>
          
        ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
