import React, { useEffect, useState } from 'react';
import Header from './header_log2';



function Allstudent() {

    const [studentData, setStudentData] = useState([]);
  


    useEffect(() => {
        fetch('/stuplan.json')
          .then(response => response.json())
          .then(data => setStudentData(data))
          .catch(error => console.error('Error fetching the university data:', error));
      }, []);

  return (
    <div>



{studentData.length > 0 ? (
    <div>
      <Header/>
      {studentData.map((item) => (
        <div key={item.id} style={{ display: 'flex', margin: "5px" }}>
            <input className='subject' value={`${item.firstname} ${item.lastname}`}/>

            <input className='dob' value={item.dob} />

            <input className='gender' value={item.gender} />

            <input className='subject' value={item.highschool} />
            <input className='collage' value={item.collage} />
            <input className='nationality' value={item.nationality} />
            <input className='subject' value={`${item.code} ${item.phone}`} />
            <input className='email' value={item.email} />
            <input className='plan' value={item.plan} />
            <input className='address' value={`${item.street}, ${item.city}, ${item.state}, ${item.zip}`} />

             
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}

      
    </div>
  )
}

export default Allstudent
