
// import React, { useRef } from 'react';

// const ImageUploader = ({ oldImages, setImageFiles, condition }: any) => {
//   const dropzoneRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);
//   console.log(oldImages, 'old');

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     dropzoneRef.current?.classList.add('border-indigo-600');
//   };

//   const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     dropzoneRef.current?.classList.remove('border-indigo-600');
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     dropzoneRef.current?.classList.remove('border-indigo-600');
//     const files = Array.from(e.dataTransfer.files);
//     uploadImages(files);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
//     uploadImages(files);
//   };

//   const uploadImages = async (files: File[]) => {
//     const image_hosting_url = `https://api.imgbb.com/1/upload?key=8460cd1a14bf680b3bf68fe6e9950c8d`;

//     // Create an array of promises for each image upload
//     const uploadPromises = files.map(async (file) => {
//       const formData = new FormData();
//       formData.append('image', file);

//       const response = await fetch(image_hosting_url, {
//         method: 'POST',
//         body: formData,
//       });

//       const imageResponse = await response.json();

//       // Check if the image upload was successful
//       if (imageResponse.success) {
//         return imageResponse.data.display_url; // Return the image URL
//       } else {
//         throw new Error(`Image upload failed: ${imageResponse.message || 'Unknown error'}`);
//       }
//     });

//     try {
//       const imageUrls = await Promise.all(uploadPromises); // Wait for all uploads
//       setImageFiles((prev: string[]) => [...prev, ...imageUrls]); // Update state with new image URLs
//       console.log(imageUrls, 'Uploaded images');
//     } catch (error) {
//       console.error('Error uploading images:', error);
//     }
//   };

//   return (
//     <div>
//       <div
//         className={`${condition === 'NewCategory' ? 'p-20 border-blue-300 rounded-xl' : 'py-6 px-3 border-gray-300 rounded-lg'} w-full h-full relative border-2  border-dashed`}
//         id="dropzone"
//         ref={dropzoneRef}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//       >
//         <input
//           type="file"
//           className="absolute inset-0 w-full h-full opacity-0 z-50"
//           ref={inputRef}
//           onChange={handleInputChange}
//           multiple // Allow multiple file uploads
//         />
//         <div className="text-center w-full">
//           <img
//             className="mx-auto h-[70px] w-[70px]"
//             src="/ImageUploader/Fotolia_128673803_Subscription_Monthly_M-removebg-preview.png"
//             alt="Upload Icon"
//           />
//           <h3 className="text-sm font-medium text-gray-900">
//             <label htmlFor="file-upload" className="relative cursor-pointer">
//               <p className="text-gray-400 text-[13px]" style={{ fontFamily: 'var(--font-inter)' }}>
//                 Drop your images here or <span className="text-blue-500">click to browse</span>
//               </p>
//               <input
//                 id="file-upload"
//                 name="file-upload"
//                 type="file"
//                 className="sr-only"
//                 ref={inputRef}
//                 onChange={handleInputChange}
//                 multiple
//               />
//             </label>
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageUploader;








import React, { useRef } from 'react';
import imageCompression from 'browser-image-compression';

const ImageUploader = ({ oldImages, setImageFiles, condition }: any) => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropzoneRef.current?.classList.add('border-indigo-600');
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropzoneRef.current?.classList.remove('border-indigo-600');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropzoneRef.current?.classList.remove('border-indigo-600');
    const files = Array.from(e.dataTransfer.files);
    compressAndResizeImages(files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    compressAndResizeImages(files);
  };

  const compressAndResizeImages = async (files: File[]) => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=8460cd1a14bf680b3bf68fe6e9950c8d`;

    const uploadPromises = files.map(async (file) => {
      const options = {
        maxSizeMB: 1,          // Compress to a maximum of 1MB
        useWebWorker: true,
      };

      try {
        // Compress image without specific dimensions first
        const compressedFile = await imageCompression(file, options);

        // Create an exact 1200x800 canvas and draw the compressed image onto it
        const image = await createImageBitmap(compressedFile);
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 800;

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(image, 0, 0, 1200, 800);
        } else {
          throw new Error("Canvas context not available.");
        }

        // Convert canvas back to a blob
        const resizedBlob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Canvas to Blob conversion failed."));
            }
          }, 'image/jpeg', 0.8); // Adjust quality as needed
        });

        const formData = new FormData();
        formData.append('image', resizedBlob);

        const response = await fetch(image_hosting_url, {
          method: 'POST',
          body: formData,
        });

        const imageResponse = await response.json();

        if (imageResponse.success) {
          return imageResponse.data.display_url;
        } else {
          throw new Error(`Image upload failed: ${imageResponse.message || 'Unknown error'}`);
        }
      } catch (error) {
        console.error("Error compressing or uploading the image:", error);
      }
    });

    try {
      const imageUrls = await Promise.all(uploadPromises);
      setImageFiles((prev: string[]) => [...prev, ...imageUrls.filter(Boolean)]);
      console.log(imageUrls, 'Uploaded images');
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div>
      <div
        className={`${condition === 'NewCategory' ? 'p-20 border-blue-300 rounded-xl' : 'py-6 px-3 border-gray-300 rounded-lg'} w-full h-full relative border-2 border-dashed`}
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
          multiple
        />
        <div className="text-center w-full">
          <img
            className="mx-auto h-[70px] w-[70px]"
            src="/ImageUploader/Fotolia_128673803_Subscription_Monthly_M-removebg-preview.png"
            alt="Upload Icon"
          />
          <h3 className="text-sm font-medium text-gray-900">
            <label htmlFor="file-upload" className="relative cursor-pointer">
              <p className="text-gray-400 text-[13px]" style={{ fontFamily: 'var(--font-inter)' }}>
                Drop your images here or <span className="text-blue-500">click to browse</span>
              </p>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                ref={inputRef}
                onChange={handleInputChange}
                multiple
              />
            </label>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;

