
  import {
    Card,
  
  } from "@/components/ui/card"

const OrderDetailCartTotals = () => {
  return (
    <Card className="p-5 shadow-none border-none">
               <section className=" grid grid-cols-2  bg-gray-100 rounded-xl p-3">
            
            <h3 className=" font-bold text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>Cart Totals
            </h3>
            <h3 className=" font-bold text-[14px] text-center" style={{ fontFamily: 'var(--font-inter)' }}>Price
            </h3>

           
        </section>

        <section >
        <div className=" grid grid-cols-2  p-4">
            
            <p className=" text-gray-500 font-normal text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>Subtotal:
            </p>
            <p className=" font-bold text-[14px]  text-center" style={{ fontFamily: 'var(--font-inter)' }}>
            $70.13
            </p>

            </div>

        <hr className=" ms-3 me-3" />
        </section>
        <section >
               <div className=" grid grid-cols-2  p-4">
            
            <p className=" text-gray-500 font-normal text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>Shipping:
            </p>
            <p className=" font-bold text-[14px]  text-center" style={{ fontFamily: 'var(--font-inter)' }}>
            $10.00

            </p>
            </div>

         <hr className=" ms-3 me-3" />
        </section>


               <section >
            
           <div className=" grid grid-cols-2  p-4">
           <p className=" text-gray-500 font-normal text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>Tax (GST):
            </p>
            <p className=" font-bold text-[14px]  text-center" style={{ fontFamily: 'var(--font-inter)' }}>
           
           $5.00
            </p>
           </div>

           <hr className=" ms-3 me-3" />
        </section>

             

               <section className=" grid grid-cols-2  p-4">

            <p className=" text-gray-900 font-bold text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>Total price:
            </p>
            <p className=" font-bold text-[14px] text-red-500 text-center" style={{ fontFamily: 'var(--font-inter)' }}>
           
            $90.58

            </p>
            </section>

          
       
        
      
    </Card>
  );
};

export default OrderDetailCartTotals;