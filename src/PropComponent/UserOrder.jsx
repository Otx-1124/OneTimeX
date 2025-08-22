import React, { useEffect } from "react";

const UserOrder = ({ confirmOrder , orderStatus } ) => {
  // ✅ Calculate grand total
  const grandTotal = confirmOrder?.reduce((acc, order) => {
    const price = parseFloat(order.price.replace(/[^\d.]/g, "")) || 0;
    return acc + price * order.quantity;
  }, 0);

  useEffect(()=>{
    console.log(orderStatus)
  })

  return (
    <div className="mt-20 container mx-auto px-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full lg:w-[70%] mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
          Your {orderStatus} Order
        </h1>

        {confirmOrder && confirmOrder.length > 0 ? (
          <div className="space-y-4">
            {confirmOrder.map((order, index) => {
              const price = parseFloat(order.price.replace(/[^\d.]/g, "")) || 0;
              const totalPrice = (price * order.quantity).toFixed(2);

              return (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  {/* Left - Logo + Name */}
                  <div className="flex items-center gap-4">
                    <img
                      src={order.logo}
                      alt={order.name}
                      className="w-14 h-14 object-contain bg-white border rounded-xl p-1"
                    />
                    <div className="w-20">
                      <h2 className="font-semibold text-gray-900">{order.name}</h2>
                      <p className="text-sm text-gray-500">{order.option}</p>
                    </div>
                  </div>

                  {/* Middle - Quantity */}
                  <div className="text-gray-600 font-medium">
                    Qty: {order.quantity}
                  </div>

                  {/* Right - Price */}
                  <div className="text-right w-[20%]">
                    <p className="font-bold text-lg text-gray-800">
                      ₹{totalPrice}
                    </p>
                    <p className="text-sm text-gray-500">
                      (₹{price} each)
                    </p>
                  </div>
                </div>
              );
            })}

            {/* ✅ Grand Total */}
            <div className="flex justify-between items-center border-t pt-4 mt-6">
              <h2 className="text-xl font-bold text-gray-800">Grand Total</h2>
              <p className="text-2xl font-extrabold text-green-600">
                ₹{grandTotal.toFixed(2)}
              </p>
            </div>
          </div>
        ) : (
          <h1 className="text-center text-gray-600">No Orders Found</h1>
        )}
      </div>
    </div>
  );
};

export default UserOrder;