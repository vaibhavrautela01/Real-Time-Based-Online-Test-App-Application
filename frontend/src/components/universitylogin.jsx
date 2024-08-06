import React from 'react';
import 'react-notifications/lib/notifications.css';
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

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/university', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Login failed');
      }
      alert("Login Sucessfull.")
      navigate('/UniAfterlogin');
    } 
    catch (error) {
      console.error('error',error);
      
    }
  };

  return (
    <div id="studentlogin">
      <Header />
      <div className="combine">
        <img src={Mcq} alt="MCQ" className="mcq-image" />

        <div className="studentlogin2">
          
          <h1>University Login</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            
            Enter the Username:
              <input type="text" className="input" {...register('t1')}/><br/><br/>

           Enter the Password:
              <input type="password" className="input" {...register('t2')}/><br/><br/>


            <Link to="/Univeristy" className="notregistered">
              Not Registered?
            </Link><br/><br/>

    
              <button type="submit" className="sub" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UniversityLogin;
