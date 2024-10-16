import Table from "@/SharedComponent/Table/Table";


const CategoryList = () => {
    const tableHead=["Category	","Icon",,"Quantity","Sale","Start date" ,"Action" ]
    const tableData = [
      { Product: "Dried food", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638", Sale: 20,icon:"IoFastFoodOutline " ,StartDate:"02/03/2024" },
      { Product: "Wet food", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638", Sale: 20, icon:"IoFastFoodOutline ",StartDate:"02/03/2024" },
      { Product: "Supplemental food", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638", Sale: 20,icon:"IoFastFoodOutline " ,StartDate:"02/03/2024" },
      { Product: "Puppy food", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", Quantity: "1,638", Sale: 20,icon:"IoFastFoodOutline " ,StartDate:"02/03/2024" },
      { Product: "Food for adult dogs", image: "https://images.pexels.com/photos/6553454/pexels-photo-6553454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  Quantity: "1,638", Sale: 25,icon:"IoFastFoodOutline " ,StartDate:"02/03/2024" },
    ];
  return (
    <div className=" p-5">
        <h1 className=" text-2xl font-bold my-8 "> Manage Category  </h1>
        <Table tableHead={tableHead} tableData={tableData} condition='CategoryList'/>
     
   
    </div>
  );
};

export default CategoryList;