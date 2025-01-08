"use client";
import Link from 'next/link';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {FaRegEyeSlash, FaRegEye} from "react-icons/fa";
import {toast} from "sonner"

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    remember: boolean;
}

const Registration: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // Initialize useForm
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    // Handle form submission
    const onSubmit = (data: FormData) => {
        if (!data?.remember) {
            return toast.error("Please check the point.")
        }
        console.log(data); // Here you can handle login logic
    };
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev); // Toggle the state
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev); // Toggle the state
    };

    return (
        <div>
            <div className="max-w-lg mx-auto my-10 p-8 shadow bg-white rounded-2xl">
                <h1 className="text-2xl font-bold" style={{fontFamily: 'var(--font-inter)'}}>
                    Create your account
                </h1>
                <p className="my-1 text-sm text-gray-600" style={{fontFamily: 'var(--font-inter)'}}>
                    Enter your personal details to create account
                </p>

                <form className="my-10" onSubmit={handleSubmit(onSubmit)}> {/* Add handleSubmit */}
                    <div className="flex flex-col space-y-7">
                        <div className='flex gap-5'>
                            <section>
                                <label htmlFor="firstName">
                                    <p className="font-bold text-[14px] text-slate-700 pb-2"
                                       style={{fontFamily: 'var(--font-inter)'}}>
                                        Your First Name
                                        <span className="text-red-500 text-bold text-10px">*</span>
                                    </p>
                                    <input
                                        {...register('firstName', {required: "First name is required"})} // Register input with required validation
                                        style={{fontFamily: 'var(--font-inter)'}}
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        className={`w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} // Error handling
                                        placeholder="First Name"
                                    />
                                    {errors.firstName &&
                                        <p className="text-red-500 text-sm">{errors.firstName.message}</p>} {/* Error message */}
                                </label>
                            </section>

                            <section>
                                <label htmlFor="lastName">
                                    <p className="font-bold text-[14px] text-slate-700 pb-2"
                                       style={{fontFamily: 'var(--font-inter)'}}>
                                        Your Last Name
                                        <span className="text-red-500 text-bold text-10px">*</span>
                                    </p>
                                    <input
                                        {...register('lastName', {required: "Last name is required"})} // Register input with required validation
                                        style={{fontFamily: 'var(--font-inter)'}}
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        className={`w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`} // Error handling
                                        placeholder="Last Name"
                                    />
                                    {errors.lastName &&
                                        <p className="text-red-500 text-sm">{errors.lastName.message}</p>} {/* Error message */}
                                </label>
                            </section>
                        </div>

                        <label htmlFor="email">
                            <p className="font-bold text-[14px] text-slate-700 pb-2"
                               style={{fontFamily: 'var(--font-inter)'}}>
                                Email address <span className="text-red-500 text-bold text-10px">*</span>
                            </p>
                            <input
                                {...register('email', {required: "Email is required"})} // Register input with required validation
                                style={{fontFamily: 'var(--font-inter)'}}
                                id="email"
                                name="email"
                                type="email"
                                className={`w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} // Error handling
                                placeholder="Enter email address"
                            />
                            {errors.email &&
                                <p className="text-red-500 text-sm">{errors.email.message}</p>} {/* Error message */}
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
                                    type={showPassword ? 'text' : 'password'}
                                    className={`w-full py-3.5 border rounded-xl px-5 text-[14px] text-gray-600 ${errors.password ? 'border-red-500' : 'border-gray-300'}`} // Error handling
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

                        <label htmlFor="confirmPassword">
                            <p className="font-bold text-[14px] text-slate-700 pb-2"
                               style={{fontFamily: 'var(--font-inter)'}}>
                                Confirm Password <span className="text-red-500 text-bold text-10px">*</span>
                            </p>
                            <div className="relative">
                                <input
                                    {...register('confirmPassword', {required: "Confirm password is required"})} // Register input with required validation
                                    style={{fontFamily: 'var(--font-inter)'}}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className={`w-full py-3.5 border rounded-xl px-5 text-[14px] text-gray-600 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`} // Error handling
                                    placeholder="Confirm your password"
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute right-3 top-3 text-gray-500"
                                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showConfirmPassword ? <FaRegEye className='text-[20px]'/> :
                                        <FaRegEyeSlash className='text-[20px]'/>}
                                </button>
                            </div>
                            {errors.confirmPassword &&
                                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>} {/* Error message */}
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
                  Agree with Privacy Policy
                </span>
                            </label>
                        </div>

                        <button
                            type="submit" // Set button type to submit
                            className="w-full py-3.5 font-bold text-white text-[14px] bg-blue-500 hover:text-blue-500 hover:bg-white rounded-lg border-blue-500 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                            style={{fontFamily: 'var(--font-inter)'}}
                        >
                            <span>Register</span>
                        </button>

                        <p className="text-center text-gray-600 text-[15px]" style={{fontFamily: 'var(--font-inter)'}}>
                            You have an account?
                            <Link href={"/login"}
                                  className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                <span className="text-[15px] text-blue-600 font-normal" style={{fontFamily: 'var(--font-inter)'}}>
                  Login now
                </span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
