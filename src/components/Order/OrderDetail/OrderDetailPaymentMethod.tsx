import {
  Card,

} from "@/components/ui/card"

const OrderDetailPaymentMethod = () => {
  return (
    <Card className="p-3 shadow-none border-none">
    <section className="  p-3 space-y-2.5">

<h3 className=" font-bold text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>Payment Method



</h3>


<p className=" text-gray-500 font-normal text-[14px]" style={{ fontFamily: 'var(--font-inter)' }}>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.

</p>
</section>

</Card>
  );
};

export default OrderDetailPaymentMethod;