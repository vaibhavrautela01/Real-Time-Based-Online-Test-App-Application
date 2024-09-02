import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidenav.css';
import { FaBars } from 'react-icons/fa';

function Sidenav() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible); 
  };

  return (
    <div>
      <FaBars 
        onClick={toggleSidebar} 
        style={{ fontSize: '40px', cursor: 'pointer', position: 'absolute', top: '35px',left:'12px',color:'white' }} 
      /> 

      {isSidebarVisible && (
        <div className='sidebar'>
          <div className='sidebar2'>
            <Link to="/Universitydashboard" className='sidebar3'>DASHBOARD</Link>
          </div>
          <div className='sidebar2'>
            <Link to="/Allstudent" className='sidebar3'>REGISTER STUDENT</Link>
          </div>
          <div className='sidebar2'>
            <Link to="/Queform" className='sidebar3'>POST QUESTION</Link>
          </div>
          <div className='sidebar2'>
            <Link to="/Edit" className='sidebar3'>EDIT QUESTION</Link>
          </div>
          <div className='sidebar2'>
            <Link to="/Delete" className='sidebar3'>DELETE QUESTION</Link>
          </div>
          <div className='sidebar2'>
            <Link to="/Activate" className='sidebar3'>ACTIVE/DEACTIVATE ACCOUNT</Link>
          </div>
          <div className='sidebar2'>
            <Link to="/Studentdetails" className='sidebar3'>PENDING REQUEST</Link>
          </div>
          <div className='sidebar2'>
            <Link to="/Recharge" className='sidebar3'>RE-CHARGE</Link>
          </div>
          <div className='sidebar2'>
            <Link to="/Notes" className='sidebar3'>ADD NOTES</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidenav;
