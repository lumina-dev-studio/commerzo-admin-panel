import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const AddNewUserFormPartOne = ({toggleConfirmPasswordVisibility,togglePasswordVisibility,showPassword,setShowPassword,showConfirmPassword,setShowConfirmPassword}:any) => {




  return (
    <div className="grid grid-cols-12 bg-white rounded-xl p-6">

      <section className="col-span-5">
        <h3 className=" text-[20px] font-bold" style={{ fontFamily: 'var(--font-inter)' }}>Account</h3>
        <p className=" text-[14px] text-gray-500" style={{ fontFamily: 'var(--font-inter)' }}>Fill in the information below to add a new account</p>
      </section>


      <section className="col-span-7 space-y-5">
         <div className="flex flex-col space-y-7">
           
             
              <section>
                <label htmlFor="name">
                  <p className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                   Name
                  
                  </p>
                  <input
                    
                    style={{ fontFamily: 'var(--font-inter)' }}
                    id="name"
                    name="name"
                    type="text"
                    className={`w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600 `} // Error handling
                    placeholder="User name"
                    required
                  />
                 
                </label>
              </section>
            </div>


              <div>

            
            <label htmlFor="email">
              <p className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                Email address 
              </p>
              <input
            
                id="email"
                name="email"
                type="email"
                className={`w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600 `} // Error handling
                placeholder="Email"
                required
              />
           
            </label>
            </div>


            <div>

          

            <label htmlFor="password">
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
           
            </label>
            </div>

            <div>

        

            <label htmlFor="confirmPassword">
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
             
            </label>
            </div>
      </section>
    </div>
  );
};

export default AddNewUserFormPartOne;