"use client"
import { useGetSingleCategoryQuery, useUpdateCategoryMutation } from "@/Redux/api/Product/Category/categoryApi";
import NewCategoryFrom from "../NewCategory/NewCategoryForm";
import { useState } from "react";
import { toast } from "sonner";

const UpdateCategory = ({params}:any) => {

    const [imageFiles, setImageFiles] = useState([]);
    const [categoryName, setCategoryName] = useState('');
   
const id =params?.id;

const {data,isLoading}=useGetSingleCategoryQuery(id)

const [updateCategory]=useUpdateCategoryMutation()


    
if(isLoading){
    return <>Loading...</>
}




const handler = async (e:any) => {
    e.preventDefault();

    const image= imageFiles[imageFiles.length - 1] || data?.data.categoryImage;
    const name= categoryName||data?.data?.categoryName

    const info = { categoryName:name, categoryImage: image };
    console.log(info);

    try {
      const updatedData = await updateCategory({id,data:info}).unwrap();
      if (updatedData && updatedData.success === true) {
        toast.success(updatedData?.message);
      
      }
    } catch (error:any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };


  return (
    <div>
        <h1 className=" text-2xl font-bold my-8 "> Update Category  </h1>
     <NewCategoryFrom data={data?.data} condition='updateCategory'
     
         imageFiles={imageFiles}
         setImageFiles={setImageFiles}
         categoryName={categoryName}
         setCategoryName={setCategoryName}
         handler={handler}
     />
    </div>
  );
};

export default UpdateCategory;