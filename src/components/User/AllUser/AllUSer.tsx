"use client"
import { TableCell, TableRow } from "@/components/ui/table";
import { useGetAllUsersQuery } from "@/Redux/api/User/userApi";
import Table from "@/SharedComponent/Table/Table";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AllUSer = () => {
  const tableHead=["User	","Phone",,"Email","Role","Action" ]
  const { data:tableData, refetch, isLoading, error }: any = useGetAllUsersQuery("");




  console.log(tableData?.data)
  return (
    <div className=" p-5">
       <h1 className=" text-2xl font-bold my-8 ">{isLoading?<Skeleton width={100}/>: "All User"}</h1> 
      
       <Table tableHead={tableHead} tableData={tableData?.data} condition='AllUser' isLoading={isLoading}/> 
    </div>
  );
};

export default AllUSer;