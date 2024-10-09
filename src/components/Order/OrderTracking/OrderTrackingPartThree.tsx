
import { Card } from "@/components/ui/card";
import TableList from "@/SharedComponent/Table/TableList";

const OrderTrackingPartThree = () => {
    
    const tableHead=["Date	","Time","Description","Location"]
    const tableData = [
      { Date: "20 Nov 2023", Time : "2:30 PM", Description: "The sender is preparing the goods",Location:"2715 Ash Dr. San Jose, South Dakota 83475"
      },
      { Date: "20 Nov 2023", Time : "2:30 PM", Description: "The sender is preparing the goods",Location:"2715 Ash Dr. San Jose, South Dakota 83475"
      },
      { Date: "20 Nov 2023", Time : "2:30 PM", Description: "The sender is preparing the goods",Location:"2715 Ash Dr. San Jose, South Dakota 83475"
      },
      { Date: "20 Nov 2023", Time : "2:30 PM", Description: "The sender is preparing the goods",Location:"2715 Ash Dr. San Jose, South Dakota 83475"
      },
      { Date: "20 Nov 2023", Time : "2:30 PM", Description: "The sender is preparing the goods",Location:"2715 Ash Dr. San Jose, South Dakota 83475"
      },
     
      ,
    ];
  return (
    <div className=" p-5">
      

      <div className=" bg-white rounded-xl p-5">
      <TableList tableHead={tableHead} tableData={tableData} condition='OrderTracking'/>
      </div>

   
 
          

 
    </div>
  );
};

export default OrderTrackingPartThree;