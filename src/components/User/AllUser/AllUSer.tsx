"use client"
import { useGetAllUsersQuery } from "@/Redux/api/User/userApi";
import Table from "@/SharedComponent/Table/Table";

const AllUSer = () => {
  const tableHead=["User	","Phone",,"Email","Action" ]
  const { data:tableData, refetch, isLoading, error }: any = useGetAllUsersQuery("");
  

  if (isLoading) {
    return  <>Loading...</>;
  }

  console.log(tableData?.data)
  return (
    <div className=" p-5">
        <h1 className=" text-2xl font-bold my-8 "> All User</h1>
      
        <Table tableHead={tableHead} tableData={tableData?.data} condition='AllUser'/>
    </div>
  );
};

export default AllUSer;