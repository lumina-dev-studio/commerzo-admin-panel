import Table from "@/SharedComponent/Table/Table";



const ProductList = () => {
    const tableHead=["Product	","Product ID",,"Price","Quantity","Sale","Stock","Start date" ,"Action"   ]
    const tableData = [
      { Product: "Dog Food, Chicken & Chicken Liver Recipe...",price:"$1,452.500", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Product ID": "#7712309", Quantity: "1,638", Sale: 50, Stock: "Out of stock",StartDate:"02/03/2024"  },
      { Product: "Grain Free Dry Dog Food | Rachael Ray® Nutrish®",price:"$1,452.500", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Product ID":"#7712309", Quantity: "1,638", Sale: 70, Stock: "Out of stock",StartDate:"02/03/2024"  },
      { Product: "Weruva Pumpkin Patch Up! Pumpkin With Ginger...",price:"$1,452.500", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Product ID":"#7712309", Quantity: "1,638", Sale: 40, Stock: "Out of stock" ,StartDate:"02/03/2024" },
      { Product: "Edward King",price:"$1,452.500", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Product ID":"#7712309", Quantity: "1,638", Sale: 55, Stock: "Out of stock",StartDate:"02/03/2024"  },
      { Product: "Jim Red",price:"$1,452.500", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Product ID":"#7712309", Quantity: "1,638", Sale: 35, Stock: "Out of stock" ,StartDate:"02/03/2024"},
    ];
  return (
    <div className=" p-5">
      <h1 className=" text-2xl font-bold my-8 ">Add Attribute
        <Table tableHead={tableHead} tableData={tableData} condition='ProductList'/>
      </h1>
    </div>
  );
};

export default ProductList;