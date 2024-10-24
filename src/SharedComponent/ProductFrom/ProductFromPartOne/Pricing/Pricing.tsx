import { Card } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const Pricing = ({isTaxCharged,setIsTaxCharged,register,price,
  setPrice,compareAtPrice,setCompareAtPrice,cost,setCost,margin,setMargin,profit,setProfit}:any) => {

  

  const calculateProfit = price - cost; // Calculate profit
  const calculateMargin = price > 0 ? Math.round((calculateProfit / price) * 100) : 0; // Calculate margin in percentage without decimals

  setProfit(calculateProfit)
  setMargin(calculateMargin)
  console.log(profit, margin);
  console.log("Tax Charged State:", isTaxCharged); // Debugging line

  return (
    <Card className="p-4 space-y-2 mt-5">
      <Label
        htmlFor="name"
        className="font-bold text-[14px] text-slate-700"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Price
      </Label>

      <section className="grid grid-cols-3 gap-5 pt-5">
        <div className="space-y-1.5">
          <Label
            htmlFor="price"
            className="font-semibold text-[14px] text-slate-500"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Price
          </Label>

          <Input
            type="number" // Ensure the input is numeric
            onChange={(e) => setPrice(parseFloat(e.target.value) || 0)} // Parse input value to number
            // {...register("price")}
            className="rounded-xl"
            placeholder="0.00"
            style={{ fontFamily: "var(--font-inter)" }}

            required
          />
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="compareAtPrice"
            className="font-semibold text-[14px] text-slate-500"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Compare-at price
          </Label>

          <Input
            type="number" // Ensure the input is numeric
            onChange={(e) => setCompareAtPrice(parseFloat(e.target.value) || 0)} // Parse input value to number
            // {...register("compareAtPrice")}
            className="rounded-xl"
            placeholder="0.00"
            style={{ fontFamily: "var(--font-inter)" }}

            required
          />
        </div>
      </section>

      <section>
        <div className="pt-4 ">
          <div className="flex items-center space-x-2">
            {/* Test with a native checkbox */}
            <input
              type="checkbox"
              id="checkbox"
              checked={isTaxCharged}
              onChange={() => {
                setIsTaxCharged((prev:any) => {
                  console.log("Checkbox state before:", prev);
                  return !prev;
                });
              }} // Toggle checkbox state
            />
            <Label
              htmlFor="checkbox"
              className="font-semibold text-[14px] text-slate-500"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Charge tax on this product
            </Label>
          </div>
          <hr className="mt-7" />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-5 pt-5">
        <div className="space-y-1.5">
          <Label
            htmlFor="cost"
            className="font-semibold text-[14px] text-slate-500"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Cost per item
          </Label>

          <Input
            type="number" // Ensure the input is numeric
            onChange={(e) => setCost(parseFloat(e.target.value) || 0)} // Parse input value to number
            // {...register("cost")}
            className="rounded-xl"
            placeholder="0.00"
            style={{ fontFamily: "var(--font-inter)" }}
            required
          />
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="profit"
            className="font-semibold text-[14px] text-slate-500"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Profit
          </Label>

          <Input
          
            className="rounded-xl"
            value={`${profit ? profit.toFixed(2) : "--"}`} // Display profit
            readOnly // Make it read-only
            style={{ fontFamily: "var(--font-inter)" }}
          />
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="margin"
            className="font-semibold text-[14px] text-slate-500"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Margin 
          </Label>

          <Input
           
            className="rounded-xl"
            value={`${margin ? `${margin}%` : "--"}`} // Display margin without decimals
            readOnly // Make it read-only
            style={{ fontFamily: "var(--font-inter)" }}
          />
        </div>
      </section>
    </Card>
  );
};

export default Pricing;
