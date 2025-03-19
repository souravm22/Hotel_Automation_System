'use client'
import { useState } from 'react';

export default function Caterer() {
  const [order, setOrder] = useState({
    foodItem: '',
    quantity: 1,
    tokenNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process order logic here
    alert('Order placed for ' + order.foodItem);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center text-blue-700">Caterer Page</h1>
      <p className="mt-4 text-center text-gray-600">Manage catering orders and update guest bills.</p>

      {/* Catering Order Form */}
      <div className="mt-8 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold text-blue-600">Add Catering Order</h2>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <div className="w-full">
            <label htmlFor="foodItem" className="block text-sm font-medium text-gray-600">Food Item</label>
            <input
              type="text"
              id="foodItem"
              name="foodItem"
              value={order.foodItem}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={order.quantity}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="tokenNumber" className="block text-sm font-medium text-gray-600">Token Number</label>
            <input
              type="text"
              id="tokenNumber"
              name="tokenNumber"
              value={order.tokenNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          <button type="submit" className="w-full mt-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Add Order
          </button>
        </form>
      </div>
    </div>
  );
}
