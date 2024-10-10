
import AddProductToggle from './AddProductToggle';
import UpdateProductToggle from './UpdateProductToggle';
import DeleteProductToggle from './DeleteProductToggle';
import ApplyDiscountToggle from './ApplyDiscountToggle';
import CreateCouponToggle from './CreateCouponToggle';

const AddNewUserFormPartTwo = ({addProduct,setAddProduct,updateProduct,setUpdateProduct,deleteProduct,setDeleteProduct,
    applyDiscount,setApplyDiscount,createCoupon,setCreateCoupon
}:any) => {
  // State for each permission type
  

  // Function to handle the submission of selected values
 


  return (
    <div className="grid grid-cols-12 bg-white rounded-xl p-6">
      {/* Left side with title and description */}
      <section className="col-span-5">
        <h3
          className="text-[20px] font-bold"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Permission
        </h3>
        <p
          className="text-[14px] text-gray-500"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Items that the account is allowed to edit
        </p>
      </section>

      {/* Right side with radio buttons */}
      <section className="col-span-7 space-y-5">
        <div className="space-y-4">
         
       
         
               {/* Add Product */}
               <AddProductToggle addProduct={addProduct} setAddProduct={setAddProduct}/>

          {/* Update Product */}

          <UpdateProductToggle updateProduct={updateProduct} setUpdateProduct={setUpdateProduct}/>
        
          

          {/* Delete Product */}
         
         <DeleteProductToggle deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct}/>

          {/* Apply Discount */}
      <ApplyDiscountToggle applyDiscount={applyDiscount} setApplyDiscount={setApplyDiscount}/>
        
           
          {/* Create Coupon */}
         <CreateCouponToggle createCoupon={createCoupon} setCreateCoupon={setCreateCoupon}/>
          
        </div>

     
      </section>
    </div>
  );
};

export default AddNewUserFormPartTwo;
