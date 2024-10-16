"use client";

import Productfrom from "@/SharedComponent/ProductFrom/Productfrom";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
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
    <div className="p-5">
      <h1 className="text-2xl font-bold my-8">Add Product</h1>
      <Productfrom 
        imageFiles={imageFiles} 
        setImageFiles={setImageFiles}  
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register} 
        condition="addProduct" 
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

export default AddProduct;
