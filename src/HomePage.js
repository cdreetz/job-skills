import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleSelect = (event) => {
    navigate(`/profession/${event.target.value}`);
  };

  return (
    <div style={{ marginTop: '2rem', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Job Skills Analyzer
      </h1>
      <p>Welcome to the Job Skills Analyzer. Select a profession to get started.</p>
      <select onChange={handleSelect} style={{ marginTop: '1rem' }}>
        <option value="">Select a profession</option>
        <option value="machineLearningEngineer">Machine Learning Engineer</option>
        <option value="dataScientist">Data Scientist</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
}

export default HomePage;
