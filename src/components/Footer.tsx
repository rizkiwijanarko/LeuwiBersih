import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-400 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Kontak</h3>
            <p>leuwicleandesa@gmail.com</p>
            <p>+62 857 2733 7328</p>
            <p>Jl. Sinar Utip No.73 Leuwimalang</p>
            <p>Cisarua Bogor 16750</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Tautan</h3>
            <ul>
              <li><a href="#" className="hover:underline">Laporan</a></li>
              <li><a href="#" className="hover:underline">Peta Digital</a></li>
              <li><a href="#" className="hover:underline">Informasi Umum</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Bantuan</h3>
            <ul>
              <li><a href="#" className="hover:underline">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:underline">Syarat dan Ketentuan</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-600"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-pink-600"><Instagram /></a>
              <a href="#" className="hover:text-red-600"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Hak Cipta Dilindungi</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer