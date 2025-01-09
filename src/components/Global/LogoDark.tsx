import Image from "next/image";
import React from "react";

const LogoDark: React.FC = () => {
    return (
        <div className="flex items-center gap-1">
            <Image src="/images/icon-green.png" alt="Logo" width={21} height={24}/>
            <h1 className="text-2xl font-bold italic" style={{fontFamily: "var(--font-playfair)"}}>Commerzo</h1>
        </div>
    )
}
export default LogoDark;