import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'



function header() {
  return (
    <div>

<header>
                        <nav>
                            <ul className='nab'>
                                <li>HOME</li>
                                <li>PLAN'S SUBSCRIPTION</li>
                                <li>ABOUT US?</li>
                                <li>CONTACT US?</li>
                                <li>FEEDBACK</li>
                                <Link to="/Stulogin" className='login'>Student Login</Link>
                                <Link to="/Unilogin" className='log'>Academy Login</Link>

                                <Link to="/Admin" id='logi'>Admin</Link>

  











                      



                                

                            </ul>
                        </nav>

              
                

              
               </header>

    </div>
  )
}

export default header
