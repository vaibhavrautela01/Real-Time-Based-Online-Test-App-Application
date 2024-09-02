import React, { useState, useEffect } from 'react';
import Header from './header_log3';

function Admin_dashboard()  {
  const [universityData, setUniversityData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/admin.json')
      .then(response => response.json())
      .then(data => setUniversityData(data))
      .catch(error => {
        console.error('Error fetching the university data:', error);
        setError('Error fetching data.');
      });
  }, []);

  return (
    <div>
      <Header/>
      {error ? (
        <h1>{error}</h1>
      ) : universityData.length > 0 ? (
        <div>
          {universityData.map((item, index) => (
            <div key={index}>
              {item.username}
              {item.password}
            </div>
          ))}
        </div>
      ) : (
        <h1>No data</h1>
      )}

      <h1></h1>
    </div>
  );
}

export default Admin_dashboard;
