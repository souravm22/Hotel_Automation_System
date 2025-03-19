// pages/admin.js
export default function Admin() {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-semibold text-center text-blue-700">Admin Page</h1>
        <p className="mt-4 text-center text-gray-600">Manage room tariffs, view occupancy data, and adjust policies.</p>
  
        {/* Tariff Management */}
        <div className="mt-8 p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold text-blue-600">Manage Room Tariffs</h2>
          <form className="space-y-4 mt-4">
            <div className="flex space-x-4">
              <div className="w-full">
                <label htmlFor="baseTariff" className="block text-sm font-medium text-gray-600">Base Tariff</label>
                <input type="number" id="baseTariff" className="mt-1 p-2 w-full border border-gray-300 rounded" />
              </div>
              <div className="w-full">
                <label htmlFor="occupancyRate" className="block text-sm font-medium text-gray-600">Occupancy Rate (%)</label>
                <input type="number" id="occupancyRate" className="mt-1 p-2 w-full border border-gray-300 rounded" />
              </div>
            </div>
            <button type="submit" className="w-full mt-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              Adjust Tariff
            </button>
          </form>
        </div>
  
        {/* Occupancy Analysis */}
        <div className="mt-8 p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold text-blue-600">Occupancy Analysis</h2>
          <p className="mt-2 text-lg text-gray-600">Average occupancy rate for this month: 75%</p>
          {/* Additional analytics here */}
        </div>
      </div>
    );
  }
  