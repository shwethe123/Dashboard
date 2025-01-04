import React, { useState } from 'react';

export default function Reports() {
  const reportsData = [
    { id: 1, name: 'Sales Report', category: 'Sales', date: '2024-10-01', status: 'Completed' },
    { id: 2, name: 'User Growth Report', category: 'Growth', date: '2024-10-02', status: 'Pending' },
    { id: 3, name: 'Traffic Report', category: 'Traffic', date: '2024-10-03', status: 'Completed' },
    { id: 4, name: 'Conversion Rate Report', category: 'Sales', date: '2024-10-04', status: 'Completed' },
  ];

  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredReports = reportsData.filter((report) => {
    return (
      (filterCategory ? report.category === filterCategory : true) &&
      (filterStatus ? report.status === filterStatus : true)
    );
  });

  return (
    <div className="bg-gray-100 text-gray-800 p-6 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">Reports</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Filter Reports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div>
            <label htmlFor="category" className="block text-sm font-medium">Category</label>
            <select
              id="category"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Sales">Sales</option>
              <option value="Growth">Growth</option>
              <option value="Traffic">Traffic</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium">Status</label>
            <select
              id="status"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div>
            <label htmlFor="dateRange" className="block text-sm font-medium">Date Range</label>
            <input
              type="date"
              id="dateRange"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold">Report Name</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Category</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Date</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Status</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-100">
                <td className="py-3 px-6 text-sm">{report.name}</td>
                <td className="py-3 px-6 text-sm">{report.category}</td>
                <td className="py-3 px-6 text-sm">{report.date}</td>
                <td
                  className={`py-3 px-6 text-sm font-semibold ${
                    report.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                  }`}
                >
                  {report.status}
                </td>
                <td className="py-3 px-6 text-sm flex space-x-4">
                  <button className="text-blue-600 hover:text-blue-700">View</button>
                  <button className="text-green-600 hover:text-green-700">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="mt-6 flex flex-wrap gap-4">
        <button className="py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold">
          Generate Report
        </button>
        <button className="py-3 px-6 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold">
          Export to CSV
        </button>
        <button className="py-3 px-6 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white font-semibold">
          Export to PDF
        </button>
      </div>
    </div>
  );
}
