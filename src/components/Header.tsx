"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-wafd-header text-white px-5 py-[12px] h-[64px] flex justify-between items-center relative z-50 shadow-md">
      {/* Spacer to center logo using flex-between */}
      <div className="w-[32px] md:hidden"></div>
      
      <Link href="/" className="flex items-center no-underline text-white md:ml-0 mx-auto">
        <img src="/wafd-logo.svg" alt="WaFd Bank Logo" className="h-[40px] w-auto object-contain" />
      </Link>

      <button onClick={toggleMenu} className="focus:outline-none cursor-pointer hover:text-gray-300 transition-colors bg-transparent border-none text-white flex items-center p-0">
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {isOpen && (
        <nav className="absolute top-[64px] left-0 w-full bg-wafd-header shadow-2xl border-t border-[#003d3a] flex flex-col py-2 z-50 transition-all duration-300">
          <Link href="/" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-[#003d3a] font-medium border-b border-[#003d3a]/50">Welcome Feed</Link>
          <Link href="/download" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-[#003d3a] font-medium border-b border-[#003d3a]/50">App Download</Link>
          <Link href="/enrollment" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-[#003d3a] font-medium border-b border-[#003d3a]/50">Enrollment</Link>
          <Link href="/finish-setup" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-[#003d3a] font-medium border-b border-[#003d3a]/50">Direct Deposit</Link>
          <Link href="/connect-accounts" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-[#003d3a] font-medium border-b border-[#003d3a]/50">Connect Accounts</Link>
          <Link href="/voice-banking" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-[#003d3a] font-medium border-b border-[#003d3a]/50">Voice Banking</Link>
          <Link href="/pro-tips" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-[#003d3a] font-medium border-b border-[#003d3a]/50">Pro Tips</Link>
          <Link href="/login-instructions" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-[#003d3a] font-medium border-b border-[#003d3a]/50">Login Instructions</Link>
          <Link href="/rewards-benefits" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-[#003d3a] font-medium border-b border-[#003d3a]/50">Rewards Overview</Link>
          <Link href="/access-rewards" onClick={toggleMenu} className="px-6 py-4 text-white no-underline hover:bg-[#003d3a] font-medium">Access Rewards</Link>
        </nav>
      )}
    </header>
  );
}



