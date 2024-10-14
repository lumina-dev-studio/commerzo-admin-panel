
import ProductFromPartOne from "./ProductFromPartOne/ProductFromPartOne";
import ProductFromPartTow from "./ProductFromPartTow/ProductFromPartTow";

const Productfrom = ({onSubmit,register,handleSubmit,status,setStatus,productData,condition,imageFiles,setImageFiles,description,setDescription,
  themeTemplate,setThemeTemplate,isTaxCharged,setIsTaxCharged,weightSize,setWeightSize,variantData,setVariantData
}:any) => {
   

  return (
    <div>
 

 <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-2 gap-5">
  {/* frist part start */}
<ProductFromPartOne productData={productData} condition={condition} 

description={description} // Pass the description
setDescription={setDescription} // Pass the state update function
imageFiles={imageFiles}
register={register}
setImageFiles={setImageFiles}

isTaxCharged={isTaxCharged }
setIsTaxCharged={setIsTaxCharged}
weightSize={weightSize}
setWeightSize={setWeightSize}
variantData={variantData}
setVariantData={setVariantData}
/>
   
        {/* frist part start exd */}

        {/* frist part start */}

<ProductFromPartTow 
 status={status}
 setStatus={setStatus}
 themeTemplate={themeTemplate}
 register={register}
 setThemeTemplate={setThemeTemplate}
/>
         {/* frist part start exd */}
  


         <button
                  type="submit"
                  className="w-[200px] py-3.5 font-bold text-white text-[14px] bg-blue-500 hover:text-blue-500 hover:bg-white rounded-xl border-blue-500 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <span>Save</span>
                </button>


        </form>
    </div>
  );
};

export default Productfrom;