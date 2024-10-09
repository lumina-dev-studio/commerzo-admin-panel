import {
    
    TableCell,
  
    TableRow,
  } from "@/components/ui/table";
 

const OrderDetailTableList = ({item,index}:any) => {
  return (
    <TableRow key={index} className={index % 2 === 1 ? "bg-gray-100 border-none" : " border-none"}>
   <TableCell
              style={{ fontFamily: "var(--font-inter)", padding: "0" }}
              className="p-0 rounded-s-xl"
            >
              <div className="flex items-center gap-5 p-3 rounded-2xl">
                <div>
                  <img
                    className="h-[50px] w-[50px] text-[15px] font-bold bg-gray-900"
                    src={item?.image}
                    alt=""
                  />
                </div>
                <div>
                <p className=" text-[12px] text-gray-500 mb-[2px]" style={{ fontFamily: 'var(--font-inter)' }}>Product name</p>
                <p className="hover:text-blue-500 cursor-pointer  font-bold"style={{ fontFamily: 'var(--font-inter)' }} >{item?.Product}</p>
                </div>
              </div>
            </TableCell>


            <TableCell
      className="text-[13px] font-medium text-gray-600 p-3"
      style={{ fontFamily: "var(--font-inter)" }}
    >
         <div>
                <p className=" text-[12px] text-gray-500  font-normal mb-[2px]" style={{ fontFamily: 'var(--font-inter)' }}>Quantity</p>
                <p className="hover:text-blue-500 cursor-pointer text-gray-900 font-bold"style={{ fontFamily: 'var(--font-inter)' }} >
                    {item?.Quantity}</p>
                </div>
    
    </TableCell>

    <TableCell
      className="text-[13px] font-medium text-gray-600 p-3 text-center"
      style={{ fontFamily: "var(--font-inter)" }}
    >
        <div>
                <p className=" text-[12px] text-gray-500 font-normal  mb-[2px]" style={{ fontFamily: 'var(--font-inter)' }}>Price</p>
                <p className="hover:text-blue-500 cursor-pointer  text-gray-900 font-bold"style={{ fontFamily: 'var(--font-inter)' }} >
                    {item?.Price}</p>
                </div>
    </TableCell>
   
  

   
  
    

  
  
  </TableRow>
  );
};

export default OrderDetailTableList;