import Pricing from "./Pricing/Pricing";
import Shipping from "./Shipping/Shipping";
import TitleDescriptionMedia from "./TitleDescriptionMedia/TitleDescriptionMedia";
import Variants from "./Variants/Variants";

const ProductFromPartOne = ({ description, register,setDescription ,imageFiles,setImageFiles,isTaxCharged,variantData,setVariantData,
  setIsTaxCharged, weightSize,setWeightSize}: any) => {
  return (
    <div>
      <section>
        <TitleDescriptionMedia
          description={description} // Pass the description
          setDescription={setDescription} // Pass the state update function
          imageFiles={imageFiles}
          setImageFiles={setImageFiles}
          register={register}
        />

        <Pricing
        isTaxCharged={isTaxCharged }
        setIsTaxCharged={setIsTaxCharged}
        register={register}
        />
        <Shipping
       
        register={register}
        weightSize={weightSize}
setWeightSize={setWeightSize}
        />
        <Variants
       
        
        variantData={variantData}
        setVariantData={setVariantData}
 
        />


      </section>
    </div>
  );
};

export default ProductFromPartOne;
