import OrderDetailAllItem from "./OrderDetailAllItem";
import OrderDetailCartTotals from "./OrderDetailCartTotals";
import OrderDetailExpectedDateOfDelivery from "./OrderDetailExpectedDateOfDelivery";
import OrderDetailPaymentMethod from "./OrderDetailPaymentMethod";
import OrderDetailShippingAddress from "./OrderDetailShippingAddress";
import OrderDetailSummary from "./OrderDetailSummary";

const OrderDetail = () => {
  return (
    <div className=" p-5">
        <h1 className=" text-2xl font-bold my-8 "> Order Detail </h1>
     <div className=" grid grid-cols-12 gap-5">
    <section className=" space-y-5 col-span-8">
    <OrderDetailAllItem/>
    <OrderDetailCartTotals/>
    </section>
    
    <section className=" space-y-5 col-span-4">
        <OrderDetailSummary/>
        <OrderDetailShippingAddress/>
        <OrderDetailPaymentMethod/>
        <OrderDetailExpectedDateOfDelivery/>
    </section>

     </div>
    </div>
  );
};

export default OrderDetail;