import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Droplet, User, LogOut, Award, ChevronDown } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <header className="bg-yellow-400 text-black shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Droplet size={32} />
          <span className="text-2xl font-bold">LeuwiClean</span>
        </Link>
        <nav className="flex items-center">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-600">Beranda</Link></li>
            <li><Link to="/report" className="hover:text-blue-600">Laporan</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-600">Peta</Link></li>
            <li><Link to="/leaderboard" className="hover:text-blue-600">Informasi</Link></li>
            {user && user.role === 'admin' && (
              <li><Link to="/admin/dashboard" className="hover:text-blue-600">Admin Dashboard</Link></li>
            )}
          </ul>
          {user ? (
            <div className="ml-6 relative" ref={dropdownRef}>
              <button
                className="flex items-center space-x-2 focus:outline-none"
                onClick={toggleDropdown}
              >
                <User size={24} className="text-blue-600" />
                <ChevronDown size={16} className={`text-blue-600 transition-transform duration-200 ${showDropdown ? 'transform rotate-180' : ''}`} />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    <p className="font-semibold">{user.name}</p>
                    <p className="flex items-center mt-1">
                      <Award size={16} className="mr-1 text-yellow-500" />
                      <span>{user.points || 0} poin</span>
                    </p>
                  </div>
                  <hr className="my-1" />
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut size={16} className="inline-block mr-1" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="ml-6 flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              <User size={20} />
              <span>Masuk</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header