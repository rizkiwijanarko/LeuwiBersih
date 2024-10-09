import React, { useState } from 'react'
import { Camera, Upload, MapPin } from 'lucide-react'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import { LatLng } from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface FormData {
  title: string;
  category: string;
  description: string;
  address: string;
  coordinates: LatLng | null;
  photo: File | null;
}

const LocationMarker: React.FC<{ position: LatLng | null; setPosition: (position: LatLng) => void }> = ({ position, setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} />
  )
}

const Report: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    category: '',
    description: '',
    address: '',
    coordinates: null,
    photo: null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, photo: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the formData to your backend
  }

  const setMapPosition = (position: LatLng) => {
    setFormData(prev => ({ ...prev, coordinates: position }))
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Laporkan Masalah Sanitasi</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-2 font-semibold">Judul Laporan</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block mb-2 font-semibold">Kategori</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Pilih kategori</option>
            <option value="sampah">Sampah Rumah Tangga</option>
            <option value="saluran_air">Saluran Air</option>
            <option value="limbah">Limbah Organik</option>
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 font-semibold">Deskripsi Masalah</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            rows={4}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 font-semibold">Alamat</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Titik Koordinat</label>
          <div className="h-64 rounded-md overflow-hidden">
            <MapContainer center={[-6.7, 106.9]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationMarker position={formData.coordinates} setPosition={setMapPosition} />
            </MapContainer>
          </div>
          {formData.coordinates && (
            <p className="mt-2 text-sm">
              Koordinat: {formData.coordinates.lat.toFixed(6)}, {formData.coordinates.lng.toFixed(6)}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="photo" className="block mb-2 font-semibold">Unggah Foto</label>
          <div className="flex items-center space-x-2">
            <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              <Camera className="inline-block mr-2" size={20} />
              Pilih Foto
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
            </label>
            {formData.photo && <span className="text-sm text-gray-600">{formData.photo.name}</span>}
          </div>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
          <Upload className="inline-block mr-2" size={20} />
          Kirim Laporan
        </button>
      </form>
    </div>
  )
}

export default Report