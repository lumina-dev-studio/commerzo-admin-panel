import ImageUploader from "@/components/ImageUploader/ImageUploader";
import { Label } from "@/components/ui/label";

const Media = ({imageFiles,setImageFiles,productData,condition,}:any) => {
  return (
    <div className="flex flex-col space-y-1.5  mt-4">
   <Label
        htmlFor="description"
        className="font-bold text-[14px] text-slate-700 pb-2"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Media
      </Label>

    <div className={`${imageFiles?.length===0?" w-full":"grid grid-cols-3 gap-3"} `}>
      {/* Render old images if imageFiles is empty */}
      {imageFiles?.length === 0 && productData?.imageUrl?.map((imageSrc: string, index: number) => (
        <div key={index} className="bg-white h-[200px] border rounded-xl">
          <img className="w-full h-full rounded-xl" src={imageSrc} alt={`Old image ${index}`} />
        </div>
      ))}
      {/* Render new images if there are any in imageFiles */}
      {imageFiles?.length > 0 && imageFiles.map((imageSrc: string, index: number) => (
        <div key={index} className="bg-white h-full border rounded-xl ">
          <img className="w-full h-full rounded-xl" src={imageSrc} alt={`Uploaded image ${index}`} />
        </div>
      ))}
     <div className=" ms-5">
     <ImageUploader setImageFiles={setImageFiles} oldImages={productData?.imageUrl} />
     </div>
    </div>
  </div>
  );
};

export default Media;