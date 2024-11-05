"use client"
import {useGetUserAllProductQuery} from "@/Redux/api/Product/productApi";
import Table from "@/SharedComponent/Table/Table";
import Skeleton from "react-loading-skeleton";


const ProductList = () => {

    const {data, isLoading} = useGetUserAllProductQuery('')

   
    console.log(data, 'data')
    const tableHead = ["Product	", "Product ID", , "Price", "Category", "Variants", "Action"]
  
    return (
        <div className=" p-5">
            <h1 className=" text-2xl font-bold my-8 ">{isLoading?<Skeleton width={200} height={30} />:"Manage Product "}</h1>
            <Table tableHead={tableHead} tableData={data?.data} condition='ProductList' isLoading={isLoading}/>
        </div>
    );
};

export default ProductList;