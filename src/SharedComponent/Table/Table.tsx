"use client"

import React, {useState} from "react";
import SearchBar from '../SearchBar/SearchBar';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {BsCupHot} from "react-icons/bs";
import {FiPlus} from "react-icons/fi";
import Pagination from "../Pagination/Pagination";
import Divider from "../Divider/Divider";

import TableList from "./TableList";
import {useRouter} from "next/navigation";

import {PiFileTextLight} from "react-icons/pi";
import Skeleton from "react-loading-skeleton";


const Table = ({tableHead, tableData, condition, categoryRefetch,isLoading}: any) => {
    // State to manage the selected value
    const [selectedValue, setSelectedValue] = useState("10"); // Default value is set to "10"

    const router = useRouter();
    const routeHandler = () => {
        if (condition === "ProductList") {
            router.push("/product/addProduct")
        }
        if (condition === "CategoryList") {
            router.push("/product/addCategory")
        }
        if (condition === "Attributes") {
            router.push("/attributes/addAttributes")
        }
    }

    return (
        <div className=' bg-white p-7 rounded-xl mt-5'>
            <section className='grid grid-cols-12'>
                {condition !== 'AllUser' && <div className=" flex gap-3 items-center col-span-2">

                    <p className='text-[12px] text-gray-400 font-normal mt-2'
                       style={{fontFamily: 'var(--font-inter)'}}></p>
                   {isLoading?<Skeleton width={100} height={30}/>: <Select name="number" value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
                        <SelectTrigger id="framework"
                                       className="rounded-xl  font-normal w-[70px] border border-gray-200 shadow-none h-[30px] mt-2">
                            <SelectValue placeholder="Select brand"/>
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem className=" hover:bg-blue-500 hover:text-white" value="10">10</SelectItem>
                            <SelectItem className=" hover:bg-blue-500 hover:text-white" value="20">20</SelectItem>
                            <SelectItem className=" hover:bg-blue-500 hover:text-white" value="30">30</SelectItem>
                        </SelectContent>
                    </Select>}

                    <p className='text-[12px] text-gray-400 font-normal mt-2'
                       style={{fontFamily: 'var(--font-inter)'}}>{isLoading?<Skeleton  width={50}/>:"entries"}</p>
                </div>}

                <div className={`${condition === "AllUser" ? "col-span-9" : "col-span-7"}   `}>
                    <div className={`${condition === "AllUser" ? "w-[70%]" : "mx-auto w-[70%]"}  `}>
                       {isLoading? <Skeleton  height={30}/>:  <SearchBar/>}
                    </div>
                </div>

               {isLoading? <Skeleton width={200}  height={30}/> :<div
                    className={`${condition === "AllUser" ? "flex justify-end col-span-3" : "flex justify-end col-span-3"} `}>
                    <button onClick={routeHandler}

                            className="w-[200px] h-[50px]  py-3 font-bold text-blue-600 text-[14px] bg-white hover:text-white hover:bg-blue-600 rounded-xl border-blue-600 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                            style={{fontFamily: 'var(--font-inter)'}}
                    >
                        <div className=" flex gap-2 items-center">{condition === "OrderList" ?
                            <PiFileTextLight className=" text-[20px]"/> : <FiPlus className=" text-[20px]"/>}
                            <p>{condition === "OrderList" ? "Export all order" : "Add new"} </p>

                        </div>
                    </button>
                </div>}
            </section>

            <section className=" my-10">
                <TableList tableHead={tableHead} tableData={tableData} condition={condition}
                           categoryRefetch={categoryRefetch} isLoading={isLoading}/>
            </section>

            <section>
                <Divider/>
                <div className=" flex justify-between mt-6 mb-2">
                    <p className='text-[12px] text-gray-400 font-normal mt-2'
                       style={{fontFamily: 'var(--font-inter)'}}> {isLoading? <Skeleton width={100} />:   "Showing 10 entries"} </p>
                   
                    {isLoading? <Skeleton  width={200}  height={30}/>:   <Pagination/>}
                </div>

            </section>
        </div>
    );
};

export default Table;
