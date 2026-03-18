import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold text-green-400">Admin Control Portal</h1>
      <p className="mt-4 text-gray-400">Welcome Admin! Intha portal-la unga special controls irukkum.</p>
      
      {/* Admin-ukku mattum theriya vendiya extra cards or tables inga add pannunga */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-[#1a1f24] border border-gray-700 rounded-xl">
          <h3 className="font-bold text-lg text-white">Total Staffs</h3>
          <p className="text-2xl font-bold text-green-500">25</p>
        </div>
        {/* Innum pala cards... */}
      </div>
    </div>
  );
};

export default AdminDashboard;