import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin, Clock, CheckCircle } from 'lucide-react'

// Mock data for demonstration
const reports = [
  { id: 1, title: 'Kerusakan Tebing', description: 'Kerusakan yang terjadi pada tebing di RT 01 RW 02. Tebing amblas dan menyebabkan kerusakan pada jalan yang juga merangsek ke jalan utama warga ini. Diperkirakan akan terjadi ke Sungai Ciliwung di saat kondisi debit air meningkat.', location: 'RT 01 RW 02, Kec. Cisarua', category: 'Kerusakan Infrastruktur', status: 'Belum ditangani', date: '2024-03-15', lat: -6.689, lng: 106.936, image: 'https://images.unsplash.com/photo-1626253836258-bd0c4b6929d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { id: 2, title: 'Saluran Air Tersumbat', description: 'Saluran air tersumbat', location: 'RT 02 RW 03', category: 'Saluran Air', status: 'Sedang ditangani', date: '2024-03-14', lat: -6.691, lng: 106.938 },
  { id: 3, title: 'Limbah Organik Berserakan', description: 'Limbah organik berserakan', location: 'Pasar Tradisional', category: 'Limbah Organik', status: 'Sudah ditangani', date: '2024-03-13', lat: -6.687, lng: 106.934 },
]

const statusColors = {
  'Belum ditangani': 'bg-red-500',
  'Sedang ditangani': 'bg-yellow-500',
  'Sudah ditangani': 'bg-green-500',
}

const statusIcons = {
  'Belum ditangani': <Clock className="inline-block mr-1 text-red-500" size={16} />,
  'Sedang ditangani': <Clock className="inline-block mr-1 text-yellow-500" size={16} />,
  'Sudah ditangani': <CheckCircle className="inline-block mr-1 text-green-500" size={16} />,
}

const customIcon = new Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

const Dashboard: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState(reports[0])

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Dashboard Monitoring</h1>
      <div className="flex-grow flex">
        <div className="w-1/3 bg-white shadow-md rounded-lg overflow-hidden mr-4">
          {selectedReport && (
            <div className="p-4">
              <img src={selectedReport.image} alt={selectedReport.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-bold mb-2">{selectedReport.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                <MapPin className="inline-block mr-1" size={16} />
                {selectedReport.location}
              </p>
              <p className="text-sm mb-2">
                {statusIcons[selectedReport.status as keyof typeof statusIcons]}
                {selectedReport.status}
              </p>
              <p className="text-sm mb-4">{selectedReport.date}</p>
              <p className="text-sm">{selectedReport.description}</p>
            </div>
          )}
        </div>
        <div className="flex-grow bg-white shadow-md rounded-lg overflow-hidden">
          <MapContainer center={[-6.689, 106.936]} zoom={15} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {reports.map((report) => (
              <Marker
                key={report.id}
                position={[report.lat, report.lng]}
                icon={customIcon}
                eventHandlers={{
                  click: () => setSelectedReport(report),
                }}
              >
                <Popup>
                  <div>
                    <h3 className="font-bold">{report.title || report.category}</h3>
                    <p>{report.description}</p>
                    <p className="text-sm">
                      {statusIcons[report.status as keyof typeof statusIcons]}
                      {report.status}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        {Object.entries(statusColors).map(([status, color]) => (
          <div key={status} className="flex items-center">
            <div className={`w-4 h-4 rounded-full ${color} mr-2`}></div>
            <span>{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard