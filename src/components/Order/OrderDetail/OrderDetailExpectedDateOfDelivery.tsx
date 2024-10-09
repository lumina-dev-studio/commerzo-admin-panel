
import {
    Card,
  
  } from "@/components/ui/card"
  import { BsTruck } from "react-icons/bs";



const OrderDetailExpectedDateOfDelivery = () => {
  return (
    <Card className="p-3 shadow-none border-none">
          <section className="  p-3 space-y-2.5">
      
      <h3 className=" font-bold text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>Expected Date Of Delivery


      </h3>
     
     
      <p className=" text-green-500 font-bold text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>20 Nov 2023


      </p>

      <button
                  className="w-full py-3 font-bold text-blue-500 text-[14px] bg-white hover:text-white hover:bg-blue-500 rounded-lg border-blue-500 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                <BsTruck className=" text-[20px]"/>  <span>Track order</span>
                </button>
     </section>
      
    </Card>
  );
};

export default OrderDetailExpectedDateOfDelivery;