import React, { useEffect, useState } from 'react';
import './delete.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import User from '../assets/user.png';
import Sidenav from './sidenav';

function Delete() {
  const { register, handleSubmit } = useForm();
  const [questionData, setQuestionData] = useState([]);
  const [universityData, setUniversityData] = useState([]);
  const [drop, setDrop] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [editedValues, setEditedValues] = useState({
    subject: '',
    subcode: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  });
  const navigate = useNavigate(); // Use this hook to programmatically navigate

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

  const handleEdit = (item) => {
    setEditItem(item);
    setEditedValues({
      subject: item.subject,
      subcode: item.subcode,
      question: item.question,
      option1: item.option1,
      option2: item.option2,
      option3: item.option3,
      option4: item.option4
    });
  };

  const handleSave = async (id) => {
    const formData = {
      id,
      subject: editedValues.subject,
      subcode: editedValues.subcode,
      question: editedValues.question,
      option1: editedValues.option1,
      option2: editedValues.option2,
      option3: editedValues.option3,
      option4: editedValues.option4,
    };

    console.log('Form Data:', formData); // Debug log

    try {
      const response = await fetch(`http://localhost:3001/edit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Edit failed');
      }

      setQuestionData(questionData.map(item => (item.id === id ? formData : item)));
      setEditItem(null); // Set edit item back to null after saving
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setEditedValues({
      ...editedValues,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>

<div><Sidenav/></div>
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
            <div key={item.id} style={{ display: 'flex', margin: "5px", width: '100%' }}>
              {editItem && editItem.id === item.id ? (
                <>
                  <input
                    className='subject'
                    name='subject'
                    value={editedValues.subject}
                    onChange={handleChange}
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='subcode'
                    name='subcode'
                    value={editedValues.subcode}
                    onChange={handleChange}
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='question'
                    name='question'
                    value={editedValues.question}
                    onChange={handleChange}
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='option1'
                    name='option1'
                    value={editedValues.option1}
                    onChange={handleChange}
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='option2'
                    name='option2'
                    value={editedValues.option2}
                    onChange={handleChange}
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='option3'
                    name='option3'
                    value={editedValues.option3}
                    onChange={handleChange}
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='option4'
                    name='option4'
                    value={editedValues.option4}
                    onChange={handleChange}
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <button
                    className='sbmt'
                    onClick={() => handleSave(item.id)} style={{paddingLeft:"40px",paddingRight:"40px"}}
                  >
                    Save
                  </button>
                </>
              ) : (
                <div style={{ width: '100%',display:"flex" }}>
                  <input
                    className='subject'
                    value={item.subject}
                    readOnly
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='subcode'
                    value={item.subcode}
                    readOnly
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='question'
                    value={item.question}
                    readOnly
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='option1'
                    value={item.option1}
                    readOnly
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='option2'
                    value={item.option2}
                    readOnly
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='option3'
                    value={item.option3}
                    readOnly
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <input
                    className='option4'
                    value={item.option4}
                    readOnly
                    style={{ width: '100%' }} // Set width to 100%
                  />
                  <button
                    className='edit'
                    onClick={() => handleEdit(item)} style={{paddingLeft:"40px",paddingRight:"40px"}}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}

      {/* Removed delete and delete all functionality */}
    </div>
  );
}

export default Delete;
