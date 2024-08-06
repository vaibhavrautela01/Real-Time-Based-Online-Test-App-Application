import React from 'react'
import './footer.css'
import Call from'../assets/call.png'
import Privacy from '../assets/privacy.png'
import Service from'../assets/service.png'
import Account from '../assets/icons8-link-50.png'

function footer() {
  return (
    <div>
      <footer>
      <div class="fsection">
      <ul>
                <img src={Call}/>                
                <li><a href="https://mail.google.com/">Contact us?</a></li><br/>
                <li><a href="https://mail.google.com/">call: 6397918693</a></li><br/>
                <li><a href="https://mail.google.com/">Mail:rautelavaibhav01@gmail.com </a></li>
      </ul>
      </div>
      <div class="fsection">
            <ul>
                <img src={Service}/>  
                <li><a href="#">Our Service</a></li><br/>
                <li><a href="https://mail.google.com/">call: 6397918693</a></li><br/>
                <li><a href="https://mail.google.com/">Mail:rautelavaibhav01@gmail.com </a></li>
            </ul>
      </div>  
      <div class="fsection">
  
            <ul>
                <img src={Privacy}/>  
                <li><a href="#">Privacy Policy</a></li><br/>
                <li><a href="https://mail.google.com/">call: 6397918693</a></li><br/>
                <li><a href="https://mail.google.com/">Mail:rautelavaibhav01@gmail.com </a></li>
            </ul>
      </div>
      <div class="fsection">
  
      <ul>
                <img src={Account}/> 
                <li><a href="#">Accounts</a></li><br/>
                <li><a href="https://mail.google.com/">call: 6397918693</a></li><br/>
                <li><a href="https://mail.google.com/">Mail:rautelavaibhav01@gmail.com </a></li>
            </ul>
</div>
     
      
      </footer>
    </div>
    
    
  )
}

export default footer
