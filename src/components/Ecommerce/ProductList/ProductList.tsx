import ProductTable from "@/app/SharedComponent/ProductTable/ProductTable";

const ProductList = () => {
  return (
    <div className=" p-5">
      <h1 className=" text-2xl font-bold my-8 ">Add Attribute
        <ProductTable/>
      </h1>
    </div>
  );
};

export default ProductList;