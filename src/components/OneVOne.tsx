'use client';

export default function OneVOne() {
  return (
    <div className="p-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-red-800 mb-4">1v1 Challenge</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-gray-700">Find Opponent</h3>
            <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Start Matchmaking
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-gray-700">Active Matches</h3>
            <p className="text-gray-600">No active matches</p>
          </div>
        </div>
      </div>
    </div>
  );
}

