"use client";

import Productfrom from "@/SharedComponent/ProductFrom/Productfrom";
import { useState } from "react";

const AddProduct = () => {
  const [isTaxCharged, setIsTaxCharged] = useState(false); // State for checkbox
  const [status, setStatus] = useState(""); // State to hold the selected value
  const [themeTemplate, setThemeTemplate] = useState(""); // State to hold the selected value
  const [description, setDescription] = useState("");
  const [imageFiles, setImageFiles] = useState<string[]>([]); // State to store image URLs

  // Form submission handler
  const handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget); // Create a FormData object

    // Retrieve form values using FormData API
    const title = formData.get("title")?.toString() || ""; // Ensure it’s a string
    const price = formData.get("price")?.toString() || "";
    const compareAtPrice = formData.get("compareAtPrice")?.toString() || "";
    const cost = formData.get("cost")?.toString() || "";

    console.log({ title, price, compareAtPrice, cost });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold my-8">Add Product</h1>
      <Productfrom 
        imageFiles={imageFiles} 
        setImageFiles={setImageFiles}  
        handler={handler} 
        condition="addProduct" 
        description={description} // Pass the description
        setDescription={setDescription} // Pass the state update function
        status={status}
        setStatus={setStatus}
        themeTemplate={themeTemplate}
        setThemeTemplate={setThemeTemplate}
        isTaxCharged={isTaxCharged }
        setIsTaxCharged={setIsTaxCharged}
      />
    </div>
  );
};

export default AddProduct;
