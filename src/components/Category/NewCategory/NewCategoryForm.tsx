"use client"
import ImageUploader from "@/components/ImageUploader/ImageUploader"
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
import { useState } from "react"
import { toast } from "sonner";

const NewCategoryFrom = () => {

  const [imageFiles,setImageFiles]=useState([]);


  const handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (imageFiles.length === 0) {
      return toast.error("Please select at least one image.");
    }
  
    // Gather form values
    const categoryName = (e.target as HTMLFormElement).categoryName.value;
    const categoryIcon = (e.target as HTMLFormElement).categoryIcon.value;
   
      const info={categoryName,categoryIcon,categoryImage:imageFiles[imageFiles.length -1]}
      console.log(info)
  
     }

  
  return (
    <div >

   
        <form onSubmit={handler}>

        <Card className="w-full shadow-none  pt-7 ">
    
    <CardContent className=" space-y-10">
    <section className="grid grid-cols-12 items-center">

          <div className="col-span-3">
          <Label htmlFor="name" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>  Category Name
          <span className="text-red-500 text-bold text-10px">*</span></Label>
          </div>
       <div className="col-span-9">
       <Input id="name" placeholder="Category name" maxLength={20} className=" p-6 rounded-xl" style={{ fontFamily: 'var(--font-inter)' }} required name="categoryName" />
       </div>
            
         
        </section>

        <section className="grid grid-cols-12 items-center">
        <div className="col-span-3">
       <Label htmlFor="framework" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>Upload images 
       <span className="text-red-500 text-bold text-10px">*</span> </Label>
       </div>

       <div className="col-span-9">
        <ImageUploader setImageFiles={setImageFiles} condition="NewCategory"/>
       </div>
        </section>

        <section className="grid grid-cols-12 items-center">
        <div className="col-span-3">
       <Label htmlFor="framework" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>Select category icon
       <span className="text-red-500 text-bold text-10px">*</span> </Label>
       </div>

       <div className="col-span-9">
       <Select required name="categoryIcon" >
              <SelectTrigger id="framework" className=" p-6 rounded-xl">
                <SelectValue placeholder="Select Icon" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="Icon 1">Icon 1</SelectItem>
                <SelectItem value="Icon 2">Icon 2</SelectItem>
                
              </SelectContent>
            </Select>
       </div>
        </section>

      
        <section className="grid grid-cols-12 items-center">
        <div className="col-span-3">

              </div>
              <div className="col-span-9">
              <button
                  type="submit"
                  className="w-[200px] py-3.5 font-bold text-white text-[14px] bg-blue-500 hover:text-blue-500 hover:bg-white rounded-xl border-blue-500 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <span>Save</span>
                </button>
              </div>
              </section>
         

          </CardContent>
   
   </Card>

        </form>
    </div>
  );
};

export default NewCategoryFrom;