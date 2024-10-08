import Table from "@/SharedComponent/Table/Table";

const OrderList = () => {
    const tableHead=["Product	","Order ID","Price","Quantity","Payment",,"Status","Tracking","Action"]
    const tableData = [
      { Product: "Kristin Watson", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638",OrderId:"#7712309",Price:"$1,452.500",Payment:"20",Status:"Success",Tracking:"Tracking"
      },
      { Product: "Kristin Watson", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638",OrderId:"#7712309",Price:"$1,452.500",Payment:"20",Status:"Success",Tracking:"Tracking"
      },
      { Product: "Kristin Watson", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638",OrderId:"#7712309",Price:"$1,452.500",Payment:"20",Status:"Pending",Tracking:"Tracking"
      },
      { Product: "Kristin Watson", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638",OrderId:"#7712309",Price:"$1,452.500",Payment:"20",Status:"Cancel",Tracking:"Tracking"
      },
      { Product: "Kristin Watson", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638",OrderId:"#7712309",Price:"$1,452.500",Payment:"20",Status:"Cancel",Tracking:"Tracking"
      },
      ,
    ];
  return (
    <div className=" p-5">
        <h1 className=" text-2xl font-bold my-8 "> Order List
        <Table tableHead={tableHead} tableData={tableData} condition='OrderList'/>
      </h1>
   
    </div>
  );
};

export default OrderList;