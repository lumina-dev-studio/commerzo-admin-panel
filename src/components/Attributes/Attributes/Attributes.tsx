
import Table from "@/SharedComponent/Table/Table";


const Attributes = () => {
  const tableHead=["Category	","Value",,"Action",]
  const tableData = [
    {
       id:1,Category:"Color",Value:"Blue, green, white" 
      
      },
    {
       id:2,Category:"Size",Value:"S, M, L, XL" 
      
      },
    {
       id:3,Category:"Material",Value:"Cotton, Polyster" 
      
      },
    {
       id:4,Category:"Style",Value:"Classic, mordern, ethnic, western" 
      
      },
    {
       id:5,Category:"Meat Type",Value:"Fresh, Frozen, Marinated" 
      
      },
  ];
return (
  <div className=" p-5">
      <h1 className=" text-2xl font-bold my-8 "> Attribute List </h1>
      <Table tableHead={tableHead} tableData={tableData} condition='Attributes'/>
   
 
  </div>
);
};

export default Attributes;