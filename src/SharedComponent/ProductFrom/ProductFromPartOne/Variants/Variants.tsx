import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { toast } from "sonner";

const Variants = ({ register, variantData, setVariantData }: any) => {
  const [variantCount, setVariantCount] = useState(0);
  const [optionValues, setOptionValues] = useState([[""]]);
  const [completedVariants, setCompletedVariants] = useState<boolean[]>([]);
  const [optionNames, setOptionNames] = useState<string[]>([]);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  const handleOptionValueChange = (variantIndex: number, valueIndex: number, value: string) => {
    const updatedOptionValues = [...optionValues];
    updatedOptionValues[variantIndex][valueIndex] = value;
    setOptionValues(updatedOptionValues);

    if (value !== "" && valueIndex === optionValues[variantIndex].length - 1) {
      const newValues = [...updatedOptionValues[variantIndex], ""];
      const newOptionValues = [...updatedOptionValues];
      newOptionValues[variantIndex] = newValues;
      setOptionValues(newOptionValues);
    }
  };

  const handleAddVariant = () => {
    if (variantCount < 3) {
      setVariantCount(variantCount + 1);
      setOptionValues([...optionValues, [""]]);
      setCompletedVariants([...completedVariants, false]);
      setOptionNames([...optionNames, ""]);
    }
  };

  const handleDeleteOption = (variantIndex: number, valueIndex: number) => {
    const updatedOptionValues = [...optionValues];
    const filteredValues = updatedOptionValues[variantIndex].filter((_, i) => i !== valueIndex);
    updatedOptionValues[variantIndex] = filteredValues;
    setOptionValues(updatedOptionValues);
  };

  const handleDone = (variantIndex: number) => {
    const optionNameElement = document.getElementById(`optionName${variantIndex + 1}`) as HTMLInputElement;
    const optionName = optionNameElement ? optionNameElement.value : "";

    if (!optionName) {
      return toast.error("option name required");
    }

    const values = optionValues[variantIndex].filter((value) => value.trim() !== "");
    if (values.length === 0) {
      return toast.error("option value required");
    }

    const formattedVariant = {
      optionName,
      optionValues: values.map(value => ({
        value,
        price: "",
        available: "",
      })),
    };

    const updatedOptionNames = [...optionNames];
    updatedOptionNames[variantIndex] = optionName || "";
    setOptionNames(updatedOptionNames);
    
    setVariantData((prev: any) => {
      const newData = [...prev, formattedVariant];
      console.log(newData);
      return newData;
    });

    setCompletedVariants((prev) => {
      const updated = [...prev];
      updated[variantIndex] = true;
      return updated;
    });
  };

  const handleSelectChange = (value: string) => {
    setSelectedVariant(value);
  };

  const handlePriceChange = (value: string, variantIndex: number, valueIndex: number) => {
    if (selectedVariant) {
      setVariantData((prev: any) => {
        const newData = [...prev];
        const optionIndex = newData.findIndex(variant => variant.optionName === selectedVariant);
        if (optionIndex >= 0) {
          newData[optionIndex].optionValues[valueIndex].price = value;
        }
        return newData;
      });
    }
  };

  const handleAvailabilityChange = (value: string, variantIndex: number, valueIndex: number) => {
    if (selectedVariant) {
      setVariantData((prev: any) => {
        const newData = [...prev];
        const optionIndex = newData.findIndex(variant => variant.optionName === selectedVariant);
        if (optionIndex >= 0) {
          newData[optionIndex].optionValues[valueIndex].available = value;
        }
        return newData;
      });
    }
  };

  return (
    <Card className="p-4 mt-5">
      <Label
        htmlFor="variants"
        className="font-semibold text-[14px] text-slate-500"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Variants
      </Label>

      {Array.from({ length: variantCount }).map((_, variantIndex) => (
        <section key={variantIndex} className="border p-4 mt-4 rounded-xl space-y-5">
          {completedVariants[variantIndex] ? (
            <div className="space-y-2">
              <p className="text-gray-700 font-bold text-[13px] ms-3 mb-3">{optionNames[variantIndex]}</p>
              <p className="text-gray-700 text-[13px]">
                {variantData[variantIndex]?.optionValues.map((option: any) => (
                  <span key={option.value} className="bg-gray-300 ms-3 p-2 rounded-md">{option.value}</span>
                ))}
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <Label
                  htmlFor={`optionName${variantIndex + 1}`}
                  className="font-semibold text-[14px] text-slate-500"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Option name {variantIndex + 1}
                </Label>
                <Input
                  id={`optionName${variantIndex + 1}`}
                  className="rounded-xl"
                  placeholder={`e.g. Size Color`}
                  style={{ fontFamily: "var(--font-inter)" }}
                  required
                />
              </div>

              {optionValues[variantIndex].map((optionValue, valueIndex) => (
                <div key={valueIndex} className="space-y-2 mt-4">
                  <Label
                    htmlFor={`optionValue${variantIndex + 1}-${valueIndex + 1}`}
                    className="font-semibold text-[14px] text-slate-500"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Option value {valueIndex + 1}
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      value={optionValue}
                      onChange={(e) => handleOptionValueChange(variantIndex, valueIndex, e.target.value)}
                      className="rounded-xl"
                      placeholder={`e.g. Large`}
                      style={{ fontFamily: "var(--font-inter)" }}
                      required
                    />
                    {valueIndex > 0 && (
                      <button
                        type="button"
                        onClick={() => handleDeleteOption(variantIndex, valueIndex)}
                        className="text-red-500 text-[13px] font-semibold border rounded-xl p-2"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <section className="mt-4">
                <button
                  type="button"
                  onClick={() => handleDone(variantIndex)}
                  className="text-gray-100 font-semibold text-[13px] bg-gray-900 rounded-xl py-2 px-3"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Done
                </button>
              </section>
            </>
          )}
        </section>
      ))}

      {variantCount === 0 && (
        <section className="mt-4">
          <button
            type="button"
            onClick={() => setVariantCount(1)}
            className="text-gray-700 font-semibold text-[13px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <CiCirclePlus className=" inline-block text-[20px] font-bold ms-2 mb-1" /> Add option like colour or size
          </button>
        </section>
      )}

      {variantCount > 0 && variantCount < 3 && (
        <section className="mt-4">
          <button
            type="button"
            onClick={handleAddVariant}
            className="text-gray-700 font-semibold text-[13px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <CiCirclePlus className=" inline-block text-[20px] font-bold ms-2 mb-1" /> Add another option
          </button>
        </section>
      )}

      {variantData.length > 0 && (
        <section className="my-5">
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {variantData
                  .filter((variant: any) => variant.optionName.trim() !== "")
                  .map((variant: any, index: any) => (
                    <SelectItem key={index} value={variant.optionName}>
                      {variant.optionName}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </section>
      )}

      {selectedVariant && (
        variantData
          .filter((variant: any) => variant.optionName === selectedVariant)
          .map((variant: any, variantIndex: any) => (
            <div key={variantIndex}>
              {variant?.optionValues?.map((option: any, valueIndex: any) => (
                <div key={valueIndex} className="grid grid-cols-3 gap-3 px-3 space-y-5 items-center border">
                  <p className="text-[13px]" style={{ fontFamily: "var(--font-inter)" }}>
                    {option.value}
                  </p>
                  <div className="pb-3">
                    <Input
                      value={option.price || ""}
                      onChange={(e) => handlePriceChange(e.target.value, variantIndex, valueIndex)}
                      className="rounded-xl"
                      placeholder={`Price`}
                      style={{ fontFamily: "var(--font-inter)" }}
                      required
                    />
                  </div>
                  <div className="pb-3">
                    <Input
                      value={option.available || ""}
                      onChange={(e) => handleAvailabilityChange(e.target.value, variantIndex, valueIndex)}
                      className="rounded-xl"
                      placeholder={`Availability`}
                      style={{ fontFamily: "var(--font-inter)" }}
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          ))
      )}
    </Card>
  );
};

export default Variants;
