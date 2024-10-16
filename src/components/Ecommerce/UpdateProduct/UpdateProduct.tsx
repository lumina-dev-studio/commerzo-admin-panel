"use client"


import Productfrom from "@/SharedComponent/ProductFrom/Productfrom";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { toast } from "sonner"

const UpadteProduct = () => {
  const [isTaxCharged, setIsTaxCharged] = useState(false); // State for checkbox
  const [status, setStatus] = useState(""); // State to hold the selected value
  const [weightSize, setWeightSize] = useState("kg"); // State to hold the selected value
  const [themeTemplate, setThemeTemplate] = useState(""); // State to hold the selected value
  const [description, setDescription] = useState("");
  const [imageFiles, setImageFiles] = useState<string[]>([]); // State to store image URLs
  const [variantData, setVariantData] = useState<any[]>([]);
  const [price, setPrice] = useState(0);
  const [compareAtPrice, setCompareAtPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [profit, setProfit] = useState(0);
  const [margin, setMargin] = useState(0);
  

  const productData = {
    "collections":"ad",
    "compareAtPrice":2,
    "weight":"80",
    "weightSize":"kg",
    "cost":1,
    "margin":90,
    "price":10,
    "profit":9,
    "tags":"ad",
    "status":"Active",
    "tax":true,
    "title":"T-shart",
    "variant":[
    
        {
            "optionName":"Polo t-shirt",
            "optionValues":[
    
                {
                    "available":"1",
                    "image":"blob:http://localhost:3000/56e64039-bd49-48ba-bc41-26e85c39b3b8",
                    "price":"22",
                    "value":"xl"
    
    
                },
                {
                    "available":"1",
                    "image":"blob:http://localhost:3000/ad0b56fd-1cf9-4253-90d9-df17100b191b",
                    "price":"33",
                    "value":"xxl"
    
    
                }
    
    
            ]
    
        },
        {
            "optionName":"helf-t-shirt",
            "optionValues":[
    
                {
                    "available":"1",
                    "image":"blob:http://localhost:3000/56e64039-bd49-48ba-bc41-26e85c39b3b8",
                    "price":"22",
                    "value":"xl"
    
    
                },
                {
                    "available":"1",
                    "image":"blob:http://localhost:3000/ad0b56fd-1cf9-4253-90d9-df17100b191b",
                    "price":"33",
                    "value":"xxl"
    
    
                }
    
    
            ]
    
        }
 
    ]
   
    }
  
 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => {
  
      data.variant=variantData
      data.price=price
      data.compareAtPrice=compareAtPrice
      data.cost=cost
      data.profit=profit
      data.margin=margin
      data.tax=isTaxCharged
      data.weightSize=weightSize
      data.status=status
      
      console.log(data,'jj')
    
    };
      
           


  return (
    <div className=" p-5">
        <h1 className=" text-2xl font-bold my-8 ">Update Attribute
        </h1>
  
    
      <Productfrom
      productData={productData}
        imageFiles={imageFiles} 
        setImageFiles={setImageFiles}  
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register} 
        condition="updateProduct" 
        description={description} // Pass the description
        setDescription={setDescription} // Pass the state update function
        status={status}
        setStatus={setStatus}
        themeTemplate={themeTemplate}
        setThemeTemplate={setThemeTemplate}
        isTaxCharged={isTaxCharged }
        setIsTaxCharged={setIsTaxCharged}
        weightSize={weightSize}
        setWeightSize={setWeightSize}
        variantData={variantData}
        setVariantData={setVariantData}

        price={price}
        setPrice={setPrice}
        compareAtPrice={compareAtPrice}
        setCompareAtPrice={setCompareAtPrice}
        cost={cost}
        setCost={setCost}
        profit={profit}
        setProfit={setProfit}
        margin={margin}
        setMargin={setMargin}
      
      />

      
   
    </div>
  );
};

export default UpadteProduct;