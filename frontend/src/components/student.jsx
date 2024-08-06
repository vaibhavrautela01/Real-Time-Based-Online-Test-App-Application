import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Mcq from '../assets/mcq.png';
import '../components/universitylogin.css';
import { useForm } from "react-hook-form";

const onSubmit = async (data) => {
  let r = await fetch("http://localhost:3001/stulogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
  let res = await r.text();
  console.log(data, res);
};

const Stureg = () => {
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
    <div>
      <Header />
          <h1>STUDENT REGISTRATION</h1>
          <div className='universityreg'>
          <form onSubmit={handleSubmit(onSubmit)}>

          <div className="input-group">
                  First Name:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t1')} /><br/>
              </div>
              <div className="input-group">    
                  Last Name:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t2')} /><br/>
              </div> 
              <div className="input-group">       
                  Date of Birth:<input type='date' style={{ width: '450px' }} className='inpt' {...register('t3')} /><br/>
              </div>
              <div className="input-group">        
                  Gender:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t4')} /><br/>
              </div>
              <div className="input-group">        
                  Student ID: <input type='number' style={{ width: '450px' }} className='inpt' {...register('t5')} /><br/>
              </div>
              <div className="input-group">        
                  Password: <input type='password' style={{ width: '450px' }} className='inpt' {...register('t6')} /><br/>  
              </div>                  
                
                  <h3>Educational Background:</h3><br/>
                
              <div className="input-group">    
                  High School:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t7')} /><br/>
              </div>
              <div className="input-group">    
                  College:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t8')} /><br/>
              </div>
              <div className="input-group">        
                  Nationality:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t9')} /><br/>
              </div>    
          
                  <h3>Address:</h3><br/>
              <div className="input-group">    
                  Street:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t10')} /><br/>
              </div>
              <div className="input-group">        
                  City:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t11')} /><br/>
              </div>
              <div className="input-group">        
                  State:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t12')} /><br/>
              </div>
              <div className="input-group">        
                  ZIP:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t13')} /><br/>
              </div>
              <div className="input-group">    
                  Code:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t14')} /><br/>
              </div>
              <div className="input-group">        
                  Country:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t15')} /><br/>
              </div>
              <div className="input-group">        
                  Phone Number:<input type='number' style={{ width: '450px' }} className='inpt' {...register('t16')} /><br/>
              </div>
              <div className="input-group">        
                  Email Address:<input type='text' style={{ width: '450px' }} className='inpt' {...register('t17')} /><br/>
              </div>    
      
                {tasks.map((task, index) => (
              <div key={index}>
                <input type='text' value={task.plan} className='inpt' {...register('t18')} hidden /><br/>
               <input type='text' className='inpt' value="Pending" {...register('t19')} hidden />
              </div>
            ))}

                  <td colSpan="2">
                    <input type='submit' className='subbtn' />
                  </td>
          </form>


          <img src={Mcq} className='mcq' style={{
          position: 'absolute',
          left: "50%",
        }} alt="MCQ" />

        </div>  
        
      <Footer />
    </div>
  );
}

export default Stureg;
