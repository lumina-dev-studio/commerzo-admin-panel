'use client';

import ImageUploader from '@/components/ImageUploader/ImageUploader';
import { useGetSingleQuery, useUpdateProfileMutation } from '@/Redux/api/Setting/settingApi';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
 
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from 'sonner';

const UpdateProfile = () => {
  const { data, isLoading, refetch } = useGetSingleQuery('');
  const [imageFiles, setImageFiles] = useState<string[]>([]);

  const [updateFunction] = useUpdateProfileMutation();

  if (isLoading) {
    return <>... loading</>;
  }
console.log(data?.data?.image)
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const name = (e.target as HTMLFormElement).userName.value;
    const address = (e.target as HTMLFormElement).address.value;
    const phoneNumber = (e.target as HTMLFormElement).phoneNumber.value;
    const facebook = (e.target as HTMLFormElement).facebook.value;
    const instagram = (e.target as HTMLFormElement).instagram.value;
    const tiktok = (e.target as HTMLFormElement).tiktok.value;

    const info = {
      email,
      name,
      address,
      phoneNumber,
      facebook,
      tiktok,
      instagram
    };

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

    console.log(info);
    // You can add your API call here to update the user profile
  };
  const imageHandler=async()=>{

    const info={image: imageFiles[imageFiles.length-1] }
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
    <div>
      <form onSubmit={handleSubmit} className="space-y-7">
        <section>
          <div className="grid grid-cols-12 bg-white rounded-xl p-6 gap-10">
            <section className="col-span-5">
              <h3 className="text-[20px] font-bold" style={{ fontFamily: 'var(--font-inter)' }}>
                Account
              </h3>
              <p className="text-[14px] text-gray-500" style={{ fontFamily: 'var(--font-inter)' }}>
                Fill in the information below to update your account
              </p>

              
               <div className=' h-[80%] mx-auto mt-10 mb-2'>
               <img
                    className="w-full h-full  rounded-xl"
                    src={data?.data?.image || 'https://images.pexels.com/photos/27545223/pexels-photo-27545223/free-photo-of-model-in-sweater-lying-on-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    alt="Uploaded image"
                  />
               </div>
              
              

                <div>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Set Photo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
       
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="bg-white w-[50%] h-[250px] mx-auto  rounded-xl mt-4">
                {imageFiles.length > 0 ? (
                  <img
                    className="w-full h-full rounded-xl"
                    src={imageFiles[imageFiles.length - 1]}
                    alt="Uploaded"
                  />
                ) : (
                  <img
                    className="w-full h-full  rounded-xl"
                    src={data?.data?.image || 'https://images.pexels.com/photos/27545223/pexels-photo-27545223/free-photo-of-model-in-sweater-lying-on-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    alt="Uploaded image"
                  />
                )}
                
              </div>

              <div className='mt-5 '>
                <ImageUploader setImageFiles={setImageFiles} />
                </div>

                <div>
                <Button onClick={imageHandler} variant="outline" className=' w-full bg-blue-700 text-white font-bold hover:border-blue-500 
                hover:text-blue-500' >Done</Button>
                </div>
        </div>
        
      </DialogContent>
    </Dialog>
      </div>
              
            </section>

            <section className="col-span-7 space-y-5">
              <div className="flex flex-col space-y-7">
                <section>
                  <p
                    className="font-bold text-[14px] text-slate-700 pb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Name
                  </p>
                  <input
                    style={{ fontFamily: 'var(--font-inter)' }}
                    id="userName"
                    name="userName"
                    type="text"
                    className="w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600"
                    placeholder="User name"
                    defaultValue={data?.data?.name}
              
                  />
                       
                </section>

          
              </div>

              <div>
                <p
                  className="font-bold text-[14px] text-slate-700 pb-2"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Email
                </p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600"
                  placeholder="Email"
                  defaultValue={data?.data?.email}
              
                />
              </div>

              <div className="flex flex-col space-y-7">
                <section>
                  <p
                    className="font-bold text-[14px] text-slate-700 pb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Phone Number
                  </p>
                  <input
                    style={{ fontFamily: 'var(--font-inter)' }}
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    className="w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600"
                    placeholder="Phone number"
                    defaultValue={data?.data?.phoneNumber}
                   
                  />
                </section>
              </div>

              <div className="flex flex-col space-y-7">
                <section>
                  <p
                    className="font-bold text-[14px] text-slate-700 pb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Address
                  </p>
                  <input
                    style={{ fontFamily: 'var(--font-inter)' }}
                    id="address"
                    name="address"
                    type="text"
                    className="w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600"
                    placeholder="Address"
                    defaultValue={data?.data?.address}
                   
                  />
                </section>
              </div>
              <div className="flex flex-col space-y-7">
                <section>
                  <p
                    className="font-bold text-[14px] text-slate-700 pb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Facebook
                  </p>
                  <input
                    style={{ fontFamily: 'var(--font-inter)' }}
                    id="facbook"
                    name="facebook"
                    type="text"
                    className="w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600"
                    placeholder="FaceBook link"
                    defaultValue={data?.data?.facebook}
                   
                  />
                </section>
              </div>
              <div className="flex flex-col space-y-7">
                <section>
                  <p
                    className="font-bold text-[14px] text-slate-700 pb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Instagram
                  </p>
                  <input
                    style={{ fontFamily: 'var(--font-inter)' }}
                    id="instagram"
                    name="instagram"
                    type="text"
                    className="w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600"
                    placeholder="Instagram link"
                    defaultValue={data?.data?.instagram}
                   
                  />
                </section>
              </div>
              <div className="flex flex-col space-y-7">
                <section>
                  <p
                    className="font-bold text-[14px] text-slate-700 pb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Tiktok
                  </p>
                  <input
                    style={{ fontFamily: 'var(--font-inter)' }}
                    id="tiktok"
                    name="tiktok"
                    type="text"
                    className="w-full py-3.5 border px-5 rounded-xl text-[14px] text-gray-600"
                    placeholder="Tiktok link"
                    defaultValue={data?.data?.tiktok}
                   
                  />
                </section>
              </div>
            </section>
          </div>
        </section>

        <section>
          <button
            type="submit"
            className="w-[200px] py-3 font-bold text-white text-[14px] bg-blue-500 hover:text-blue-500 hover:bg-white rounded-xl border-blue-500 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <span>Save</span>
          </button>
        </section>
      </form>


    
    </div>
  );
};

export default UpdateProfile;
