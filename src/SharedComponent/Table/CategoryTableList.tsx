import DeleteCategoryModal from "@/components/Category/CategoryList/DeleteCategoryModal";
import { TableCell, TableRow } from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { IoFastFoodOutline, IoEyeOutline } from "react-icons/io5";
import { LuPenLine } from "react-icons/lu";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const CategoryTableList = ({ item, index, categoryRefetch, isLoading }: any) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/product/updateCategory/${item?.id}`);
  };

  return (
    <TableRow className={index % 2 === 1 ? "bg-gray-100 border-none" : "border-none"}>
      <TableCell style={{ fontFamily: "var(--font-inter)", padding: "0" }} className="p-0 rounded-s-xl">
        <div className="flex items-center gap-5 p-3 rounded-2xl">
          <div>
            {isLoading ? (
              <Skeleton height={50} width={50} borderRadius={8} />
            ) : (
              <img
                className="h-[50px] w-[50px] text-[15px] font-bold bg-gray-900"
                src={item?.categoryImage}
                alt="Category"
              />
            )}
          </div>
          <div className="hover:text-blue-500 cursor-pointer">
            {isLoading ? (
              <Skeleton height={20} width={100} />
            ) : (
              item?.categoryName
            )}
          </div>
        </div>
      </TableCell>

      <TableCell className="text-[13px] font-medium text-gray-600 p-3" style={{ fontFamily: "var(--font-inter)" }}>
        {isLoading ? (
          <Skeleton height={20} width={20} borderRadius="50%" />
        ) : (
          <IoFastFoodOutline className="text-[20px]" />
        )}
      </TableCell>

      <TableCell className="text-[13px] font-medium text-gray-600 p-3" style={{ fontFamily: "var(--font-inter)" }}>
        <div className="flex gap-5 items-center">
          <section>
            {isLoading ? (
              <Skeleton height={20} width={20} borderRadius="50%" />
            ) : (
              <IoEyeOutline className="text-blue-500 text-[20px] cursor-pointer" />
            )}
          </section>
          <section>
            {isLoading ? (
              <Skeleton height={20} width={20} borderRadius="50%" />
            ) : (
              <LuPenLine onClick={handleEdit} className="text-green-500 text-[20px] cursor-pointer" />
            )}
          </section>
          <section>
            {isLoading ? (
              <Skeleton height={20} width={20} borderRadius="50%" />
            ) : (
              <DeleteCategoryModal id={item?.id} categoryRefetch={categoryRefetch} />
            )}
          </section>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CategoryTableList;
