"use client";
import {useLoginMutation} from '@/Redux/api/Auth/authApi';
import {storeUserInfo} from '@/Services/Action/auth.service';
import {useRouter} from "next/navigation";
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {FaRegEyeSlash, FaRegEye} from "react-icons/fa";
import {toast} from "sonner"

interface FormData {
    email: string;
    password: string;
    remember: boolean;
}

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginMutation] = useLoginMutation();
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = async (e: FormData) => {
        if (!e?.remember) {
            return toast.error("Please check the point.")

        }
        try {
            const data = await loginMutation({email: e?.email, password: e?.password}).unwrap();
            if (data && data.success === true) {
                toast.success(data?.message);

                storeUserInfo({accessToken: data?.data?.token});
                router.push("/");
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div>
            <div className="max-w-lg mx-auto my-10 p-8 shadow bg-white rounded-2xl">
                <h1 className="text-2xl font-bold text-center" style={{fontFamily: 'var(--font-inter)'}}>
                    Login to account
                </h1>

                <form className="mt-10 mb-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-6">
                        <label htmlFor="email">
                            <p className="font-bold text-[14px] text-slate-700 pb-2"
                               style={{fontFamily: 'var(--font-inter)'}}>
                                Email address <span className="text-red-500 text-bold text-10px">*</span>
                            </p>
                            <input
                                {...register('email', {required: "Email is required"})}
                                style={{fontFamily: 'var(--font-inter)'}}
                                id="email"
                                name="email"
                                type="email"
                                className={`w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter email address"
                            />
                            {errors.email &&
                                <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </label>

                        <label htmlFor="password">
                            <p className="font-bold text-[14px] text-slate-700 pb-2"
                               style={{fontFamily: 'var(--font-inter)'}}>
                                Password <span className="text-red-500 text-bold text-10px">*</span>
                            </p>
                            <div className="relative">
                                <input
                                    {...register('password', {required: "Password is required"})} // Register input with required validation
                                    style={{fontFamily: 'var(--font-inter)'}}
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                    className={`w-full py-3.5 border rounded-xl px-5 text-[14px] text-gray-600 ${errors.password ? 'border-red-500' : 'border-gray-300'}`} // Add error class
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-3 text-gray-500"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <FaRegEye className='text-[20px]'/> :
                                        <FaRegEyeSlash className='text-[20px]'/>}
                                </button>
                            </div>
                            {errors.password &&
                                <p className="text-red-500 text-sm">{errors.password.message}</p>} {/* Error message */}
                        </label>

                        <div className="flex flex-row justify-between">
                            <label htmlFor="remember" className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    {...register('remember')} // Register checkbox
                                    className="w-5 h-5 border-slate-200 focus:bg-indigo-600"
                                />
                                <span className="ml-2 text-[14px] text-gray-600"
                                      style={{fontFamily: 'var(--font-inter)'}}>
                  Keep me signed in
                </span>
                            </label>
                            <div>
                                <a href="#" className="font-normal text-blue-600 text-sm"
                                   style={{fontFamily: 'var(--font-inter)'}}>
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 font-bold text-white text-[14px] bg-blue-500 hover:text-blue-500 hover:bg-white rounded-lg border-blue-500 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center transition-all duration-300"
                            style={{fontFamily: 'var(--font-inter)'}}
                        >
                            <span>Login</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

