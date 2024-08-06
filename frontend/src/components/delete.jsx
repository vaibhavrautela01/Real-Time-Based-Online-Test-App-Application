import React, { useEffect, useState } from 'react';
import './delete.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import User from '../assets/user.png';

function Delete() {
  const { register, handleSubmit } = useForm();
  const [questionData, setQuestionData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    subject: '',
    subcode: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  });

  const [universityData, setUniversityData] = useState([]);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    fetch('/question.json')
      .then(response => response.json())
      .then(data => setQuestionData(data))
      .catch(error => console.error('Error fetching the university data:', error));
  }, []);

  useEffect(() => {
    fetch('/University.json')
      .then(response => response.json())
      .then(data => setUniversityData(data))
      .catch(error => console.error('Error fetching the student data:', error));
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

  const handleEdit = (id) => {
    setEditingId(id);
    const item = questionData.find(item => item.id === id);
    setFormData(item);
  };

  const handleSave = async (id) => {
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
      setEditingId(null);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    } catch (error) {
      console.error('error', error);
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
                name='subject'
                value={editingId === item.id ? formData.subject : item.subject}
                onChange={handleChange}
                readOnly={editingId !== item.id}
              />
              <input
                className='subcode'
                name='subcode'
                value={editingId === item.id ? formData.subcode : item.subcode}
                onChange={handleChange}
                readOnly={editingId !== item.id}
              />
              <input
                className='question'
                name='question'
                value={editingId === item.id ? formData.question : item.question}
                onChange={handleChange}
                readOnly={editingId !== item.id}
              />
              <input
                className='option1'
                name='option1'
                value={editingId === item.id ? formData.option1 : item.option1}
                onChange={handleChange}
                readOnly={editingId !== item.id}
              />
              <input
                className='option2'
                name='option2'
                value={editingId === item.id ? formData.option2 : item.option2}
                onChange={handleChange}
                readOnly={editingId !== item.id}
              />
              <input
                className='option3'
                name='option3'
                value={editingId === item.id ? formData.option3 : item.option3}
                onChange={handleChange}
                readOnly={editingId !== item.id}
              />
              <input
                className='option4'
                name='option4'
                value={editingId === item.id ? formData.option4 : item.option4}
                onChange={handleChange}
                readOnly={editingId !== item.id}
              />

              {editingId === item.id ? (
                <input type='button' value='SAVE' onClick={() => handleSave(item.id)} className='sbmt' />
              ) : (
                <input type='button' value='Edit' onClick={() => handleEdit(item.id)} className='edit' />
              )}

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
        <p></p>
      )}

      <div className='deleteall-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {questionData.length > 0 ? (
            <div>
              <input type='text' defaultValue={questionData[0].subcode} {...register('t1')} hidden />
              <input type='text' defaultValue={questionData[0].uniID} {...register('t2')} hidden />
            </div>
          ) : (
            <p></p>
          )}
          <input type='submit' value='DELETE ALL' className='deleteall' />
        </form>
      </div>
    </div>
  );
}

export default Delete;
