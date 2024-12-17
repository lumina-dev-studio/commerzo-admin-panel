'use client'
import ImageUploader from '@/components/ImageUploader/ImageUploader';
import { Button } from '@/components/ui/button';
import { useCreateLogoMutation, useGetLogoQuery } from '@/Redux/api/Theme/StoreTheme/logoApi';
import { useState } from 'react';
import { toast } from 'sonner';

const ImageUpload = () => {
    const { data, isLoading, refetch } = useGetLogoQuery('');

    
    
  const [imageFiles, setImageFiles] = useState<string[]>([]);
   const [updateFunction] = useCreateLogoMutation();

   if(isLoading){
    return <>loading...</>
}

  // Handle image file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageFiles((prevFiles) => [...prevFiles, reader.result as string]);
      };

      if (file) {
        reader.readAsDataURL(file); // Convert file to base64 URL
      }
    }
  };

  const imageHandler=async()=>{

    const info={logoUrl: imageFiles[imageFiles.length-1] }
    try {
      const updateData = await updateFunction(info).unwrap();
      if (updateData && updateData.success === true) {
        toast.success(updateData?.message);
        refetch()

       
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }

  }

  return (
    <div className="flex flex-col items-center h-[50%] w-[50%] mx-auto my-40">
      {imageFiles.length > 0 ? (
        <img
          className="rounded-xl object-cover h-[50%] w-[50%]"
          src={imageFiles[imageFiles.length - 1]}
          alt="Uploaded"
        />
      ) : (
        <img
           className=" rounded-xl object-cover h-[50%] w-[50%]"
          src={data?.data[data?.data?.length-1]?.logoUrl||
            'https://images.pexels.com/photos/27545223/pexels-photo-27545223/free-photo-of-model-in-sweater-lying-on-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt="Default Image"
        />
      )}

<div className='mt-5 '>
                <ImageUploader setImageFiles={setImageFiles} />
                </div>

                <div>
                <Button onClick={imageHandler} variant="outline" className=' w-full mt-5 bg-blue-700 text-white font-bold hover:border-blue-500 
                hover:text-blue-500' >Done</Button>
                </div>
    </div>
  );
};

export default ImageUpload;
