import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChevronDown, Bell, Search } from 'lucide-react';

const data = [
  { name: '1', value: 150 },
  { name: '2', value: 300 },
  { name: '3', value: 250 },
  { name: '4', value: 400 },
  { name: '5', value: 300 },
  { name: '6', value: 450 },
  { name: '7', value: 500 },
  { name: '8', value: 400 },
  { name: '9', value: 450 },
];

const reportsInProgress = [
  { id: 1, title: 'Saluran Air Bocor', description: 'deskripsi', location: 'lokasi' },
  { id: 2, title: 'Saluran Air Mempat', description: 'deskripsi', location: 'lokasi' },
  { id: 3, title: 'Sepatu Sneakers', description: 'deskripsi', location: 'lokasi' },
  { id: 4, title: 'Reglow paket Glow', description: 'deskripsi', location: 'lokasi' },
  { id: 5, title: 'Mini Bricks Nano Block', description: 'deskripsi', location: 'lokasi' },
];

const reportsData = [
  { id: 1, date: '02/11/24', name: 'Saluran Air Tersumbat', category: 'Saluran Air', description: 'Saluran Air tersumbat, air meluap ke...', location: 'Villa Togrent', status: 'Selesai' },
  { id: 2, date: '02/11/24', name: 'Saluran Air Tersumbat', category: 'Saluran Air', description: 'Saluran Air tersumbat, air meluap ke...', location: 'Lokasi', status: 'Dalam Penanganan' },
  { id: 3, date: '02/11/24', name: 'Saluran Air Tersumbat', category: 'Saluran Air', description: 'Saluran Air tersumbat, air meluap ke...', location: 'Villa Togrent', status: 'Selesai' },
  { id: 4, date: '02/11/24', name: 'Saluran Air Tersumbat', category: 'Saluran Air', description: 'Saluran Air tersumbat, air meluap ke...', location: 'Lokasi', status: 'Dalam Penanganan' },
  { id: 5, date: '02/11/24', name: 'Saluran Air Tersumbat', category: 'Saluran Air', description: 'Saluran Air tersumbat, air meluap ke...', location: 'Villa Togrent', status: 'Selesai' },
];

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Bulanan');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-yellow-400 text-black">
        <div className="p-4">
          <h1 className="text-2xl font-bold">LeuwiClean</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="block py-2 px-4 bg-green-600 text-white">Dashboard</a>
          <a href="#" className="block py-2 px-4 hover:bg-yellow-300">Laporan</a>
          <a href="#" className="block py-2 px-4 hover:bg-yellow-300">?</a>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <button className="w-full py-2 bg-white text-black rounded flex items-center justify-center">
            <ChevronDown className="mr-2" size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 border rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <Bell size={24} />
            <div className="flex items-center space-x-2">
              <span>Admin</span>
              <ChevronDown size={20} />
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Laporan Masuk</h3>
              <p className="text-3xl font-bold">220</p>
              <p className="text-sm text-green-500">↑ 34.1% dibandingkan bulan lalu</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Belum ditangani</h3>
              <p className="text-3xl font-bold">36</p>
              <p className="text-sm text-red-500">↓ 23.33% dibandingkan bulan lalu</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Sedang ditangani</h3>
              <p className="text-3xl font-bold">5</p>
              <p className="text-sm text-green-500">↑ 27.9% dibandingkan bulan lalu</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Laporan Selesai</h3>
              <p className="text-3xl font-bold">129</p>
              <p className="text-sm text-red-500">↓ 7.13% dibandingkan bulan lalu</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Grafik Laporan</h3>
              <div className="flex space-x-2 mb-4">
                <button
                  className={`px-4 py-2 rounded ${activeTab === 'Harian' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setActiveTab('Harian')}
                >
                  Harian
                </button>
                <button
                  className={`px-4 py-2 rounded ${activeTab === 'Bulanan' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setActiveTab('Bulanan')}
                >
                  Bulanan
                </button>
                <button
                  className={`px-4 py-2 rounded ${activeTab === 'Tahunan' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setActiveTab('Tahunan')}
                >
                  Tahunan
                </button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Laporan Sedang Ditangani</h3>
              <ul className="space-y-2">
                {reportsInProgress.map((report) => (
                  <li key={report.id} className="border-b pb-2">
                    <h4 className="font-semibold">{report.title}</h4>
                    <p className="text-sm text-gray-600">{report.description}</p>
                    <p className="text-sm text-gray-500">{report.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Laporan Masuk</h3>
              <select className="border p-2 rounded">
                <option>Status</option>
                <option>Selesai</option>
                <option>Dalam Penanganan</option>
                <option>Belum Ditangani</option>
              </select>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Tanggal</th>
                  <th className="p-2 text-left">Nama Laporan</th>
                  <th className="p-2 text-left">Kategori</th>
                  <th className="p-2 text-left">Isi Laporan</th>
                  <th className="p-2 text-left">Lokasi</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {reportsData.map((report) => (
                  <tr key={report.id} className="border-b">
                    <td className="p-2">{report.date}</td>
                    <td className="p-2">{report.name}</td>
                    <td className="p-2">{report.category}</td>
                    <td className="p-2">{report.description}</td>
                    <td className="p-2">{report.location}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded ${
                        report.status === 'Selesai' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-gray-200 rounded">Sebelumnya</button>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-yellow-400 rounded">1</button>
                <button className="px-3 py-1 bg-gray-200 rounded">2</button>
                <button className="px-3 py-1 bg-gray-200 rounded">3</button>
                <span>...</span>
                <button className="px-3 py-1 bg-gray-200 rounded">67</button>
                <button className="px-3 py-1 bg-gray-200 rounded">68</button>
              </div>
              <button className="px-4 py-2 bg-gray-200 rounded">Selanjutnya</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;