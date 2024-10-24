import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Title = ({register}:any) => {
 
  return (
    <div className="space-y-1.5 ">
        <Label htmlFor="name" className="font-bold text-[14px] text-slate-700 " style={{ fontFamily: 'var(--font-inter)' }}>
                 Title
                </Label>
      
      <Input
     {...register("title")}
     required
       className=" rounded-xl"
       placeholder=" Short sleeve t-shirt"
       style={{ fontFamily: 'var(--font-inter)' }}
      />
    </div>
  );
};

export default Title;