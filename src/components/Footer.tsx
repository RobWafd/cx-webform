import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto px-5 py-6 text-[11px] text-wafd-text leading-[18px]">
      <div className="bg-gray-100 p-4 mb-4 rounded">
        <p>This is a service message from WaFd Bank.</p>
        <p>WaFd Bank | 428 Pike Street Seattle, WA 98101</p>
        <p>&copy; {new Date().getFullYear()} WaFd Bank. All Rights Reserved.</p>
        <p>
          <a href="#" className="text-wafd-blue underline">Privacy</a> &amp;{' '}
          <a href="#" className="text-wafd-blue underline">Terms of Use</a>
        </p>
        <p>Member FDIC</p>
      </div>
    </footer>
  );
}



