import Table from "@/SharedComponent/Table/Table";

const AllUSer = () => {
  const tableHead=["User	","Phone",,"Email","Action" ]
  const tableData = [
    { name: "Kristin Watson", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", phone: "+0881638667", email: 'tonurfnjj!@@gmail.com', },
    { name: "Kristin Watson", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", phone: "+0881638667", email: 'tonurfnjj!@@gmail.com', },
    { name: "Kristin Watson", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", phone: "+0881638667", email: 'tonurfnjj!@@gmail.com', },
    { name: "Kristin Watson", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", phone: "+0881638667", email: 'tonurfnjj!@@gmail.com', },
    { name: "Kristin Watson", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", phone: "+0881638667", email: 'tonurfnjj!@@gmail.com', },
  
 
  ];
  return (
    <div className=" p-5">
        <h1 className=" text-2xl font-bold my-8 "> All User</h1>
      
        <Table tableHead={tableHead} tableData={tableData} condition='AllUser'/>
    </div>
  );
};

export default AllUSer;