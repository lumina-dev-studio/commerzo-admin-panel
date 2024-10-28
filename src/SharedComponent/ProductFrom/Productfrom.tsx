
import ProductFromPartOne from "./ProductFromPartOne/ProductFromPartOne";
import ProductFromPartTow from "./ProductFromPartTow/ProductFromPartTow";

const Productfrom = ({onSubmit,register,handleSubmit,status,setStatus,productData,condition,imageFiles,setImageFiles,description,setDescription, themeTemplate,setThemeTemplate,isTaxCharged,setIsTaxCharged,weightSize,setWeightSize,variantData,setVariantData,price,
  setPrice,compareAtPrice,setCompareAtPrice,cost,setCost,margin,setMargin,profit,setProfit,variantCount,setVariantCount,optionValues,setOptionValues,completedVariants,setCompletedVariants,optionNames,setOptionNames,selectedVariant,setSelectedVariant,category,setCategory
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

price={price}
setPrice={setPrice}
compareAtPrice={compareAtPrice}
setCompareAtPrice={setCompareAtPrice}
cost={cost}
setCost={setCost}
margin={margin}
setMargin={setMargin}
profit={profit}
setProfit={setProfit}




variantCount={variantCount} setVariantCount={setVariantCount}
optionValues={optionValues} setOptionValues={setOptionValues}
completedVariants={completedVariants} setCompletedVariants={setCompletedVariants}
optionNames={optionNames} setOptionNames={setOptionNames}
selectedVariant={selectedVariant} setSelectedVariant={setSelectedVariant}
/>
   
        {/* frist part start exd */}

        {/* frist part start */}

<ProductFromPartTow 
 status={status}
 setStatus={setStatus}
 themeTemplate={themeTemplate}
 register={register}
 setThemeTemplate={setThemeTemplate}
 productData={productData}
 category={category} setCategory={setCategory}
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