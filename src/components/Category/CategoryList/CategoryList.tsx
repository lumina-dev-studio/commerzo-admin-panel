import Table from "@/SharedComponent/Table/Table";


const CategoryList = () => {
    const tableHead=["Category	","Icon",,"Quantity","Sale",]
    const tableData = [
      { Product: "Dried food", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638", Sale: 20,icon:"IoFastFoodOutline "  },
      { Product: "Wet food", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638", Sale: 20, icon:"IoFastFoodOutline " },
      { Product: "Supplemental food", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638", Sale: 20,icon:"IoFastFoodOutline "  },
      { Product: "Puppy food", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638", Sale: 20,icon:"IoFastFoodOutline "  },
      { Product: "Food for adult dogs", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  Quantity: "1,638", Sale: 25,icon:"IoFastFoodOutline "  },
    ];
  return (
    <div className=" p-5">
        <h1 className=" text-2xl font-bold my-8 "> Category List
        <Table tableHead={tableHead} tableData={tableData} condition='CategoryList'/>
      </h1>
   
    </div>
  );
};

export default CategoryList;