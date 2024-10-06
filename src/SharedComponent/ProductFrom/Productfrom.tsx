
import ProductFromPartOne from "./ProductFromPartOne";
import ProductFromPartTow from "./ProductFromPartTow";

const Productfrom = ({handler,date,setDate,productData,condition,imageFiles,setImageFiles}:any) => {
   

  return (
    <div>
 

 <form onSubmit={handler} className=" grid grid-cols-2 gap-5">
  {/* frist part start */}
<ProductFromPartOne productData={productData} condition={condition}/>
   
        {/* frist part start exd */}

        {/* frist part start */}

<ProductFromPartTow setImageFiles={setImageFiles} imageFiles={imageFiles} date={date} setDate={setDate} productData={productData} condition={condition}/>
         {/* frist part start exd */}
  

        </form>
    </div>
  );
};

export default Productfrom;