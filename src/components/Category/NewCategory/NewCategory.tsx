"use client"
import NewCategoryFrom from "./NewCategoryForm";
import { useCreateCategoryMutation } from "@/Redux/api/Product/Category/categoryApi"
import { useState } from "react"
import { toast } from "sonner";
const NewCategory = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [createCategory] = useCreateCategoryMutation();

  const handler = async (e:any) => {
    e.preventDefault();

    if (imageFiles.length === 0) {
      return toast.error("Please select at least one image.");
    }

    const info = { categoryName, categoryImage: imageFiles[imageFiles.length - 1] };
    console.log(info);

    try {
      const createdData = await createCategory(info).unwrap();
      if (createdData && createdData.success === true) {
        toast.success(createdData?.message);
        setCategoryName(''); // Clear the category name field
        setImageFiles([]); // Clear the image files
      }
    } catch (error:any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };
  return (
    <div className=" p-5">
        <h1 className=" text-2xl font-bold my-8 "> Add Category  </h1>

        <div className=" w-full ">
        <NewCategoryFrom 
        imageFiles={imageFiles}
         setImageFiles={setImageFiles}
         categoryName={categoryName}
         setCategoryName={setCategoryName}
         handler={handler}

         />
        </div>
     
    </div>
  );
};

export default NewCategory;