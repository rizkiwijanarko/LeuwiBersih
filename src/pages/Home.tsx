import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, FileCheck, ClipboardList, UserCheck, CheckCircle } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">LeuwiClean</h1>
          <p className="text-xl mb-8">Website untuk membangun desa sehat dengan meningkatkan sanitasi dan kebersihan</p>
          <Link to="/report" className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
            Buat Laporan
          </Link>
        </div>
      </section>

      {/* Mengapa LeuwiClean Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Mengapa LeuwiClean?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">LeuwiClean</h3>
            <p className="text-gray-600">
              Aplikasi ini dirancang khusus untuk memudahkan Anda dalam melaporkan berbagai masalah sanitasi dan kebersihan yang terjadi di desa Leuwimalang.
            </p>
            <p className="text-gray-600 mt-4">
              Kami mengajak seluruh masyarakat untuk bersama-sama menjaga kebersihan dan sanitasi lingkungan dengan menggunakan aplikasi LeuwiClean. Dengan LeuwiClean, setiap laporan yang Anda buat akan langsung diteruskan kepada pihak terkait desa, sehingga masalah dapat segera ditangani.
            </p>
            <p className="text-gray-600 mt-4">
              Kami percaya bahwa kebersihan adalah tanggung jawab bersama, dan setiap suara Anda sangat berarti dalam menciptakan lingkungan yang lebih bersih dan sehat.
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Desa Bersih" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Apa Kata Mereka</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Budi" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">Budi</h3>
                  <p className="text-sm text-gray-600">Warga Desa</p>
                </div>
              </div>
              <p className="text-gray-600">"Dengan adanya LeuwiClean, saya merasa lebih mudah untuk melaporkan masalah kebersihan di lingkungan saya. Responnya cepat dan efektif!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Annisa" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">Annisa</h3>
                  <p className="text-sm text-gray-600">Ketua RT</p>
                </div>
              </div>
              <p className="text-gray-600">"Sebagai ketua RT, LeuwiClean sangat membantu saya dalam mengelola laporan warga dan mengkoordinasikan tindakan perbaikan. Terima kasih LeuwiClean!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Pak Heru" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">Pak Heru</h3>
                  <p className="text-sm text-gray-600">Kepala Desa</p>
                </div>
              </div>
              <p className="text-gray-600">"LeuwiClean telah membantu kami meningkatkan partisipasi warga dalam menjaga kebersihan desa. Ini adalah langkah besar menuju desa yang lebih sehat dan bersih."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Sebelum dan Sesudah</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" alt="Sebelum" className="w-full h-auto rounded-lg shadow-md" />
            <p className="text-center mt-2 font-semibold">Sebelum</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1313&q=80" alt="Sesudah" className="w-full h-auto rounded-lg shadow-md" />
            <p className="text-center mt-2 font-semibold">Sesudah</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Langkah-Langkah</h2>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="bg-yellow-400 rounded-full p-4 inline-block mb-4">
                <ClipboardList size={32} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Tulis Laporan</h3>
              <p className="text-sm text-gray-600">Laporkan masalah sanitasi yang Anda temui</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 rounded-full p-4 inline-block mb-4">
                <MapPin size={32} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Verifikasi</h3>
              <p className="text-sm text-gray-600">Tim kami akan memverifikasi laporan Anda</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 rounded-full p-4 inline-block mb-4">
                <FileCheck size={32} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Tindak Lanjut</h3>
              <p className="text-sm text-gray-600">Masalah akan ditindaklanjuti oleh pihak terkait</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 rounded-full p-4 inline-block mb-4">
                <UserCheck size={32} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Beri Tanggapan</h3>
              <p className="text-sm text-gray-600">Berikan tanggapan Anda terhadap penanganan masalah</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 rounded-full p-4 inline-block mb-4">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Selesai</h3>
              <p className="text-sm text-gray-600">Laporan ditutup setelah masalah terselesaikan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ayo Bergabung dalam Menjaga Kebersihan Desa Leuwimalang</h2>
          <p className="text-xl mb-8">Mari bersama-sama menciptakan lingkungan yang lebih bersih dan sehat untuk kita semua.</p>
          <Link to="/register" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home