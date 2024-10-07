import NewCategoryFrom from "./NewCategoryForm";

const NewCategory = () => {
  return (
    <div className=" p-5">
        <h1 className=" text-2xl font-bold my-8 "> Add Category  </h1>

        <div className=" w-full ">
        <NewCategoryFrom/>
        </div>
     
    </div>
  );
};

export default NewCategory;