"use client";

import { useCreateProductMutation } from "@/Redux/api/Product/productApi";
import { getUserInfo } from "@/Services/Action/auth.service";
import Productfrom from "@/SharedComponent/ProductFrom/Productfrom";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


const AddProduct = () => {
  const [isTaxCharged, setIsTaxCharged] = useState(false); // State for checkbox
  const [status, setStatus] = useState(""); // State to hold the selected value
  const [weightSize, setWeightSize] = useState("kg"); // State to hold the selected value
  const [themeTemplate, setThemeTemplate] = useState(""); // State to hold the selected value
  const [description, setDescription] = useState("");
  const [category,setCategory] = useState("");
  const [imageFiles, setImageFiles] = useState<string[]>([]); // State to store image URLs
  const [variantData, setVariantData] = useState<any[]>([]);
  const [price, setPrice] = useState(0);
  const [compareAtPrice, setCompareAtPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [profit, setProfit] = useState(0);
  const [margin, setMargin] = useState(0);

  // -----------------------

  const [variantCount, setVariantCount] = useState(0);
  const [optionValues, setOptionValues] = useState([[""]]);
  const [completedVariants, setCompletedVariants] = useState<boolean[]>([]);
  const [optionNames, setOptionNames] = useState<string[]>([]);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  // -------------------------------
 


  const [createProduct] = useCreateProductMutation();
  const router = useRouter();

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const onSubmit =async (data:any) => {

    if(!description){
      return toast.error('Description is required')
    }
    if(!category){
      return toast.error('Category is required')
    }
    if(imageFiles?.length===0){
      return toast.error('Media Image is required')
    }
    if(!status){
      return toast.error('Status is required')
    }
    if(!themeTemplate){
      return toast.error('Theme Template is required')
    }

    data.mediaImage=imageFiles
    data.variant=variantData
    data.price=Number(price)
    data.compareAtPrice=compareAtPrice
    data.cost=cost
    data.profit=profit
    data.margin=margin
    data.tax=isTaxCharged
    data.weightSize=weightSize
    data.status=status
    data.themeTemplate=themeTemplate
    data.category=category

    
    console.log(data,'jj')



    try {
      const cratedData = await createProduct(data).unwrap();
      if (cratedData && cratedData.success === true) {
        toast.success(cratedData?.message);
       
       
     
        // Clear form and states after submission
        reset(); // Reset form values
        setImageFiles([]);
        setVariantData([]);
        setPrice(0);
        setCompareAtPrice(0);
        setCost(0);
        setProfit(0);
        setMargin(0);
        setIsTaxCharged(false);
        setStatus("");
        setWeightSize("kg");
        setThemeTemplate("");
        setDescription("");

        setCategory("")

        // Reset variant-related states
        setVariantCount(0);
        setOptionValues([[""]]);
        setCompletedVariants([]);
        setOptionNames([]);
        setSelectedVariant(null);
       
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  
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



        variantCount={variantCount} setVariantCount={setVariantCount}
       optionValues={optionValues} setOptionValues={setOptionValues}
       completedVariants={completedVariants} setCompletedVariants={setCompletedVariants}
       optionNames={optionNames} setOptionNames={setOptionNames}
       selectedVariant={selectedVariant} setSelectedVariant={setSelectedVariant}
       
       category={category} setCategory={setCategory}
      />
    </div>
  );
};

export default AddProduct;
