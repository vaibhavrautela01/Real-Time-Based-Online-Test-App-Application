import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './studentlogin.css';
import { Link } from 'react-router-dom';
import Mcq from '../assets/mcq.png';
import { useForm } from 'react-hook-form';

const UniversityLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    fetch('http://localhost:3001/university', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 'valid') {
          navigate('/uniAfterlogin');
        } else if (result.status === 'expired') {
          alert('Your subscription has expired. Please renew to continue.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div id="studentlogin">
      <Header />
      <div className="combine">
        <img src={Mcq} alt="MCQ" className="mcq-image" />
        <div className="studentlogin2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1>University Login</h1>
              Enter the Username:
              <input type="text" className="input" {...register('t1')} /><br /><br />
              Enter the Password:
              <input type="password" className="input" {...register('t2')} /><br /><br />
              <Link to="/Univeristy" className="notregistered">
                Not Registered?
              </Link><br /><br />
              <button type="submit" style={{ position: 'relative', left: '150px' }} className="sub" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UniversityLogin;
