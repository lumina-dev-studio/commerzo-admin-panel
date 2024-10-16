import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const AddNewUserFormPartOne = ({toggleConfirmPasswordVisibility,togglePasswordVisibility,showPassword,setShowPassword,showConfirmPassword,setShowConfirmPassword,setRole,role,setName}:any) => {




  return (
    <div className="grid grid-cols-12 bg-white rounded-xl p-6">

      <section className="col-span-5">
        <h3 className=" text-[20px] font-bold" style={{ fontFamily: 'var(--font-inter)' }}>Account</h3>
        <p className=" text-[14px] text-gray-500" style={{ fontFamily: 'var(--font-inter)' }}>Fill in the information below to add a new account</p>
      </section>


      <section className="col-span-7 space-y-5">
         <div className="flex flex-col space-y-7">
           
             
              <section>
            
                  <p className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                   Name
                  
                  </p>
                  <input
                    
                    style={{ fontFamily: 'var(--font-inter)' }}
                    id="name"
                    name="name"
                    type="text"
                    onChange={(e)=> setName(e.target.value)}
                    className={`w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600 `} // Error handling
                    placeholder="User name"
                    required
                  />
                 
                
              </section>
            </div>

         

              <div>

            
            
              <p className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                Email 
              </p>
              <input
            
                id="email"
                name="email"
                type="email"
                className={`w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600 `} // Error handling
                placeholder="Email"
                required
              />
           
          
            </div>




            <div className="flex flex-col space-y-7">
           
             
              <section>
                
                  <p className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                  Phone Number
                  
                  </p>
                  <input
                    
                    style={{ fontFamily: 'var(--font-inter)' }}
                    id="name"
                    name="phoneNumber"
                    type="text"
                    className={`w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600 `} // Error handling
                    placeholder="Phone number"
                    required
                  />
                 
            
              </section>
            </div>


            <div className="flex flex-col space-y-7">
           
             
              <section>
              
                  <p className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                  Address
                  </p>
                  <input
                    
                    style={{ fontFamily: 'var(--font-inter)' }}
                    id="address"
                    name="address"
                    type="text"
                    className={`w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600 `} // Error handling
                    placeholder="Address"
                    required
                  />
                 
              
              </section>
            </div>

            <div>
      
                  <p className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                  Role
                  </p>
                  <Select
       
       value={role}
       onValueChange={(value) => setRole(value)} // Update state on selection
     >
       <SelectTrigger  className="p-6 rounded-xl">
         <SelectValue placeholder="Select status" />
       </SelectTrigger>
       <SelectContent position="popper">
         <SelectItem value="Admin" className="hover:bg-blue-500 hover:text-white">
           Admin
         </SelectItem>
         <SelectItem value="User" className="hover:bg-blue-500 hover:text-white">
           User
         </SelectItem>
       </SelectContent>
     </Select>

            </div>
        

            <div>

          

            
              <p className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                Password 
              </p>
              <div className="relative">
                <input
                
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className={`w-full py-3.5 border rounded-xl px-5 text-[14px] text-gray-600 `} // Error handling
                  placeholder="Enter  password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 text-gray-500"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaRegEye className='text-[20px]' /> : <FaRegEyeSlash className='text-[20px]' />}
                </button>
              </div>
           
          
            </div>

            <div>

        

          
              <p className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                Confirm Password 
              </p>
              <div className="relative">
                <input
             
                  style={{ fontFamily: 'var(--font-inter)' }}
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={`w-full py-3.5 border rounded-xl px-5 text-[14px] text-gray-600 `} // Error handling
                  placeholder="Confirm password"
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-3 text-gray-500"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <FaRegEye className='text-[20px]' /> : <FaRegEyeSlash className='text-[20px]' />}
                </button>
              </div>
             
            
            </div>
      </section>
    </div>
  );
};

export default AddNewUserFormPartOne;