import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProfessionDetailPage() {
  let { id } = useParams(); // 'id' will be the profession selected from the dropdown

  const [professionData, setProfessionData] = useState(null);

  useEffect(() => {
    // Here, fetch the data for the selected profession from your backend or API
    // For now, let's use a placeholder
    const placeholderData = {
      name: id,
      skills: {
        python: '60%',
        javascript: '40%',
        // more skills...
      },
    };

    setProfessionData(placeholderData);
  }, [id]); // The effect depends on 'id', so it will re-run whenever 'id' changes

  if (!professionData) {
    // Data is still loading
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profession: {professionData.name}</h1>
      <h2>Skills:</h2>
      <ul>
        {Object.entries(professionData.skills).map(([skill, percentage]) => (
          <li key={skill}>{skill}: {percentage}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfessionDetailPage;
