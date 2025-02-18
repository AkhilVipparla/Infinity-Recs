import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">YOUR DASHBOARD</h1>
      <input
        type="text"
        placeholder="Enter something..."
        className="p-2 border border-gray-300 rounded-lg shadow-md w-80"
      />
    </div>
  );
};

export default Dashboard;
