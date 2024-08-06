import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Header from './header_log3';
import Footer from './footer';
import './resetpass.css'

function Resetpass() {
  const [error, setError] = useState(""); 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    if (data.t2 !== data.t3) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    try {
      let r = await fetch("http://localhost:3001/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ t1: data.t1, t2: data.t2 })
      });
      let res = await r.text();
      console.log(data, res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Header />
      <h1>University Panel</h1>
      <h1>Password Reset</h1>



      <form onSubmit={handleSubmit(onSubmit)}>
        
          Institute ID:
          <input type='text' className='oop' {...register('t1', { required: true })} placeholder='Enter your User-Id ' />
        <br /><br />

        
          Password:
          <input type='password' className='oop' {...register('t2', { required: true })} placeholder='Password' />
        <br /><br />

        
          Re-Password:
          <input type='password' className='oop' {...register('t3', { required: true })} placeholder='Re-Password' />
        <br />

      <p style={{ color: 'red' }}>{error}</p> <br/>


        <input type='submit' name='stu_enroll' className='sub' /><br />

      </form>

      <Footer/>
    </div>
  );
}

export default Resetpass;
