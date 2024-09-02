import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Search from '../assets/search.png';
import Teacher from '../assets/teacher.jpeg';
import R from '../assets/r.jpg';
import Help from '../assets/help.jpg';
import Uniplans from './uniplans';
import Stuplans from './stuplans';

import './plans.css';

function Plans() {
  const [selectedSection, setSelectedSection] = useState("university");

  const handleButtonClick = (section) => {
    setSelectedSection(section);
  };

  const renderSection = () => {
    if (selectedSection === "university") {
      return <Uniplans />;
    } else if (selectedSection === "student") {
      return <Stuplans />;
    } else {
      return <Uniplans />;
    }
  };

  return (
    <>
      <Header />
      
      <div className='search'>
        <input type='search' placeholder='Search your plan..' id='f' />
        <input type='submit' id="searchbtn" />
        <img src={Search} className='img' alt='' />
      </div>
      <br/><br/>

      <div className='tot'>
        <div className='discount'>
          <h1>Your big idea<br/> deserves a great<br/> Teacher.</h1>
          <p>A memorable Learning establishes credibility as the<br/> primary connection between you and the<br/> smartness.</p>
          <input type='submit' value="Read More" className="readmore" />
        </div>
        <img src={Teacher} className='Teacher' alt='' />
        <div className='text'>
          <h4>Special Discount<br/></h4>
          <h3>be the first one to get discount</h3>
          <h1>JUST AT ₹ 1599.00/mo</h1>
          <input type='submit' value="Learn More" />
          <h5>Access to 100+ Courses</h5>
          <h5>Weekly Quizzes</h5>
          <h5>Certification of Completion</h5>
          <h5>Career Counseling</h5>
          <h5>Interview Preparation</h5>
          <h5>Priority Support</h5>
        </div>
      </div><br/><br/>

      <center>
        <h1 className="head">Summer Offer… save up to 67%. Hurry, offer ends soon.</h1>
        <h1 id='heading'>What's first up for your better learning?</h1>

        <button
          style={{
            backgroundColor: selectedSection === "university" ? "red" : "white",
            color: selectedSection === "university" ? "white" : "black",
            padding: "25px",
            width: "150px",
          }}
          onClick={() => handleButtonClick("university")}
        >
          UNIVERSITY
        </button>
        <button
          style={{
            backgroundColor: selectedSection === "student" ? "red" : "white",
            color: selectedSection === "student" ? "white" : "black",
            padding: "25px",
            width: "150px",
            marginBottom: "125px",
          }}
          onClick={() => handleButtonClick("student")}
        >
          STUDENT
        </button>
      </center>
      
      <div>{renderSection()}</div>

      <div className='aboutus'>
        <center><h1 className='head'>ABOUT US?</h1></center>
        <div className='z'>
          <div><img src={R} alt="hello" id='l' /></div>
          <div className='q'>
            <h1 className='q1'>Hi Vaibhav Rautela THIS SIDE!</h1>
            <p>To work in a firm with a professional work driven environment where I can utilize and apply my knowledge, skills which would enable me as a fresh graduate to grow while fulfilling organizational goals. I am a keen learner, passionate about technology and like to learn new things. A team player who will lead or take direction well. An optimistic person who believes that life is one journey so you should be open to everything. In my opinion, every day is an opportunity to learn something new</p>
            <h2>Personal Introduction</h2>
            <p>"My name is Vaibhav Rautela, and I am a Student with a passion for Leaning. With a background in Computer Science, I have dedicated my career to my family member who has always been a great support to me."</p>
            <h2>Professional Achievements</h2>
            <p>"Throughout my career, I have accomplished several milestones. These experiences have honed my skills in Programming, enabling me to learn and master new things."</p>
            <h2>Goals and Aspirations</h2>
            <p>"Looking ahead, I aspire to become a good programmer. I am particularly interested in Software development, where I believe I can make a significant impact with my skills."</p>
            <h2>Personal Interests</h2>
            <p>"Beyond my professional life, I enjoy playing outdoor games. Whether it's football or cricket, these activities help me stay balanced and inspired. I also love to read books, which allows me to connect with others and continuously learn new things."</p>
            <h2>Closing</h2>
            <p>"In summary, I am a dedicated and passionate individual who is always striving for excellence in both my professional and personal life. I look forward to the opportunities and challenges that lie ahead, and I am excited to continue my journey of growth and success."</p>
          </div>
        </div>
      </div>

      <center><h1 className='head'>Contact Us?</h1></center>
      <div className='contact'>
        <img src={Help} className='help' alt='' />
        <div className='contactus'>
          <h4>Why go with Smart-Teaching?</h4>
          <div className='h6'>
            <h6>Because we offer expert support,<br/> plus a lot more.<br/>
            <input type='submit' value="Contact Us? " className="readmore" />
            </h6>
          </div>
        </div>
      </div>

      <center><h1 className='head'>Feedback</h1></center>
      <div className='feedback' id="feedback-section">
        <div className='msg'>
          <h3>YOUR FEEDBACK MATTERS!</h3>
        </div>
        <div className='input'>
          Enter Your Name:<input type='text' className='box' /><br/>
          How Can We Improve Your Service:<input type='text' className='box1' /><br/>
          <input type='submit' className='btn' />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Plans;
