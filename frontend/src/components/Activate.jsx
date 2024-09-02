import React, { useEffect, useState } from 'react';
import Header from './header_log2';
import Footer from './footer';

function Gold() {
  const [active, setActive] = useState([]);
  const [deactive, setDeactive] = useState([]);

  useEffect(() => {
    fetch('/Active.json')
      .then(response => response.json())
      .then(data => setActive(data))
      .catch(error => console.error('Error fetching active data:', error));
  }, []);

  useEffect(() => {
    fetch('/Deactive.json')
      .then(response => response.json())
      .then(data => setDeactive(data))
      .catch(error => console.error('Error fetching deactive data:', error));
  }, []);

  return (
    <div>
      <Header />
     <h2>Active Data</h2>
      {active.length > 0 ? (
        <ul>
          {active.map((item, index) => (
            <div key={index}>
      <input className='subject' value={`${item.firstname} ${item.lastname}`}/>

      <input className='dob' value={item.dob} />

      <input className='gender' value={item.gender} />
      <input className='subject' value={item.studentID} />
      <input className='subject' value={item.highschool} />
      <input className='collage' value={item.collage} />
      <input className='nationality' value={item.nationality} />
      <input className='subject' value={`${item.code} ${item.phone}`} />
      <input className='email' value={item.email} />
      <input className='plan' value={item.plan} />
      <input className='address' value={`${item.street}, ${item.city}, ${item.state}, ${item.zip}`} />
      <input className='email' value={item.req} />


          
            </div>
          ))}
        </ul>
      ) : (
        <p>No active data available</p>
      )}

      <h2>Deactive Data</h2>
      {deactive.length > 0 ? (
        <ul>
          {deactive.map((item, index) => (
            <div key={index}>
      <input className='subject' value={`${item.firstname} ${item.lastname}`}/>

      <input className='dob' value={item.dob} />

      <input className='gender' value={item.gender} />
      <input className='subject' value={item.studentID} />
      <input className='subject' value={item.highschool} />
      <input className='collage' value={item.collage} />
      <input className='nationality' value={item.nationality} />
      <input className='subject' value={`${item.code} ${item.phone}`} />
      <input className='email' value={item.email} />
      <input className='plan' value={item.plan} />
      <input className='address' value={`${item.street}, ${item.city}, ${item.state}, ${item.zip}`} />
      <input className='email' value={item.req} />


          
            </div>
          ))}
        </ul>
      ) : (
        <p>No deactive data available</p>
      )}

      <Footer />
    </div>
  );
}

export default Gold;
