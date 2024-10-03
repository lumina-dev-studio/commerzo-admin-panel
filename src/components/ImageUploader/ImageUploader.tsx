


import React, { useRef, useState } from 'react';

const ImageUploader = ({seImageUrl}:any) => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageFiles, setImageFiles] = useState<string[]>([]); // State to store image URLs

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dropzoneRef.current) {
      dropzoneRef.current.classList.add('border-indigo-600');
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dropzoneRef.current) {
      dropzoneRef.current.classList.remove('border-indigo-600');
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dropzoneRef.current) {
      dropzoneRef.current.classList.remove('border-indigo-600');
    }
    const files = Array.from(e.dataTransfer.files);
    files.forEach(file => displayPreview(file));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(file => displayPreview(file));
  };

  const displayPreview = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageUrl = reader.result as string; // Get the Data URL
      setImageFiles(prev => [...prev, imageUrl]); // Add the new image URL to the state

      console.log(file,'tonu')
      seImageUrl(file)
      // uploadImageToImgBB(file); // Upload image to ImgBB
    };
  };

  // const uploadImageToImgBB = async (file: File) => {
  //   const API_KEY = '845d37363c94039539d29bc974c2c0fc'; // Replace with your ImgBB API key
  //   const url = 'https://api.imgbb.com/1/upload';

  //   const formData = new FormData();
  //   formData.append('image', file);

  //   try {
  //     const response = await fetch(`${url}?key=${API_KEY}`, {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     const data = await response.json();
  //     if (data.success) {
  //       console.log('Uploaded Image URL:', data.data.url);
  //       
  //       // You can also save the uploaded image URL in state if needed
  //     } else {
  //       console.error('Upload failed:', data.error);
  //     }
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };

  return (
    <div>
      <div
        className="w-full h-full relative border-2 border-gray-300 border-dashed rounded-lg py-6 px-3"
        id="dropzone"
        ref={dropzoneRef}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 z-50"
          ref={inputRef}
          onChange={handleInputChange}
          multiple // Allow multiple file uploads
        />
        <div className="text-center">
          {/* <img
            className="mx-auto h-12 w-12"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            
            alt="Upload Icon"
          /> */}
          <img
                className="mx-auto h-[70px] w-[70px]"
                src="/ImageUploader/Fotolia_128673803_Subscription_Monthly_M-removebg-preview.png"
                alt="Upload Icon"
               />

          <h3 className=" text-sm font-medium text-gray-900">
            <label htmlFor="file-upload" className="relative cursor-pointer">
                <p className=' text-gray-400 text-[13px]'  style={{ fontFamily: 'var(--font-inter)' }}> Drop your images here or select <span className=' text-blue-500'>click to browse</span></p>
           
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                ref={inputRef}
                onChange={handleInputChange}
                multiple // Allow multiple file uploads
              />
            </label>
          </h3>
         
        </div>
      </div>

     
    </div>
  );
};

export default ImageUploader;
