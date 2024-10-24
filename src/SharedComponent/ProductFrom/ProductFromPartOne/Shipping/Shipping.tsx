import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Shipping = ({register,weightSize,setWeightSize}:any) => {
  return (

    <Card className=" p-4  mt-5">
      <Label
            htmlFor="weight"
            className="font-bold text-[14px] text-slate-900 "
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Shipping
 
          </Label>
      <div className="flex gap-3 items-center mt-10">

      <div className="space-y-1.5 w-[200px]">
          <Label
            htmlFor="weight"
            className="font-semibold text-[14px] text-slate-500"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Weight 
          </Label>

          <Input
          type="number"
            {...register("weight")}
            className="rounded-xl"
      required
          
            style={{ fontFamily: "var(--font-inter)" }}
          />

   




        </div>

        <div className=" w-[100px] h-full pt-7">

        <Select
        
   
      value={weightSize}
      onValueChange={(value) => setWeightSize(value)} // Update state on selection
    >
      <SelectTrigger id="status" className="p-6 rounded-xl"  >
        <SelectValue />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="kg" className="hover:bg-blue-500 hover:text-white">
        kg
        </SelectItem>
        <SelectItem value="g" className="hover:bg-blue-500 hover:text-white">
         g
         </SelectItem>
        <SelectItem value="oz" className="hover:bg-blue-500 hover:text-white">
         oz
        </SelectItem>
        <SelectItem value="ib" className="hover:bg-blue-500 hover:text-white">
         ib
        </SelectItem>
       
      </SelectContent>
    </Select>
        </div>

        </div>
      
    </Card>
  );
};

export default Shipping;