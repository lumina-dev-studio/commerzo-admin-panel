import OrderList from "@/components/Order/OrderList.tsx/OrderList";

export const metadata =  {
  title: "Orders",
}

const page = () => {
  return (
    <div className=" my-14">
      <OrderList/>
    </div>
  );
};

export default page;