import OrderTrackingPartOne from "./OrderTrackingPartOne";
import OrderTrackingPartThree from "./OrderTrackingPartThree";
import OrderTrackingPartTow from "./OrderTrackingPartTow";


const OrderTracking = () => {
  return (
    <div>
      
      <section className=" space-y-5">
        <OrderTrackingPartOne/>
        <OrderTrackingPartTow/>
        <OrderTrackingPartThree/>
      </section>
    </div>
  );
};

export default OrderTracking;