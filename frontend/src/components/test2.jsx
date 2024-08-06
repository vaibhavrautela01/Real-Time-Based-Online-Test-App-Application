import React, { useState, useEffect } from 'react';
import Header from './header_log';
import Footer from './footer';
import './section.css';
import P from './sectionA';
import Q from './sectionB';
import R from './sectionC';

function Test() {

  const onSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3001/sectionA", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('There was an error:', error);
    }
  };

  const onSubmit1 = async () => {
    try {
      const response = await fetch("http://localhost:3001/sectionB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('There was an error:', error);
    }
  };

  const onSubmit2 = async () => {
    try {
      const response = await fetch("http://localhost:3001/sectionC", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('There was an error:', error);
    }
  };



  const [section, setSection] = useState(() => {
    return localStorage.getItem('section') || "Select Section";
  });

 

  useEffect(() => {
    localStorage.setItem('section', section);
  }, [section]);

  const handleSectionClick = async (newSection, submitFunc) => {
    setSection(newSection);
    try {
      await submitFunc();
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  const z = () => {
    if (section === "Section A") {
      return <P />;
    } else if (section === "Section B") {
      return <Q />;
    } else if (section === "Section C") {
      return <R />;
    } else {
      return "";
    }
  };

  return (
    <div>
      <Header />
       

      <div className='float'>
      <div className='float2'>

        <h1>Section's</h1>
        <button type="button" className="j" onClick={() => handleSectionClick("Section A", onSubmit)}>Section A</button>
        <button type="button" className="j" onClick={() => handleSectionClick("Section B", onSubmit1)}>Section B</button>
        <button type="button" className="j" onClick={() => handleSectionClick("Section C", onSubmit2)}>Section C</button>
        </div>

        <div>{z()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Test;
