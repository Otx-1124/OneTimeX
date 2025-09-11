import React, { useState, useEffect } from "react";
import { Trash2, Package, Receipt, ShoppingCart } from "lucide-react";

const UserOrder = ({ confirmOrder = [], orderStatus }) => {
  const [orders, setOrders] = useState([]);

  // Load from in-memory state OR confirmOrder on first render
  useEffect(() => {
    const storedOrders = localStorage.getItem("confirmed-Orders");
    if (confirmOrder.length > 0) {
      setOrders(confirmOrder);
      localStorage.setItem("confirmed-Orders", JSON.stringify(confirmOrder));
    } else if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("confirmed-Orders", JSON.stringify(orders));
  }, [orders]);

  // Delete function
  const handleDelete = (orderToDelete) => {
    const updatedOrders = orders.filter((item) => item !== orderToDelete);
    setOrders(updatedOrders);
  };

  // Calculate grand total
  const grandTotal = orders.reduce((acc, order) => {
    const price = parseFloat(order.price.replace(/[^\d.]/g, "")) || 0;
    return acc + price * order.quantity;
  }, 0);

  // Calculate total items
  const totalItems = orders.reduce((acc, order) => acc + order.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4 mt-10">
      <div className="max-w-5xl py-10 mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6">
          <div className="px-8 py-6 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Receipt className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-slate-900">
                    Order Summary
                  </h1>
                  <p className="text-slate-500 text-sm">
                    Status:{" "}
                    <span className="font-medium text-blue-600">
                      {orderStatus}
                    </span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 text-slate-600">
                  <Package className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {totalItems} items
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {orders && orders.length > 0 ? (
          <div className="space-y-4">
            {/* Order Items */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Items Ordered
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                {orders.map((order, index) => {
                  const price =
                    parseFloat(order.price.replace(/[^\d.]/g, "")) || 0;
                  const totalPrice = (price * order.quantity).toFixed(2);

                  return (
                    <div
                      key={index}
                      className="px-6 py-5 hover:bg-slate-25 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        {/* Product Info */}
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="relative">
                            <img
                              src={order.logo}
                              alt={order.name}
                              className="w-16 h-16 object-contain bg-slate-50 border-2 border-slate-200 rounded-lg p-2"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-900 text-lg">
                              {order.name}
                            </h3>

                            <div className="flex items-center mt-2 space-x-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                                Qty: {order.quantity}
                              </span>
                              <span className="text-sm text-slate-500">
                                ₹{price.toFixed(2)} per unit
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Price and Actions */}
                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-slate-900">
                              ₹{totalPrice}
                            </div>
                          </div>
                          <button
                            onClick={() => handleDelete(order)}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                            title="Remove item"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Total Amount
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Including all items ({totalItems} items)
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-emerald-600">
                      ₹{grandTotal.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-slate-50 rounded-b-xl border-t border-slate-100">
                <div className="flex justify-end space-x-3">
                  <button className="px-6 py-2.5 text-slate-700 bg-white border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-200">
                    Continue Shopping
                  </button>
                  <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 py-16">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                No Orders Found
              </h3>
              <p className="text-slate-500 max-w-md mx-auto">
                You haven't placed any orders yet. Start shopping to see your
                items here.
              </p>
              <button className="mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                Start Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserOrder;
