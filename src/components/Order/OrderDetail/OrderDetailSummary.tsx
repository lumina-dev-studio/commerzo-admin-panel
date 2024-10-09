import {
    Card,
  
  } from "@/components/ui/card"
     const OrderDetailSummary = () => {
       return (
         <Card className="p-3 shadow-none border-none">
         <section className="  p-3">
      
      <h3 className=" font-bold text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>Summary

      </h3>
     
     
     
     </section>
     
    
     <section  className=" grid grid-cols-12 px-4 py-1.5" >
    
      
     <p className=" text-gray-500 font-normal text-[14px] col-span-3" style={{ fontFamily: 'var(--font-inter)' }}>Order ID
      </p>
      <p className=" font-bold text-[14px]  col-span-9 " style={{ fontFamily: 'var(--font-inter)' }}>
     
     #192847
      </p>
     
     
     </section>
    
     <section  className=" grid grid-cols-12 px-4 py-1.5" >
    
      
     <p className=" text-gray-500 font-normal text-[14px] col-span-3"  style={{ fontFamily: 'var(--font-inter)' }}>Date
      </p>
      <p className=" font-bold text-[14px]   col-span-9 " style={{ fontFamily: 'var(--font-inter)' }}>
      20 Nov 2023</p>
     
     
     </section>
    
     <section  className=" grid grid-cols-12 px-4 py-1.5" >
    
      
      <p className=" text-gray-500 font-normal text-[14px] col-span-3" style={{ fontFamily: 'var(--font-inter)' }}>Total
      </p>
      <p className=" font-bold text-[14px] text-red-500  col-span-9 " style={{ fontFamily: 'var(--font-inter)' }}>
     
      $948.5
      </p>
     
     
     </section>
    
     
     
     
     
     
     </Card>
       );
     };
     
     export default OrderDetailSummary;