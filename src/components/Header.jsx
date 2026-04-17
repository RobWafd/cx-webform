import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hexagon as Logo } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-wafd-dark text-white px-5 py-4 flex justify-between items-center relative z-50 shadow-md">
      <Link to="/" className="flex items-center gap-2 no-underline text-white">
        <Logo size={24} color="#009639" fill="#009639" />
        <span className="font-semibold text-lg hover:text-gray-200 transition-colors">WaFd Bank</span>
      </Link>

      <button onClick={toggleMenu} className="focus:outline-none cursor-pointer p-1 hover:text-gray-300 transition-colors bg-transparent border-none text-white flex items-center">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <nav className="absolute top-[60px] md:top-[68px] left-0 w-full bg-wafd-dark shadow-2xl border-t border-gray-700 flex flex-col py-2 z-50 transition-all duration-300">
          <Link to="/" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-gray-700 font-medium border-b border-gray-700/50">Welcome Page</Link>
          <Link to="/enrollment" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-gray-700 font-medium border-b border-gray-700/50">Scenario 3.a - Enrollment</Link>
          <Link to="/finish-setup" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-gray-700 font-medium border-b border-gray-700/50">Scenario 4.a - Direct Deposit</Link>
          <Link to="/connect-accounts" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-gray-700 font-medium border-b border-gray-700/50">Scenario 4.b - Connect Accounts</Link>
          <Link to="/voice-banking" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-gray-700 font-medium border-b border-gray-700/50">Scenario 5.a - Voice Banking</Link>
          <Link to="/pro-tips" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-gray-700 font-medium border-b border-gray-700/50">Scenario 6.a - Pro Tips</Link>
          <Link to="/login-instructions" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-gray-700 font-medium border-b border-gray-700/50">Scenario 6.b - Login Instructions</Link>
          <Link to="/rewards-benefits" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-gray-700 font-medium border-b border-gray-700/50">Scenario 7.a - Rewards Overview</Link>
          <Link to="/access-rewards" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-gray-700 font-medium">Scenario 7.b - Access Rewards</Link>
        </nav>
      )}
    </header>
  );
}
