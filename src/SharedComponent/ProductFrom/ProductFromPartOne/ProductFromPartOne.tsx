import Pricing from "./Pricing/Pricing";
import TitleDescriptionMedia from "./TitleDescriptionMedia/TitleDescriptionMedia";

const ProductFromPartOne = ({ description, setDescription ,imageFiles,setImageFiles,isTaxCharged,setIsTaxCharged}: any) => {
  return (
    <div>
      <section>
        <TitleDescriptionMedia
          description={description} // Pass the description
          setDescription={setDescription} // Pass the state update function
          imageFiles={imageFiles}
          setImageFiles={setImageFiles}
        />

        <Pricing
        isTaxCharged={isTaxCharged }
        setIsTaxCharged={setIsTaxCharged}
        />
      </section>
    </div>
  );
};

export default ProductFromPartOne;
