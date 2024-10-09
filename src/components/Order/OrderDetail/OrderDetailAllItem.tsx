"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import {
    Card,
  
  } from "@/components/ui/card"
import { useState } from "react";
import TableList from "@/SharedComponent/Table/TableList";
  

const OrderDetailAllItem = () => {
    const [selectedValue, setSelectedValue] = useState("");

    const tableHead:any=["","",""]
    const tableData = [
        { Product: "Kristin Watson", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1",Price:"$50.47",
        },
        { Product: "Kristin Watson", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "2",Price:"$50.47",
        },
        { Product: "Kristin Watson", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "4",Price:"$50.47",
        },
       
        ,
      ];
  return (
    <div>
      <Card className="p-5 shadow-none border-none">
        <section className=" flex justify-between items-center bg-gray-100 rounded-xl px-[10px] py-[2px]">
            
            <h3 className=" font-bold text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>All item
            </h3>

           <div>
           <Select  name="number" value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
            <SelectTrigger id="framework" className="rounded-xl border-none font-bold p-0   w-[70px] border border-gray-200 shadow-none h-[30px] mt-2">
              <SelectValue placeholder="Short" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem className=" hover:text-blue-500" value="Name">Name</SelectItem>
              <SelectItem className=" hover:text-blue-500" value="Quantity">Quantity</SelectItem>
              <SelectItem className=" hover:text-blue-500" value="Price">Price</SelectItem>
            </SelectContent>
          </Select>
               
           </div>
        </section>

        <section>
            <TableList tableData={tableData} tableHead={tableHead}  condition='OrderDetail'/>
        </section>

      </Card>
    </div>
  );
};

export default OrderDetailAllItem;