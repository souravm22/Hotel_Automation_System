export default function Guest() {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-semibold text-center text-blue-700">Guest Page</h1>
        <p className="mt-4 text-center text-gray-600">View your reservations, check your loyalty points, and more.</p>
  
        {/* Reservation Form */}
        <div className="mt-8 p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold text-blue-600">Make a Reservation</h2>
          <form className="space-y-4 mt-4">
            <div className="flex space-x-4">
              <div className="w-full">
                <label htmlFor="roomType" className="block text-sm font-medium text-gray-600">Room Type</label>
                <select id="roomType" className="mt-1 p-2 w-full border border-gray-300 rounded">
                  <option>Single Bed</option>
                  <option>Double Bed</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="ac" className="block text-sm font-medium text-gray-600">AC</label>
                <select id="ac" className="mt-1 p-2 w-full border border-gray-300 rounded">
                  <option>AC</option>
                  <option>Non-AC</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-full">
                <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-600">Arrival Date</label>
                <input type="date" id="arrivalDate" className="mt-1 p-2 w-full border border-gray-300 rounded" />
              </div>
              <div className="w-full">
                <label htmlFor="stayDuration" className="block text-sm font-medium text-gray-600">Duration (Nights)</label>
                <input type="number" id="stayDuration" className="mt-1 p-2 w-full border border-gray-300 rounded" />
              </div>
            </div>
            <button type="submit" className="w-full mt-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              Reserve Room
            </button>
          </form>
        </div>
  
        {/* Loyalty Points */}
        <div className="mt-8 p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold text-blue-600">Your Loyalty Points</h2>
          <p className="mt-2 text-lg text-gray-600">You currently have 350 loyalty points.</p>
        </div>
      </div>
    );
  }
  