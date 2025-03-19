// pages/receptionist.js
'use client'
import { useState } from 'react';

export default function Receptionist() {
  const [reservation, setReservation] = useState({
    name: '',
    roomType: 'Single Bed',
    ac: 'AC',
    arrivalDate: '',
    stayDuration: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process reservation logic here
    alert('Reservation confirmed for ' + reservation.name);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center text-blue-700">Receptionist Page</h1>
      <p className="mt-4 text-center text-gray-600">Manage reservations and check-ins.</p>

      {/* Reservation Form */}
      <div className="mt-8 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold text-blue-600">Check-in New Guest</h2>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Guest Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={reservation.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="roomType" className="block text-sm font-medium text-gray-600">Room Type</label>
              <select
                id="roomType"
                name="roomType"
                value={reservation.roomType}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              >
                <option>Single Bed</option>
                <option>Double Bed</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="ac" className="block text-sm font-medium text-gray-600">AC</label>
              <select
                id="ac"
                name="ac"
                value={reservation.ac}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              >
                <option>AC</option>
                <option>Non-AC</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-full">
              <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-600">Arrival Date</label>
              <input
                type="date"
                id="arrivalDate"
                name="arrivalDate"
                value={reservation.arrivalDate}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="stayDuration" className="block text-sm font-medium text-gray-600">Duration (Nights)</label>
              <input
                type="number"
                id="stayDuration"
                name="stayDuration"
                value={reservation.stayDuration}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full mt-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Confirm Check-in
          </button>
        </form>
      </div>
    </div>
  );
}
