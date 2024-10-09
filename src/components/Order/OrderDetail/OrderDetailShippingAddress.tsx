import {
    Card,
  
  } from "@/components/ui/card"

const OrderDetailShippingAddress = () => {
  return (
    <Card className="p-3 shadow-none border-none">
          <section className="  p-3 space-y-2.5">
      
      <h3 className=" font-bold text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>Shipping Address


      </h3>
     
     
      <p className=" text-gray-500 font-normal text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>3517 W. Gray St. Utica, Pennsylvania 57867

      </p>
     </section>
      
    </Card>
  );
};

export default OrderDetailShippingAddress;