import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProductOrganization = ({register}:any) => {
  return (
    <Card className="space-y-2.5 p-4 mt-5">
      <Label htmlFor="name" className="font-bold text-[14px] text-slate-700 " style={{ fontFamily: 'var(--font-inter)' }}>
      Product organization

            </Label>

   <div className="space-y-1.5 pt-5">
   <Label htmlFor="name" className="font-semibold text-[14px] text-slate-500 " style={{ fontFamily: 'var(--font-inter)' }}>
   Collections
            </Label>
  
  <Input
   
   {...register("collections")}
   className=" rounded-xl"
 required
   style={{ fontFamily: 'var(--font-inter)' }}
  />
   </div>


   <div className="space-y-1.5 pt-2  ">
   <Label htmlFor="name" className="font-semibold  text-[14px] text-slate-500 " style={{ fontFamily: 'var(--font-inter)' }}>
   Tags
            </Label>
  
  <Input
  
   {...register("tags")}
   className=" rounded-xl"
 required
   style={{ fontFamily: 'var(--font-inter)' }}
  />
   </div>
</Card>
  );
};

export default ProductOrganization;