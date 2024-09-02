import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header_log';
import Footer from './footer';
import '../components/afterlogin.css';
import { useForm } from 'react-hook-form';

function Afterlogin() {
  const navigate = useNavigate();

  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetch('/Student.json')
      .then(response => response.json())
      .then(data => setStudentData(data))
      .catch(error => console.error('Error fetching the university data:', error));
  }, []);

  const handleNavigation = () => {
    try {
      navigate('/Test');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleNavigation2 = () => {
    navigate('/');
  };

  const handleNavigation3 = () => {
    navigate('/Result');
  };


  return (
    <div>
      <Header />
      <div id='main'>
        {studentData.length > 0 ? (
          <div>
            <center>
              <h1>Welcome {studentData[0].firstname} {studentData[0].lastname}</h1>
            </center>
            <h3 style={{ textAlign: 'right' }}>Student ID : {studentData[0].studentID}</h3>


            <div className='afterlogin'>


              <div className='afterloginbtn' onClick={handleNavigation}>
                <h1>📚</h1>
                <div id='Result'>
                  EXAM FEVER
                  <p>MCQ</p>
                </div>
              </div>



              
              <div className='afterloginbtn2'
              onClick={handleNavigation2}>
                <h1>🖊️</h1>
                <div id='Result'>
                  PERFORMANCE
                  <p>35 Lessons</p>
                </div>
              </div>


              <div className='afterloginbtn3'
              onClick={handleNavigation3}>
                <h1>📑</h1>
                <div id='Result'>
                RESULT
                <p>MCQ</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Afterlogin;
