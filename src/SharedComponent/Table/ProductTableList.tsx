import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { IoEyeOutline } from "react-icons/io5";
import { LuPenLine } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton"; // Import your Skeleton component

const ProductTableList = ({ item, index, isLoading }: any) => {
  return (
    <TableRow key={index} className={index % 2 === 1 ? "bg-gray-100 border-none" : "border-none"}>
      <TableCell style={{ fontFamily: "var(--font-inter)", padding: "0" }} className="p-0 rounded-s-xl">
        <div className="flex items-center gap-5 p-3 rounded-2xl">
          <div>
            {isLoading ? (
              <Skeleton height={50} width={50} borderRadius={8} />
            ) : (
              <img
                className="h-[50px] w-[50px] text-[15px] font-bold bg-gray-900"
                src={item?.productMediaImages[0]?.imageUrl}
                alt={item?.title}
              />
            )}
          </div>
          <div className="hover:text-blue-500 cursor-pointer">
            {isLoading ? (
              <Skeleton width={100} />
            ) : (
              item?.title
            )}
          </div>
        </div>
      </TableCell>

      <TableCell className="text-[13px] font-medium text-gray-600 p-3" style={{ fontFamily: "var(--font-inter)" }}>
        {isLoading ? <Skeleton width={50} /> : item?.id}
      </TableCell>
      <TableCell className="text-[13px] font-medium text-gray-600 p-3" style={{ fontFamily: "var(--font-inter)" }}>
        {isLoading ? <Skeleton width={50} /> : item?.price}
      </TableCell>
      <TableCell className="text-[13px] font-medium text-gray-600 p-3" style={{ fontFamily: "var(--font-inter)" }}>
        {isLoading ? <Skeleton width={70} /> : item?.category}
      </TableCell>
      <TableCell className="text-[13px] font-medium text-gray-600 p-3" style={{ fontFamily: "var(--font-inter)" }}>
        {isLoading ? <Skeleton width={30} /> : item?.productVariants?.length}
      </TableCell>

      <TableCell className="text-[13px] font-medium text-gray-600 p-3" style={{ fontFamily: "var(--font-inter)" }}>
        <div className="flex gap-5 items-center">
          {isLoading ? (
            <Skeleton width={100} />
          ) : (
            <>
              <section>
                <IoEyeOutline className="text-blue-500 text-[20px] cursor-pointer" />
              </section>
              <section>
                <LuPenLine className="text-green-500 text-[20px] cursor-pointer" />
              </section>
              <section>
                <RiDeleteBinLine className="text-red-500 text-[20px] cursor-pointer" />
              </section>
            </>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ProductTableList;
