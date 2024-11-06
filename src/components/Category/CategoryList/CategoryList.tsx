"use client"
import { useGetSingleCategoryQuery } from "@/Redux/api/Product/Category/categoryApi";
import Table from "@/SharedComponent/Table/Table";
import Skeleton from "react-loading-skeleton";


const CategoryList = () => {
  const {data,isLoading,refetch:categoryRefetch}=useGetSingleCategoryQuery('')




  console.log(data)
    const tableHead=["Category	","Icon","Action" ]
   
  return (
    <div className=" p-5">
      <h1 className=" text-2xl font-bold my-8 ">{isLoading?<Skeleton width={200} height={30} />:"Manage Category "}</h1>
   
        <Table tableHead={tableHead} tableData={data?.data} isLoading={isLoading} condition='CategoryList' categoryRefetch={categoryRefetch}/>
     
   
    </div>
  );
};

export default CategoryList;