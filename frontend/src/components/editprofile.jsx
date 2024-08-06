import React, { useEffect, useState } from 'react';
import './editprofile.css';
import Header from './header_log3';
import Footer from './footer';
import { useForm } from 'react-hook-form';


function Editprofile() {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [universityData, setUniversityData] = useState({});

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/editprofile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } 
    catch (error) {
      console.error('error',error);
      
    }
  };


  useEffect(() => {
    fetch('/University.json')
      .then(response => response.json())
      .then(data => setUniversityData(data[0]))
      .catch(error => console.error('Error fetching the university data:', error));
  }, []);



  return (
    <div>
  <Header />
  <form onSubmit={handleSubmit(onSubmit)}>
    {universityData.institute ? (
      <div>
        <h1>
          Institute Name: {universityData.institute}
          <div style={{ textAlign: 'right' }}>Admin ID: {universityData.instituteID}</div>
        </h1>

        <div className="input-group">
          <input type='text' defaultValue={universityData.institute} {...register('t1')} hidden />
        </div>

        <div className="input-group">
          <input type='text' defaultValue={universityData.instituteID} {...register('t')} hidden />
        </div>

        <div className="input-group">
          <input type='text' defaultValue={universityData.password} {...register('t3')} hidden />
        </div>

        <div className="input-group">
          <label>Street:</label>
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.street} {...register('t4')} />
        </div>

        <div className="input-group">
          <label>City:</label>
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.city} {...register('t5')} />
        </div>

        <div className="input-group">
          <label>State:</label>
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.state} {...register('t6')} />
        </div>

        <div className="input-group">
          <label>Country:</label>
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.country} {...register('t7')} />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.email} {...register('t8')} />
        </div>

        <div className="input-group">
          <label>Program List:</label>
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.programlist} {...register('t9')} />
        </div>

        <div className="input-group">
          <label>Chancellor:</label>
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.chansllor} {...register('t10')} />
        </div>

        <div className="input-group">
          <label>Year:</label>
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.year} {...register('t11')} />
        </div>

        <div className="input-group">
          <input type='text' className='inpt' defaultValue={universityData.plan} {...register('t12')} hidden />
        </div>

        <div className="input-group">
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.plandate} {...register('t13')} hidden />
        </div>

        <h6 style={{ textAlign: 'right' }}>Package: {universityData.plan}</h6>

        <h2>Plan Expire on: { universityData.plandate}</h2>
      </div>
    ) : (
      <p>Loading...</p>
    )}

    <input type='submit' className='btn' value='Save' />
  </form>
  <Footer />
</div>

  )
}

export default Editprofile
