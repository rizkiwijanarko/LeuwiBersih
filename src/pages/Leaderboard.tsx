import React from 'react'
import { Trophy, Users } from 'lucide-react'

// Mock data for demonstration
const leaderboardData = [
  { id: 1, name: 'RT 01 RW 02', points: 1250, reports: 25, cleanups: 5 },
  { id: 2, name: 'RT 03 RW 01', points: 1100, reports: 22, cleanups: 4 },
  { id: 3, name: 'RT 02 RW 03', points: 950, reports: 19, cleanups: 3 },
  { id: 4, name: 'RT 04 RW 02', points: 800, reports: 16, cleanups: 2 },
  { id: 5, name: 'RT 01 RW 03', points: 750, reports: 15, cleanups: 2 },
]

const Leaderboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Peringkat Kebersihan RT/RW</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Peringkat</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">RT/RW</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Poin</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Laporan</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Gotong Royong</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaderboardData.map((item, index) => (
              <tr key={item.id} className={index === 0 ? 'bg-yellow-100' : ''}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {index === 0 && <Trophy className="inline-block mr-2 text-yellow-500" size={20} />}
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-blue-600">{item.points}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.reports}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.cleanups}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-blue-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Users className="mr-2" size={24} />
          Cara Mendapatkan Poin
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Laporkan masalah kebersihan (50 poin per laporan)</li>
          <li>Berpartisipasi dalam kegiatan gotong royong (100 poin per kegiatan)</li>
          <li>Menyelesaikan tantangan kebersihan bulanan (200 poin)</li>
          <li>Mengajak tetangga untuk menggunakan aplikasi (25 poin per undangan)</li>
        </ul>
      </div>
    </div>
  )
}

export default Leaderboard