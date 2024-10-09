

const OrderTrackingPartOne = () => {
  return (

    <div className=" p-5">
        <h1 className=" text-2xl font-bold my-8 "> Order Tracking </h1>
    
    <div className="p-6 bg-white shadow-lg rounded-xl w-full flex items-center space-x-6">

        
      {/* Product Image */}
      <div className="w-1/3">
        <img
          src="https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Product Image"
          className="w-[300px] h-[350px] rounded-lg object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="w-2/3">
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-inter)' }}>Pouch Pocket Hoodie Orange</h3>
        
        <section  className=" grid grid-cols-12 px-1 py-1.5 mt-3" >
    
      
     <p className=" text-gray-500 font-normal text-[14px] col-span-2" style={{ fontFamily: 'var(--font-inter)' }}>Order ID
      </p>
      <p className=" font-bold text-[14px]  col-span-10 " style={{ fontFamily: 'var(--font-inter)' }}>
     
     #192847
      </p>
     
     
     </section>
    
     <section  className=" grid grid-cols-12 px-1 py-1.5" >
    
      
     <p className=" text-gray-500 font-normal text-[14px] col-span-2"  style={{ fontFamily: 'var(--font-inter)' }}>Brand
      </p>
      <p className=" font-bold text-[14px]   col-span-10 " style={{ fontFamily: 'var(--font-inter)' }}>
      20 Nov 2023</p>
     
     
     </section>
    
     <section  className=" grid grid-cols-12 px-1 py-1.5" >
    
      
      <p className=" text-gray-500 font-normal text-[14px] col-span-2" style={{ fontFamily: 'var(--font-inter)' }}>Order Placed:

      </p>
      <p className=" font-bold text-[14px]   col-span-10 " style={{ fontFamily: 'var(--font-inter)' }}>
     
      20 Nov 2023
      </p>
     
     
     </section>
    
     <section  className=" grid grid-cols-12 px-1 py-1.5" >
    
      
      <p className=" text-gray-500 font-normal text-[14px] col-span-2" style={{ fontFamily: 'var(--font-inter)' }}>Quantity

      </p>
      <p className=" font-bold text-[14px]   col-span-10 " style={{ fontFamily: 'var(--font-inter)' }}>
     
      1
      </p>
     
     
     </section>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-3">
          <button className="py-3 w-[220px]  font-bold text-blue-500 text-[14px] bg-white hover:text-white hover:bg-blue-500 rounded-xl border-blue-500 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center" style={{ fontFamily: 'var(--font-inter)' }}>
            View shop
          </button>
          <button className="w-[220px] py-3 font-bold text-white text-[14px] bg-blue-500 hover:text-blue-500 hover:bg-white rounded-xl border-blue-500 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center" style={{ fontFamily: 'var(--font-inter)' }}>
            View product
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderTrackingPartOne;
