import React from 'react';
import { Menu, Hexagon } from 'lucide-react';

export default function Header() {
  return (
    <header style={{ width: '100%' }}>
      {/* Top White Bar */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '16px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--wafd-green)' }}>
          <Hexagon fill="var(--wafd-green)" size={28} />
        </div>
        <Menu size={24} color="var(--wafd-dark)" />
      </div>

      {/* Green WaFd Bank Bar */}
      <div style={{ 
        backgroundColor: 'var(--wafd-green)', 
        color: '#ffffff', 
        padding: '12px 20px',
        fontWeight: '600',
        fontSize: '18px'
      }}>
        WaFd Bank
      </div>
    </header>
  );
}
