import React from 'react';
import Image from "next/image";

const Search: React.FC = () => {
    return (
        <div>
            <div
                className={`flex rounded-xl border border-gray-600 font-[sans-serif] overflow-hidden ps-2 bg-[#262626]`}>
                <Image src="images/search.svg" alt="search" width={15} height={15} className="bg-transparent text-gray-600"/>
                <input
                    type="email"
                    placeholder="Search here..."
                    className="w-full outline-none text-white ps-2 pe-4 py-2 font-light bg-transparent"
                />
            </div>
        </div>
    );
};

export default Search;
