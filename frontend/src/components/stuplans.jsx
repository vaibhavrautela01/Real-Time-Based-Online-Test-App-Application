import React from 'react';
import { useNavigate } from 'react-router-dom';
import PayPalButton from './PayPalButton'; 
import './plans.css';

function Stuplans() {
  return (
    <>
      <center>
        <div className='total'>
          <div className='a'>
            <h1 className='head2'>Silver</h1>
            <h3>Basic learning plan</h3>
            <h3>₹ 499.00/mo</h3>
            <PayPalButton amount="499" />
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
            <PayPalButton amount="999" />
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
            <PayPalButton amount="1999" />
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
