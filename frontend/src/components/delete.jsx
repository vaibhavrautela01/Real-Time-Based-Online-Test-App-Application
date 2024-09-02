// src/components/Delete.js

import React, { useEffect, useState } from 'react';
import './delete.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import User from '../assets/user.png';

function Delete() {
  const { register, handleSubmit } = useForm();
  const [questionData, setQuestionData] = useState([]);
  const [universityData, setUniversityData] = useState([]);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    fetch('/question.json')
      .then(response => response.json())
      .then(data => setQuestionData(data))
      .catch(error => console.error('Error fetching the question data:', error));
  }, []);

  useEffect(() => {
    fetch('/University.json')
      .then(response => response.json())
      .then(data => setUniversityData(data))
      .catch(error => console.error('Error fetching the university data:', error));
  }, []);

  const toggleDropdown = () => {
    setDrop(prevDrop => !prevDrop);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Delete failed');
      }

      setQuestionData(questionData.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/deleteall', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Delete all failed');
      }

      setQuestionData([]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <table style={{ width: '100%', color: 'white', backgroundColor: 'red', padding: "20px" }}>
        <thead>
          <tr>
            <th className='subject2'>Subject</th>
            <th className='subcode2'>Subject-Code</th>
            <th className='question2'>Question</th>
            <th className='option12'>Option 1</th>
            <th className='option22'>Option 2</th>
            <th className='option32'>Option 3</th>
            <th className='option42'>Option 4</th>
            <td>
              <img src={User} style={{position: "absolute", top: "10px", right: "50px"}} onClick={toggleDropdown} id="user" alt='User icon' />
            </td>
          </tr>
        </thead>
      </table>

      {drop && universityData.length > 0 && (
        <div className='nab2'>
          <ul>
            <div style={{ listStyleType: "none", marginRight: "20px", paddingTop: "0px" }}>
              <h3><li>{universityData[0].institute}</li></h3>
              <li>{universityData[0].email}</li>
            </div>
            <br />
            <center>
              <div className="nav-container">
                <Link to="/UniAfterlogin" className='nab3'>Dashboard</Link><br /><br /><br />
                <Link to="/Editprofile" className='nab3'>Edit Profile</Link><br /><br /><br />
                <Link to="/Resetpassword" className='nab3'>Reset Password</Link><br /><br /><br />
                <Link to="/Unilogin" className='nab3'>Sign out</Link><br /><br /><br />
              </div>
            </center>
          </ul>
        </div>
      )}

      {questionData.length > 0 ? (
        <div>
          {questionData.map((item) => (
            <div key={item.id} style={{ display: 'flex', margin: "5px" }}>
              <input
                className='subject'
                value={item.subject}
                readOnly  style={{ width: '100%' }}
              />
              <input
                className='subcode'
                value={item.subcode}
                readOnly style={{ width: '100%' }}
              />
              <input
                className='question'
                value={item.question}
                readOnly style={{ width: '100%' }}
              />
              <input
                className='option1'
                value={item.option1}
                readOnly style={{ width: '100%' }}
              />
              <input
                className='option2'
                value={item.option2}
                readOnly style={{ width: '100%' }}
              />
              <input
                className='option3'
                value={item.option3}
                readOnly style={{ width: '100%' }}
              />
              <input
                className='option4'
                value={item.option4}
                readOnly style={{ width: '100%' }}
              />
              <input
                type='button'
                className='delete'
                value='DELETE'
                onClick={() => handleDelete(item.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}

      <div className='deleteall-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {questionData.length > 0 ? (
            <div>
              <input type='text' defaultValue={questionData[0].subcode} {...register('t1')} hidden />
              <input type='text' defaultValue={questionData[0].uniID} {...register('t2')} hidden />
            </div>
          ) : (
            <p>No data available</p>
          )}
          <input type='submit' value='DELETE ALL' className='deleteall' />
        </form>
      </div>
    </div>
  );
}

export default Delete;
