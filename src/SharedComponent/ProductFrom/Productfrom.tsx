
import ProductFromPartOne from "./ProductFromPartOne/ProductFromPartOne";
import ProductFromPartTow from "./ProductFromPartTow/ProductFromPartTow";

const Productfrom = ({handler,status,setStatus,productData,condition,imageFiles,setImageFiles,description,setDescription,
  themeTemplate,setThemeTemplate,isTaxCharged,setIsTaxCharged
}:any) => {
   

  return (
    <div>
 

 <form onSubmit={handler} className=" grid grid-cols-2 gap-5">
  {/* frist part start */}
<ProductFromPartOne productData={productData} condition={condition} 

description={description} // Pass the description
setDescription={setDescription} // Pass the state update function
imageFiles={imageFiles}

setImageFiles={setImageFiles}

isTaxCharged={isTaxCharged }
setIsTaxCharged={setIsTaxCharged}
/>
   
        {/* frist part start exd */}

        {/* frist part start */}

<ProductFromPartTow 
 status={status}
 setStatus={setStatus}
 themeTemplate={themeTemplate}
 
 setThemeTemplate={setThemeTemplate}
/>
         {/* frist part start exd */}
  


  {/* <button className="p-3 bg-red-300"  type="submit">
    Save
  </button> */}


        </form>
    </div>
  );
};

export default Productfrom;