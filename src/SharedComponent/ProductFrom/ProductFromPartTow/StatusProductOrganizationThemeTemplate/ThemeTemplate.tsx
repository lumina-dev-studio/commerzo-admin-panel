import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ThemeTemplate = ({themeTemplate,setThemeTemplate}:any) => {
  return (
    <Card className="flex flex-col space-y-1.5 p-4 mt-5">
    <Label
      htmlFor="status"
      className="font-bold text-[14px] text-slate-700 pb-2"
      style={{ fontFamily: "var(--font-inter)" }}
    >
    Theme template
    </Label>
    <Select
      name="productStatus"
      value={themeTemplate}
      onValueChange={(value) => setThemeTemplate(value)} // Update state on selection
    >
      <SelectTrigger id="status" className="p-6 rounded-xl">
        <SelectValue placeholder="Select status" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="default product" className="hover:bg-blue-500 hover:text-white">
        Default product
        </SelectItem>
       
      </SelectContent>
    </Select>
  </Card>
  );
};

export default ThemeTemplate;