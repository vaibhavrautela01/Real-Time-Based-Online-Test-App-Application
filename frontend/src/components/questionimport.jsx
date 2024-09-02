import React, { useEffect, useState } from 'react';
import Header from './header_log3';
import Footer from '../components/footer';
import './questionimport.css';
import { useForm } from "react-hook-form";
import Sidenav from './sidenav';


function Questionimport () {

const onSubmit = async (data) => {
  let r = await fetch("http://localhost:3001/question", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
  let res = await r.text();
  console.log(data, res);
};


let x = Math.floor((Math.random() * 10000) + 1);




  const [universityData, setUniversityData] = useState([]);


  useEffect(() => {
    fetch('/University.json')
      .then(response => response.json())
      .then(data => setUniversityData(data))
      .catch(error => console.error('Error fetching the university data:', error));
  }, []);


  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <>    
    <Header/>
<div className='Sidenav'>
    <Sidenav/>
    <div className='questionimport'>
    <form onSubmit={handleSubmit(onSubmit)}>



  <div className='first'> First Name:<input type='text' placeholder='enter your name' className='questionimport2' {...register('t1')}></input>

  <div className='second'>Last<input type='text' className='second4' placeholder='enter your last name' {...register('t2')}></input><br/></div></div>

  <div className='first'> Company/ University/ School:<input type='text' placeholder='enter company name' className='questionimport2' {...register('t3')}></input>
  
  <div className='second'>  Subject:<input type='text' className='second4' placeholder='Subject' {...register('t4')}></input><br/></div></div>


   <div className='first'>Select Paper: 
  <select name="Select Paper" className='questionimport2' {...register('t5')}>
    <option>Select Paper Code</option>
    <option value="PCS-101">PCS-101</option>
    <option value="PCS-102">PCS-102</option>
    <option value="PCS-103">PCS-103</option>
  </select></div>


  <div className='first'>Select Section: 
  <select name="Select Section" className='questionimport2' {...register('t6')}>
    <option>Select Section</option>
    <option value="Section A">Section A</option>
    <option value="Section B">Section B</option>
    <option value="Section C">Section C</option>
  </select><br/><br/></div>




  
   <div className='first'>Add Questions:<input type='text' placeholder='Add Question' className='questionimport7' {...register('t7')}></input><br/></div>
   <div className='questionimport5'>Option 1: <input type='text' className='questionimport2' placeholder='Option 1' {...register('t8')}/><br/></div>
   <div className='questionimport5'>Option 2: <input type='text' className='questionimport2' placeholder='Option 2' {...register('t9')}/><br/></div>
   <div className='questionimport5'>Option 3: <input type='text' className='questionimport2' placeholder='Option 3' {...register('t10')}/><br/></div>
   <div className='questionimport5'>Option 4: <input type='text' className='questionimport2' placeholder='Option 4' {...register('t11')}/><br/></div>

   <div className='questionimport5'>Answer: <input type='text' className='questionimport2' placeholder='Answer' {...register('t12')}/><br/></div>


   {universityData.length > 0 ? (
    <div>

      <input type='text' defaultValue={universityData[0].instituteID} {...register('t13')} hidden/>

    </div>

  ) : (
    <p>Loading...</p>
  )}


  <input type='submit' className='btn' ></input>
  </form>
  </div>
  </div>
<Footer/>
    </>

  );
}

export default Questionimport