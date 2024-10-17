import Pricing from "./Pricing/Pricing";
import Shipping from "./Shipping/Shipping";
import TitleDescriptionMedia from "./TitleDescriptionMedia/TitleDescriptionMedia";
import Variants from "./Variants/Variants";

const ProductFromPartOne = ({ description, register,setDescription ,imageFiles,setImageFiles,isTaxCharged,variantData,setVariantData,
  setIsTaxCharged, weightSize,setWeightSize,price, setPrice,compareAtPrice,setCompareAtPrice,cost,setCost,margin,setMargin,profit,setProfit,productData}: any) => {
  return (
    <div>
      <section>
        <TitleDescriptionMedia
          description={description} // Pass the description
          setDescription={setDescription} // Pass the state update function
          imageFiles={imageFiles}
          setImageFiles={setImageFiles}
          register={register}
          productData={productData}
        />

        <Pricing
        isTaxCharged={isTaxCharged }
        setIsTaxCharged={setIsTaxCharged}
        register={register}
        price={price}
        setPrice={setPrice}
        compareAtPrice={compareAtPrice}
        setCompareAtPrice={setCompareAtPrice}
        cost={cost}
        setCost={setCost}

        productData={productData}

        margin={margin}
        setMargin={setMargin}
        profit={profit}
        setProfit={setProfit}
        />
        <Shipping
       
        register={register}
        weightSize={weightSize}
        setWeightSize={setWeightSize}
        productData={productData}
        />
        <Variants
       
        
        variantData={variantData}
        setVariantData={setVariantData}
        productData={productData}
 
        />


      </section>
    </div>
  );
};

export default ProductFromPartOne;