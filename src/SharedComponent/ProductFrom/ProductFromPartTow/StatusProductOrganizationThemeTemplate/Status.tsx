import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const Status = ({status,setStatus,productData}:any) => {


  return (
    <Card className="flex flex-col space-y-1.5 p-4">
      <Label
       
        className="font-bold text-[14px] text-slate-700 pb-2"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Status
      </Label>
      <Select
       
        value={status}
        onValueChange={(value) => setStatus(value)} // Update state on selection
      >
        <SelectTrigger  className="p-6 rounded-xl">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="Active" className="hover:bg-blue-500 hover:text-white">
            Active
          </SelectItem>
          <SelectItem value="Draft" className="hover:bg-blue-500 hover:text-white">
            Draft
          </SelectItem>
        </SelectContent>
      </Select>
    </Card>
  );
};

export default Status;
