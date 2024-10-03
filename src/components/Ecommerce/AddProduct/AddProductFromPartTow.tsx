
'use client'

import {
  Card,
  CardContent,

} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




 

import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

import ImageUploader from "@/components/ImageUploader/ImageUploader"


const AddProductFromPartTow = ({seImageUrl,date,setDate}:any) => {
    

    const data=["EU - 38.5",'EU - 39','EU - 40','EU - 41.5','EU - 42','EU - 43']
  return (
    <div>
       <Card className="w-full shadow-none">
    
    <CardContent>
     
        
        <div className="grid w-full items-center gap-4 mt-5 mb-2 ">
          
        <section>
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>  Upload images

            </Label>
              <div className=" grid grid-cols-3 gap-3">
                <div className=" bg-white h-[200px] border rounded-xl">
                  <img className=" w-full h-full rounded-xl" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className=" bg-white h-[200px] border rounded-xl">
                  <img className=" w-full h-full rounded-xl" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
             <ImageUploader seImageUrl={seImageUrl}/>
              </div>

           
          </div>
          <p className=" mt-5 text-[14px] text-gray-500 " style={{ fontFamily: 'var(--font-inter)' }}>Do not You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions. Notice that the product shows all the details</p>
        </section>


        <section className=" grid grid-cols-2 gap-5  mt-2">
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>Add size</Label>
            <Select required name="productSize">
              <SelectTrigger id="framework" className=" p-6 rounded-xl">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="EU-44">EU-44</SelectItem>
                <SelectItem value="EU-40">EU-40</SelectItem>
                <SelectItem value="EU-50">EU-50</SelectItem>
                
                
              </SelectContent>
            </Select>
          </div>
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>Product date
             </Label>
            <Popover>
      <PopoverTrigger asChild >
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal p-6 rounded-xl",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <Select required
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
          </div>
        </section>

        <section className="mt-2">
  <div className="grid grid-cols-2">
    <div className="grid grid-cols-3 gap-2"> {/* Changed grid-col-3 to grid-cols-3 for correct Tailwind CSS syntax */}
      {data?.map((item, index) => (
        <div key={index} className="h-[60px] py-5 text-[14px] px-3.5 border rounded-xl flex items-center justify-center border-opacity-0" style={{ fontFamily: 'var(--font-inter)' }}> {/* Added key prop for unique identification */}
          {item}
        </div>
      ))}
    </div>
  </div>
</section>

   
        <section className=" mt-2 grid grid-cols-3 gap-3">

        <div>
        <button
              type="submit" // Change button to submit
              className="w-full py-3 font-bold text-white text-[14px] bg-blue-500 hover:text-blue-500 hover:bg-white rounded-lg border-blue-500 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <span>Add product</span>
            </button>
        </div>
        <div>
        <button
            
              className="w-full py-3 font-bold text-blue-500 text-[14px] bg-white hover:text-white hover:bg-blue-500 rounded-lg border-blue-500 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <span>Save Product</span>
            </button>
        </div>
        <div>
        <button
              
              className="w-full py-3 font-bold text-gray-500 text-[14px] bg-gray-50 hover:text-white hover:bg-blue-500 rounded-lg border-gray-200 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <span>Schedule</span>
            </button>
        </div>
        </section>
        
        </div>
     
  
    </CardContent>
   
  </Card>
    </div>
  );
};

export default AddProductFromPartTow;