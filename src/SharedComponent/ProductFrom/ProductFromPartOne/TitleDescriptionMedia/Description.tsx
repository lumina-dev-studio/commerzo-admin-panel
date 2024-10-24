"use client";

import { Label } from "@/components/ui/label";
import React, { useRef, useMemo } from "react";
import dynamic from "next/dynamic"; // Dynamically import JoditEditor

// Dynamically import JoditEditor with ssr: false
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

interface DescriptionProps {
  description: string;
  setDescription: (content: string) => void;
  placeholder?: string;
}

const Description: React.FC<DescriptionProps> = ({ description, setDescription }) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: "Start typing...",
      height: 300, // Set height to 300 pixels
    }),
    []
  );
 

  return (
    <div className="mt-5 space-y-1.5">
      <Label
        htmlFor="description"
        className="font-bold text-[14px] text-slate-700"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Description
      </Label>
      <JoditEditor
       
        ref={editor}
        value={description}
        config={config}
        onChange={(newContent) => setDescription(newContent)} // Update content onChange
      />
    </div>
  );
};

export default Description;
