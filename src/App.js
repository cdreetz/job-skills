import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProfessionDetailPage from './ProfessionDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profession/:id" element={<ProfessionDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
