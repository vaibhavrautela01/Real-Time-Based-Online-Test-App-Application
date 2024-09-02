import React, { useEffect, useState } from 'react';
import Header from './header_log3';
import Footer from './footer';
import { useForm } from 'react-hook-form';
import Sidenav from './sidenav';

function Gold() {
  const [studentData, setStudentData] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/updatestatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ t1: data.studentID }), // Send only studentID
      });
      if (response.ok) {
        reset();
        // Optionally, refetch the data to reflect updates
        fetchStudentData();
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchStudentData = () => {
    fetch('/Stuplan.json')
      .then(response => response.json())
      .then(data => setStudentData(data))
      .catch(error => console.error('Error fetching student data:', error));
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <div>
      <Header />
      <div className='Sidenav'>
      <Sidenav/>
      {studentData.length > 0 ? (
        studentData.map((student, index) => (
          <div key={student.studentID} className='student-card'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <table style={{ border: '2px solid black', padding: '20px' }}>
                <tbody>
                  <tr>
                    <td>
                      <h1>{student.firstname} {student.lastname}</h1>
                      <p>Student ID: {student.studentID}</p>
                      <p>Email: {student.email}</p>
                    </td>
                    <td>
                      <p>Phone: {student.phone}</p>
                      <p>DOB: {student.dob}</p>
                      <p>Gender: {student.gender}</p>
                      <p>High School: {student.highschool}</p>
                      <p>College: {student.collage}</p>
                      <p>Nationality: {student.nationality}</p>
                      <p>Address: {student.street}, {student.city}, {student.state}, {student.zip}, {student.country}</p>
                      <p>Plan: {student.plan}</p>
                      <label>Request Status: </label>
                      <select {...register('requestStatus')}>
                        <option value="Pending">Pending</option>
                        <option value="Success">Success</option>
                      </select><br/><br/>
                      <input type='text' defaultValue={student.studentID} {...register('studentID')} hidden />
                      <input type='submit' value="Update" style={{backgroundColor:"blue",color:"white",paddingLeft:"25px",paddingRight:"25px",padding:"10px"}}  />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        ))
      ) : (
        <p>No Pending Request, Empty student data...</p>
      )}
      </div>
      <Footer />
    </div>
  );
}

export default Gold;
