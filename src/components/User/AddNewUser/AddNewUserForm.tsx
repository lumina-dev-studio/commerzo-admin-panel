"use client"
import { useState } from "react";
import AddNewUserFormPartOne from "./AddNewUserFormPartOne";
import AddNewUserFormPartTwo from "./AddNewUserFormPartTwo";
import { toast } from "sonner"
import { useCreateUserMutation } from "@/Redux/api/User/userApi";

const AddNewUserForm = () => {
  const [addProduct, setAddProduct] = useState('allow');

  const [role, setRole] = useState('User');
  const [updateProduct, setUpdateProduct] = useState('deny');
  const [deleteProduct, setDeleteProduct] = useState('allow');
  const [applyDiscount, setApplyDiscount] = useState('deny');
  const [createCoupon, setCreateCoupon] = useState('deny');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle the state
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev); // Toggle the state
  };


  const [createUser] = useCreateUserMutation();
  

  const handleSubmit =async (e:any) => {
    e.preventDefault();

    
    const email = e.target.email.value;
    const name = e.target.userName.value;
    const address = e.target.address.value;
    const phoneNumber = e.target.phoneNumber.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
   console.log(name,'name')

    if(password!== confirmPassword){

     
      return toast.error("password and confirmPassword not matched")
    }

    const info={
      name,
      email,
      password,
      confirmPassword,
      address,
      phoneNumber,
      role
    }
    console.log(info)

    
    try {
      const data = await createUser(info).unwrap();
      if (data && data.success === true) {
        toast.success(data?.message);
        //  Clear the form fields
       
        setRole('User');
        e.target.userName.value = '';
        e.target.email.value = '';
        e.target.address.value = '';
        e.target.phoneNumber.value = '';
        e.target.password.value = '';
        e.target.confirmPassword.value = '';
       
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
    
    // Add any further actions needed with the selected values
  };
  return (
    <div>

        <form  onSubmit={handleSubmit} className=" space-y-7">

       <section>
       <AddNewUserFormPartOne togglePasswordVisibility={togglePasswordVisibility}
          toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword}
          role={role}
          setRole={setRole}
         

          />
       </section>

          <section>
          <AddNewUserFormPartTwo
          addProduct={addProduct}
          setAddProduct={setAddProduct}
          updateProduct={updateProduct}
          setUpdateProduct={setUpdateProduct}
          deleteProduct={deleteProduct}
          setDeleteProduct={setDeleteProduct}
          applyDiscount={applyDiscount}
          setApplyDiscount={setApplyDiscount}
          createCoupon={createCoupon}
          setCreateCoupon={setCreateCoupon}



          
          />
          </section>


          <section>
          <button
                  type="submit"
                  className="w-[200px] py-3 font-bold text-white text-[14px] bg-blue-500 hover:text-blue-500 hover:bg-white rounded-xl  border-blue-500 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <span>Save</span>
                </button>

          </section>


        </form>
      
    </div>
  );
};

export default AddNewUserForm;