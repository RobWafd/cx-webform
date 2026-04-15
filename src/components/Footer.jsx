import React from 'react';

export default function Footer() {
  const currentDateTime = new Date().toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).replace(',', '');

  return (
    <footer style={{
      marginTop: 'auto',
      padding: '24px 20px',
      fontSize: '11px',
      color: '#6b7280',
      lineHeight: '1.4'
    }}>
      <div style={{
        backgroundColor: '#f3f4f6', /* Light gray disclaimer box */
        padding: '16px',
        marginBottom: '16px',
        borderRadius: '4px'
      }}>
        <p>This is a service message from WaFd Bank.</p>
        <p>WaFd Bank | 428 Pike Street Seattle, WA 98101</p>
        <p>&copy; {new Date().getFullYear()} WaFd Bank. All Rights Reserved.</p>
        <p>
          <a href="#" style={{ color: 'var(--wafd-blue)', textDecoration: 'underline' }}>Privacy</a> &amp;{' '}
          <a href="#" style={{ color: 'var(--wafd-blue)', textDecoration: 'underline' }}>Terms of Use</a>
        </p>
        <p>Member FDIC</p>
      </div>
    </footer>
  );
}
