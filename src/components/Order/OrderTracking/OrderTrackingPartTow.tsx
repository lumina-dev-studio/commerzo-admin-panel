"use client";
import { FaCheck } from "react-icons/fa"; // Import the checkmark icon

const OrderTrackingPartTow = () => {
  const steps = [
    { title: "Receiving orders", time: "05:43 AM", completed: true },
    { title: "Order processing", time: "01:21 PM", completed: true },
    { title: "Being delivered", time: "Processing", completed: true },
    { title: "Delivered", time: "Pending", completed: false },
  ];

  return (

    <div className=" p-5">

   
    <div className="p-6 bg-white shadow-lg rounded-xl w-full">
      {/* Top Heading */}
      <div className="mb-6 space-y-2">
        <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-inter)' }}>Detail</h3>
        <p className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-inter)' }}>
          Your items are on the way. Tracking information will be available within 24 hours.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="relative flex-1">
            {/* Connector Line */}
            {index !== 0 && (
              <div
                className={`absolute top-[25%] right-[100%] w-full h-[4px] transform -translate-y-1/2 ${
                  steps[index - 1].completed ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            )}

            {/* Step Circle */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-[50px] h-[50px] rounded-full flex items-center justify-center ${
                  step.completed ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-400"
                }`}
              >
                {step.completed ? <FaCheck size={14} /> : <FaCheck size={14} className="opacity-20" />}
              </div>

              {/* Step Title and Subtitle */}
              <div className="text-center mt-2">
                <p 
                  className={`text-[18px] font-bold ${
                    step.completed ? "text-black" : "text-gray-400"
                  }`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {step.title}
                </p>
                <p className="text-[15px] font-normal text-gray-500" style={{ fontFamily: 'var(--font-inter)' }}>{step.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OrderTrackingPartTow;
