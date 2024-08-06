import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Search from '../assets/search.png';
import Teacher from '../assets/teacher.jpeg';
import './plans.css';

function Stuplans() {
 const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      setError,
    } = useForm();
    const delay = (d) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, d * 1000);
      });
    };
  
    const onSubmit = async (data) => {
      try {
        const response = await fetch("http://localhost:3001/plan1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        console.log("Data inserted successfully."); 
    
        navigate('/Student'); 
      } catch (error) {
        console.error('There was an error:', error);
      }
    };
    



    const onSubmit1 = async (data) => {
      try {
        let r = await fetch("http://localhost:3001/plan2", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        let res = await r.text();
        if (res.includes('Invalid Userid And Password')) {
          setError('t1', { type: 'manual', message: 'Select' });
        } else {
          navigate('/Student');
        }
      } catch (error) {
        console.error(error);
      }
    };



    const onSubmit2 = async (data) => {
      try {
        let r = await fetch("http://localhost:3001/plan3", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        let res = await r.text();
        if (res.includes('Invalid Userid And Password')) {
          setError('t1', { type: 'manual', message: 'Select' });
        } else {
          navigate('/Student');
        }
      } catch (error) {
        console.error(error);
      }
    };

    return(
        <>

      <center>

     

        <div className='total'>
          <div className='a'>
            <h1 className='head2'>Silver</h1>
            <h3>Basic learning plan</h3>
            <h3>₹ 499.00/mo</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type='text' style={{textAlign: "center"}} Value={499} {...register('t1')} /><br/><br/>
              <input type="submit" className='link'/>
            </form>
            <h3>Plan Renews at ₹599.00/month</h3>
            <div className='para'>
              <p>Access to 10 Courses</p>
              <p>Weekly Quizzes</p>
              <p>Monthly Assignments</p>
              <p>1:1 Mentor Support</p>
              <p>Community Access</p>
              <p>Certification of Completion</p>
            </div>
          </div>

          <div className='b'>
            <h1 className='head2'>Gold</h1>
            <h3>Standard learning plan</h3>
            <h3>₹ 999.00/mo</h3>
            {/* <Link to="/Gold" className='link'>Buy Now</Link><br/><br/> */}
            <form onSubmit={handleSubmit(onSubmit1)}>
              <input type='text' style={{textAlign: "center"}}  Value={999} {...register('t2')} /><br/><br/>
              <input type="submit" className='link' />
            </form>
            <h3>Plan Renews at ₹1199.00/month</h3>
            <div className='para'>
              <p>Access to 50 Courses</p>
              <p>Weekly Quizzes</p>
              <p>Monthly Assignments</p>
              <p>1:1 Mentor Support</p>
              <p>Community Access</p>
              <p>Certification of Completion</p>
              <p>Career Counseling</p>
            </div>
          </div>

          <div className='d'>
            <h1 className='head2'>Platinum</h1>
            <h3>Premium learning plan</h3>
            <h3>₹ 1999.00/mo</h3>
            {/* <Link to="/Platinum" className='link'>Buy Now</Link><br/><br/> */}
            <form onSubmit={handleSubmit(onSubmit2)}>
              <input type='text' style={{textAlign: "center"}} Value={3999} {...register('t3')} /><br/><br/>
              <input type="submit" className='link' />
            </form>
            <h3>Plan Renews at ₹2399.00/month</h3>
            <div className='para'>
              <p>Access to 100+ Courses</p>
              <p>Weekly Quizzes</p>
              <p>Monthly Assignments</p>
              <p>1:1 Mentor Support</p>
              <p>Community Access</p>
              <p>Certification of Completion</p>
              <p>Career Counseling</p>
              <p>Interview Preparation</p>
              <p>Priority Support</p>
            </div>
          </div>
        </div>
      </center>

      </>
    );
}
export default Stuplans;