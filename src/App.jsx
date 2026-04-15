import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Download from './pages/Download';
import Feed from './pages/Feed';
import Enrollment from './pages/Enrollment';
import FinishSetup from './pages/FinishSetup';
import ConnectAccounts from './pages/ConnectAccounts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/download" element={<Download />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/finish-setup" element={<FinishSetup />} />
        <Route path="/connect-accounts" element={<ConnectAccounts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
