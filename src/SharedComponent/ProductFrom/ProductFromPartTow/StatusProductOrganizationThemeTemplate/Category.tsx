import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreateCategoryMutation, useGetAllCategoryQuery } from "@/Redux/api/Product/Category/categoryApi";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
 
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import NewCategoryFrom from "@/components/Category/NewCategory/NewCategoryForm";
import { toast } from "sonner";
import { useState } from "react";


const Category = ({category,setCategory}:any) => {
  const [imageFiles, setImageFiles] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [createCategory] = useCreateCategoryMutation();

    const {data,isLoading}=useGetAllCategoryQuery('');


    if(isLoading){
        return <>Loading...</>
    }
    console.log(data?.data,'daya')

    
  
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
    <div>
      

   
      <Card className="flex flex-col space-y-1.5 p-4 mt-5">
    <Label
      htmlFor="status"
      className="font-bold text-[14px] text-slate-700 pb-2"
      style={{ fontFamily: "var(--font-inter)" }}
    >
   Category
    </Label>
  <div className=" space-y-5">
  <Select
      name="productStatus"
      value={category}
      onValueChange={(value) => setCategory(value)} // Update state on selection
    >
      <SelectTrigger id="status" className="p-6 rounded-xl">
        <SelectValue placeholder="Select status" />
      </SelectTrigger>
      <SelectContent position="popper">

        {data?.data?.map((a:any)=>  <SelectItem value={a?.categoryName} className="hover:bg-blue-500 hover:text-white">
        {a?.categoryName}
        </SelectItem> )}
       
       
      </SelectContent>
    </Select>

    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
       
        </DialogHeader>
        <div className="grid gap-4 py-4">
         <NewCategoryFrom
           imageFiles={imageFiles}
           setImageFiles={setImageFiles}
           categoryName={categoryName}
           setCategoryName={setCategoryName}
           handler={handler}/>
        </div>
        
      </DialogContent>
    </Dialog>
  </div>
  </Card>
    
    </div>
  );
};

export default Category;