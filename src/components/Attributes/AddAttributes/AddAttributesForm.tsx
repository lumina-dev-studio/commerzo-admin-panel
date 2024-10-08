"use client"

import {
  Card,
  CardContent,
 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const AddAttributesForm = () => {



    const handler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
    
      // Gather form values
      const attributeName = (e.target as HTMLFormElement).attributeName.value;
      const attributeValue = (e.target as HTMLFormElement).attributeValue.value;
     
        const info={attributeName,attributeValue,}
        console.log(info)
      

       }
  
  return (
    <form onSubmit={handler}>

    <Card className="w-full shadow-none  pt-7 ">

<CardContent className=" space-y-10">
<section className="grid grid-cols-12 items-center">

      <div className="col-span-3">
      <Label htmlFor="name" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>  Attribute name
      <span className="text-red-500 text-bold text-10px">*</span></Label>
      </div>
   <div className="col-span-9">
   <Input id="name" placeholder="Attribute name" maxLength={20} className=" p-6 rounded-xl" style={{ fontFamily: 'var(--font-inter)' }} required name="attributeName" />
   </div>
        
     
    </section>
<section className="grid grid-cols-12 items-center">

      <div className="col-span-3">
      <Label htmlFor="name" className="font-bold text-[14px] text-slate-700 pb-2" style={{ fontFamily: 'var(--font-inter)' }}>  Attribute value
      <span className="text-red-500 text-bold text-10px">*</span></Label>
      </div>
   <div className="col-span-9">
   <Input id="name" placeholder="Attribute value" maxLength={20} className=" p-6 rounded-xl" style={{ fontFamily: 'var(--font-inter)' }} required name="attributeValue" />
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
  );
};

export default AddAttributesForm;