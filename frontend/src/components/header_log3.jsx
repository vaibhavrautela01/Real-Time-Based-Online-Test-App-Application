import React, { useEffect, useState } from 'react';
import './header.css';
import User from '../assets/user.png';
import { Link } from 'react-router-dom';


function Header() {
  const [universityData, setUniversityData] = useState([]);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    fetch('/University.json')
      .then(response => response.json())
      .then(data => setUniversityData(data))
      .catch(error => console.error('Error fetching the student data:', error));
  }, []);

  const toggleDropdown = () => {
    setDrop(prevDrop => !prevDrop);
  };

  return (
    <header>
      <nav>
        <ul className='nab'>
          <li>HOME</li>
          <li>PLAN'S SUBSCRIPTION</li>
          <li>ABOUT US?</li>
          <li>CONTACT US?</li>
          <li>FEEDBACK</li>
          <img src={User} onClick={toggleDropdown} id="user" alt='User icon'></img>
        </ul>
      </nav>

      {drop && universityData.length > 0 && (
        <div>
            <ul className='nab2'>
              <div style={{listStyleType: "none",marginRight:"20px",paddingTop:"0px"}}>
            <h3><li>{universityData[0].institute} </li></h3>
            <li>{universityData[0].email}</li></div><br/>
          <center>
          <div className="nav-container">
  <Link to="/UniAfterlogin" className='nab3'>Dashboard</Link><br/><br/><br/>
  <Link to="/Editprofile" className='nab3'>Edit Profile</Link><br/><br/><br/>
  <Link to="/Resetpassword" className='nab3'>Reset Password</Link><br/><br/><br/>
  <Link to="/Unilogin" className='nab3'>Sign out</Link><br/><br/><br/>
</div>

          </center>
            </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
