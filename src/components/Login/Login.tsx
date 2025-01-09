"use client";
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {FaRegEyeSlash, FaRegEye} from "react-icons/fa";
import {toast} from "sonner"
import LogoDark from "@/components/Global/LogoDark";

interface FormData {
    email: string;
    password: string;
    remember: boolean;
}

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = async (e: FormData) => {
        try {
            toast.success("Login successful");
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="w-[90%] max-w-md p-8 shadow bg-white rounded-2xl">
            <LogoDark/>
            <h1 className="text-2xl font-bold mt-4" style={{fontFamily: 'var(--font-inter)'}}>
                Log in
            </h1>
            <p className="text-sm text-gray-600">
                Continue to Commerzo
            </p>
            <form className="mt-10 mb-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-6">
                    <label htmlFor="email">
                        <p className="font-bold text-[14px] text-slate-700 pb-2"
                           style={{fontFamily: 'var(--font-inter)'}}>
                            Email
                        </p>
                        <input
                            {...register('email', {required: "Email is required"})}
                            style={{fontFamily: 'var(--font-inter)'}}
                            id="email"
                            name="email"
                            type="email"
                            className={`w-full py-2 border px-3 rounded-xl text-[14px] text-gray-600 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
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
                                {...register('password', {required: "Password is required"})}
                                style={{fontFamily: 'var(--font-inter)'}}
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                className={`w-full py-2 border rounded-xl px-3 text-[14px] text-gray-600 ${errors.password ? 'border-red-500' : 'border-gray-300'}`} // Add error class
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-2 text-gray-500"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <FaRegEye className='text-[20px]'/> :
                                    <FaRegEyeSlash className='text-[20px]'/>}
                            </button>
                        </div>
                        {errors.password &&
                            <p className="text-red-500 text-sm">{errors.password.message}</p>}
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
                        className="w-full py-3.5 font-bold text-white text-[14px] bg-black hover:text-black hover:bg-white rounded-lg border-black border hover:shadow inline-flex space-x-2 items-center justify-center transition-all duration-300"
                        style={{fontFamily: 'var(--font-inter)'}}
                    >
                        <span>Login</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;

