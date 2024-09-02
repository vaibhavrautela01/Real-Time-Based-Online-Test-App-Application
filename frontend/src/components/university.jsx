import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Mcq from '../assets/mcq.png';
import '../components/universitylogin.css';
import { useForm } from "react-hook-form";

const onSubmit = async (data) => {
  let r = await fetch("http://localhost:3001/unilogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
  let res = await r.text();
  console.log(data, res);
};

const Instreg = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/plan.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data || []);  
        setLoading(false);
      })
  }, []);

  const {
    register,
    handleSubmit,
  } = useForm();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className='universityreg'>
        <img src={Mcq} className='mcq' alt='MCQ' />
        <div className='universityreg2'>
          <h1>UNIVERSITY REGISTRATION:</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            Enter the name of the Institute: <input type='text' className='value' {...register('t1')} /><br /><br />
            Institute ID: <input type='text' className='value' {...register('t2')} /><br /><br />
            Password: <input type='password' className='value' {...register('t3')} /><br /><br />
            <h1>Address:<br /></h1>
            Street <input type='text' className='value' {...register('t4')} /><br /><br />
            City <input type='text' className='value' {...register('t5')} /><br /><br />
            State <input type='text' className='value' {...register('t6')} /><br /><br />
            Country <input type='text' className='value' {...register('t7')} /><br /><br />
            Email Address: <input type='text' className='value' {...register('t8')} /><br /><br />
            List of Undergraduate Programs: <input type='text' className='value' {...register('t9')} /><br /><br />
            Chancellor's Name: <input type='text' className='value' {...register('t10')} /><br /><br />
            Year Established: <input type='text' className='value' {...register('t11')} /><br /><br />

            {tasks.map((task, index) => (
              <li key={index}>
                <input type='text' value={task.plan} {...register('t12')} hidden readOnly /><br/>
                <input type='text' value={task.plandate} {...register('t13')} hidden readOnly />
              </li>
            ))}

            <input type='submit' name='stu_enroll' className='sub' /><br />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Instreg;
