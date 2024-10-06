"use client"


import Productfrom from "@/SharedComponent/ProductFrom/Productfrom";
import { useState } from "react";
import { useSelector } from "react-redux";

import { toast } from "sonner"

const UpadteProduct = () => {
  const [date, setDate] = useState<Date>();
  const [imageFiles, setImageFiles] = useState<string[]>([]); // State to store image URLs
  const productSize = useSelector((state: any) => state.addProduct.productSize); // Access productSize correctly
  

  const productData = {
    brand: "Product",
    date: new Date("Mon Oct 28 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)"),
    description: "zxczxz",
    gender: "Female",
    imageUrl:["https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    productCategory: "Product",
    productName: "csacf",
    productSize: ["EU-40"]
  };
  
 
  



  const handler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); 

    
      if(!date){

          return toast.error("select the Date")
      }


      
      const productName = (e?.target as HTMLFormElement)?.productName?.value;
      const productCategory = (e?.target as HTMLFormElement)?.productCategory?.value;
      const gender = (e?.target as HTMLFormElement)?.gender?.value;
      const brand = (e?.target as HTMLFormElement)?.brand?.value;
      const description = (e?.target as HTMLFormElement)?.description?.value;
     
      let info:any={}

       info.productName=productName;
       info.productCategory=productCategory;
       info.gender=gender;
       info.brand=brand;
       info.bradescriptionnd=description;
       info.productSize=productSize;
       info.date=date;
          

       if(imageFiles.length===0){
        info.imageFiles=productData?.imageUrl
       }
       else{
        info.imageFiles=imageFiles
       }

       console.log(info)

    }

           


  return (
    <div className=" p-5">
        <h1 className=" text-2xl font-bold my-8 ">Update Attribute
        </h1>
  
    
      <Productfrom date={date} setDate={setDate} imageFiles={imageFiles} setImageFiles={setImageFiles} handler={handler} condition="updateProduct" productData={productData} />
   
    </div>
  );
};

export default UpadteProduct;