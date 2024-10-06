"use client";

import Productfrom from "@/SharedComponent/ProductFrom/Productfrom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

// Define types for the state and event handlers
interface ProductInfo {
  productName: string;
  productCategory: string;
  gender: string;
  brand: string;
  description: string;
  productSize: string[]; // Add productSize to the interface
  imageFiles: string[]; // Add productSize to the interface
}

const AddProduct = () => {
  const [date, setDate] = useState<Date | null>(null); // Use null for uninitialized date
  const [imageFiles, setImageFiles] = useState<string[]>([]); // State to store image URLs
  const productSize = useSelector((state: any) => state.addProduct.productSize); // Access productSize correctly
  
  console.log(imageFiles)

  // Form submission handler
  const handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (imageFiles.length === 0) {
      return toast.error("Please select at least one image.");
    }
    if (!date) {
      return toast.error("Please select a date.");
    }

    // Gather form values
    const productName = (e.target as HTMLFormElement).productName.value;
    const productCategory = (e.target as HTMLFormElement).productCategory.value;
    const gender = (e.target as HTMLFormElement).gender.value;
    const brand = (e.target as HTMLFormElement).brand.value;
    const description = (e.target as HTMLFormElement).description.value;

    // Compile all product information
    const info: ProductInfo = {
      productName,
      productCategory,
      gender,
      brand,
      productSize,
      description,
      imageFiles
    };

    console.log({ info }); // Consolidate info logging
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold my-8">Add Attribute</h1>
      <Productfrom 
        date={date} 
        setDate={setDate} 
        imageFiles={imageFiles} 
        setImageFiles={setImageFiles}  
        handler={handler} 
        condition="addProduct" 
      />
    </div>
  );
};

export default AddProduct;
