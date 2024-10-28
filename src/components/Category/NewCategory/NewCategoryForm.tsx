




"use client"
import ImageUploader from "@/components/ImageUploader/ImageUploader"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCreateCategoryMutation } from "@/Redux/api/Product/Category/categoryApi"
import { useState } from "react"
import { toast } from "sonner";

const NewCategoryFrom = () => {
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
    <div>
      <Card className="w-full shadow-none pt-7">
        <CardContent className="space-y-10">
          <section className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label htmlFor="name" className="font-bold text-[14px] text-slate-700 pb-2">
                Category Name <span className="text-red-500">*</span>
              </Label>
            </div>
            <div className="col-span-9">
              <Input
                onChange={(e) => setCategoryName(e.target.value)}
                id="name"
                placeholder="Category name"
                maxLength={20}
                className="p-6 rounded-xl"
                required
                name="categoryName"
                value={categoryName}
              />
            </div>
          </section>

          <section className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label htmlFor="framework" className="font-bold text-[14px] text-slate-700 pb-2">
                Upload images <span className="text-red-500">*</span>
              </Label>
            </div>
            <div className="col-span-9 relative">
              <ImageUploader setImageFiles={setImageFiles} condition="NewCategory" />
              {imageFiles.length > 0 && imageFiles.map((imageSrc, index) => (
                <div key={index} className="bg-white h-[90%] border rounded-xl absolute top-3 left-2">
                  <img className="w-[200px] h-full rounded-xl" src={imageSrc} alt={`Uploaded image ${index}`} />
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-12 items-center">
            <div className="col-span-9 col-start-4">
              <button
                type="button"
                onClick={handler}
                className="w-[200px] py-3.5 font-bold text-white bg-blue-500 hover:text-blue-500 hover:bg-white rounded-xl border border-blue-500 hover:shadow"
              >
                Save
              </button>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewCategoryFrom;
