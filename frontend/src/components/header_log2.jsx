import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../assets/user.png';

function Header_log2() {

    const [studentData, setStudentData] = useState([]);


    const [drop, setDrop] = useState(false);

    const toggleDropdown = () => {
        setDrop(prevDrop => !prevDrop);
      };


    useEffect(() => {
        fetch('/Student.json')
          .then(response => response.json())
          .then(data => setStudentData(data))
          .catch(error => console.error('Error fetching the university data:', error));
      }, []);
  return (
    <div>
      
      <table style={{ width: '100%', color: 'white', backgroundColor: 'red', padding: "20px" }}>
        <thead>
          <tr style={{width:"100%"}}>
            <th className='name'>Fullname</th>
            <th className='dob'>Date of Birth</th>
            <th className='gender2'>Gender</th>
            <th className='Highschool'>Highschool</th>
            <th className='collage'>Collage</th>
            <th className='nationality2'>Nationality</th>
            <th className='phone'>Phone No.</th>
            <th className='email2'>Email</th>
            <th className='plan2'>Plan</th>
            <th className='address'>Address</th>
            <td>
              <img src={User} style={{position: "absolute", top: "30px", right: "30px", borderRadius:"180px", bottom:"50px"}} onClick={toggleDropdown} id="user" alt='User icon' />
            </td>
          </tr>
        </thead>
      </table>




      {drop && studentData.length > 0 && (
        <div className='nab2'>
          <ul>
            <div style={{ listStyleType: "none", marginRight: "20px", paddingTop: "0px" }}>
              <h3><li>{studentData[0].institute}</li></h3>
              <li>{studentData[0].email}</li>
            </div>
            <br />
            <center>
              <div className="nav-container">
                <Link to="/UniAfterlogin" className='nab3'>Dashboard</Link><br /><br /><br />
                <Link to="/Editprofile" className='nab3'>Edit Profile</Link><br /><br /><br />
                <Link to="/Resetpassword" className='nab3'>Reset Password</Link><br /><br /><br />
                <Link to="/Unilogin" className='nab3'>Sign out</Link><br /><br /><br />
              </div>
            </center>
          </ul>
        </div>
)}


    </div>
  )
}

export default Header_log2
