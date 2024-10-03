import * as React from "react"


import {
  Card,
  CardContent,
 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"


const AddProductFromPartOne = () => {
  return (
    <div>
       <Card className="w-full shadow-none">
    
    <CardContent>
     
        
        <div className="grid w-full items-center gap-4 my-5  ">
          
        <section>
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>  Product name 
            <span className="text-red-500 text-bold text-10px">*</span></Label>
            <Input id="name" placeholder="Enter product name" maxLength={20} className=" p-6 rounded-xl" style={{ fontFamily: 'var(--font-inter)' }} required name="productName"/>
            <p className=" mt-2"><small className=" text-[12px] text-gray-400" style={{ fontFamily: 'var(--font-inter)' }}>Do not exceed 20 characters when entering the product name.</small></p>
          </div>
        </section>
        <section className=" grid grid-cols-2 gap-5  mt-2">
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>Category <span className="text-red-500 text-bold text-10px">*</span> </Label>
            <Select required name="productCategory">
              <SelectTrigger id="framework" className=" p-6 rounded-xl">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="Shop">Shop</SelectItem>
                <SelectItem value="Product">Product</SelectItem>
                
              </SelectContent>
            </Select>
          </div>
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>Gender  <span className="text-red-500 text-bold text-10px">*</span> </Label>
            <Select required name="gender">
              <SelectTrigger id="framework" className=" p-6 rounded-xl">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female </SelectItem>
                <SelectItem value="Other">Other </SelectItem>
                
              </SelectContent>
            </Select>
          </div>
        </section>

        <section className=" mt-2">
        <Label htmlFor="framework" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>Brand   <span className="text-red-500 text-bold text-10px">*</span> </Label>
            <Select required name="brand">
              <SelectTrigger id="framework" className=" p-6 rounded-xl mt-2">
                <SelectValue placeholder="Select brand " />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="Shob">Shob</SelectItem>
                <SelectItem value="Product">Product </SelectItem>
               
                
              </SelectContent>
            </Select>
        </section>
   
        <section className=" mt-2">

        <Label htmlFor="framework" className="font-bold text-[14px] text-gray-700  " style={{ fontFamily: 'var(--font-inter)' }}>Description    <span className="text-red-500 text-bold text-10px">*</span> </Label>
        <Textarea name="description" required maxLength={100} placeholder=" Description " className=" h-[200px] rounded-xl p-4 mt-2" style={{ fontFamily: 'var(--font-inter)' }} />

        <p className=" mt-2 mb-5">
        <small className=" text-[12px] text-gray-400" style={{ fontFamily: 'var(--font-inter)' }}>Do not exceed 100 characters when entering the product name.</small>
        </p>
        </section>
        
        </div>
     
  
    </CardContent>
   
  </Card>
    </div>
  );
};

export default AddProductFromPartOne;