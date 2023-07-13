import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleSelect = (event) => {
    navigate(`/profession/${event.target.value}`);
  };

  return (
    <div>
      <h1>Job Skills Analyzer</h1>
      <p>Welcome to the Job Skills Analyzer. Select a profession to get started.</p>
      <select onChange={handleSelect}>
        <option value="">Select a profession</option>
        <option value="machineLearningEngineer">Machine Learning Engineer</option>
        <option value="dataScientist">Data Scientist</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
}

export default HomePage;
