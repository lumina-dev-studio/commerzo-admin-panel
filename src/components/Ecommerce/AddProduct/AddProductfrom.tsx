"use client"
import { useState } from "react";
import AddProductFromPartOne from "./AddProductFromPartOne";
import AddProductFromPartTow from "./AddProductFromPartTow";
import { toast } from "sonner"

const AddProductfrom = () => {
    const [date, setDate] = useState<Date>()

    const [imageUrl,seImageUrl]=useState('')

    const handler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        if(!imageUrl){

            return toast.error("select the Image")
        }
        if(!date){

            return toast.error("select the Date")
        }


        
        const productName = (e?.target as HTMLFormElement)?.productName?.value;
        const productCategory = (e?.target as HTMLFormElement)?.productCategory?.value;
        const gender = (e?.target as HTMLFormElement)?.gender?.value;
        const brand = (e?.target as HTMLFormElement)?.brand?.value;
        const description = (e?.target as HTMLFormElement)?.description?.value;
        const productSize = (e?.target as HTMLFormElement)?.productSize?.value;

        const info={
            productName,productCategory,gender,brand,description,productSize,imageUrl,date
        }
        console.log(info);
      };
  return (
    <div>
 

 <form onSubmit={handler} className=" grid grid-cols-2 gap-5">
  {/* frist part start */}
<AddProductFromPartOne/>
   
        {/* frist part start exd */}

        {/* frist part start */}

<AddProductFromPartTow seImageUrl={seImageUrl} date={date} setDate={setDate}/>
         {/* frist part start exd */}
  

        </form>
    </div>
  );
};

export default AddProductfrom;