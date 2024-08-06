import React, { useEffect, useState } from 'react';
import './editprofile.css';
import Header from './header_log';
import Footer from './footer';
import { useForm } from 'react-hook-form';

function Editprofile() {
  const { register, handleSubmit } = useForm();
  const [universityData, setUniversityData] = useState(null);

  const onSubmit = async (data) => {
    try {
      await fetch('http://localhost:3001/Stuedit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetch('/Student.json')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setUniversityData(data[0]);
        }
      })
      .catch(error => console.error('Error fetching the university data:', error));
  }, []);

  if (!universityData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>
          Welcome User: {universityData.firstname} {universityData.lastname}
          <div style={{ textAlign: 'right' }}>Student ID: {universityData.studentID}</div>
        </h1>

        <div className="input-group">
          <label>Firstname:</label>
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.firstname} {...register('t1')} />
        </div>

        <div className="input-group">
          <label>Lastname:</label>
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.lastname} {...register('t2')} />
        </div>

        <div className="input-group">
          <label>Date of Birth:</label>
          <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.dob} {...register('t3')} />
        </div>

        <div className="input-group">
              <label>Gender:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.gender} {...register('t4')} />
            </div>


            <div className="input-group">
              <label>Highschool:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.highschool} {...register('t6')} />
            </div>

            <div className="input-group">
              <label>College:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.collage} {...register('t7')} />
            </div>

            <div className="input-group">
              <label>Nationality:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.nationality} {...register('t8')} />
            </div>

            <div className="input-group">
              <label>Street:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.street} {...register('t9')} />
            </div>

            <div className="input-group">
              <label>City:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.city} {...register('t10')} />
            </div>

            <div className="input-group">
              <label>State:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.state} {...register('t11')} />
            </div>

            <div className="input-group">
              <label>Zip:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.zip} {...register('t12')} />
            </div>

            <div className="input-group">
              <label>Country-Code:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.code} {...register('t13')} />
            </div>

            <div className="input-group">
              <label>Country:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.country} {...register('t14')} />
            </div>

            <div className="input-group">
              <label>Phone:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.phone} {...register('t15')} />
            </div>

            <div className="input-group">
              <label>Email:</label>
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.email} {...register('t16')} />
            </div>

            <div className="input-group">
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.plan} {...register('t17')} hidden />
            </div>


            <div className="input-group">
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.req} {...register('t18')} hidden/>
            </div>

            <div className="input-group">
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.password} {...register('t5')} hidden/>
            </div>

            <div className="input-group">
              <input type='text' className='inpt' style={{ width: '450px' }} defaultValue={universityData.studentID} {...register('t19')} hidden />
            </div>

            <h3 style={{ textAlign: 'right' }}>Package: {universityData.plan}</h3>

            



        <input type='submit' className='btn' value='Save' />
      </form>
      <Footer />
    </div>
  );
}

export default Editprofile;
