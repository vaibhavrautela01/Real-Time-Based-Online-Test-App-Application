// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plans from "./components/plans";
import Studentdetails from "./components/student_details";
import Student from "./components/student";
import University from "./components/university";
import Stulogin from "./components/studentlogin";
import Unilogin from "./components/universitylogin";
import Afterlogin from "./components/stuafterlogin";
import UniAfterlogin from "./components/Uniafterlogin";
import Queform from "./components/questionimport";
import Stuplans from "./components/stuplans";
import EditProfile from "./components/editprofile";
import Resetpassword from "./components/resetpass";
import Test from "./components/test";
import Test2 from "./components/test2";
import Stuedit from "./components/stu_edit";
import Sturesetpass from "./components/stu_resetpass";
import Delete from "./components/delete";
import SectionA from "./components/sectionA";
import SectionB from "./components/sectionB";
import SectionC from "./components/sectionC";
import Rating from "./components/Rating";
import Allstudent from "./components/allstudent";
import Failed from "./components/failed";
import Success from "./components/Success";
import Activate from "./components/Activate";
import Edit from "./components/edit";
import Notes from "./components/notes";
import Recharge from "./components/Recharge";
import Universitydashboard from "./components/universitydashboard";
import Admin from "./components/admin";
import Dashboard from "./components/admin_dashboard";
import Result from "./components/Result";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Plans />} />
      <Route path="/Studentdetails" element={<Studentdetails />} />
      <Route path="/Student" element={<Student />} />
      <Route path="/Univeristy" element={<University />} />
      <Route path="/Stulogin" element={<Stulogin />} />
      <Route path="/Unilogin" element={<Unilogin />} />
      <Route path="/Afterlogin" element={<Afterlogin />} />
      <Route path="/UniAfterlogin" element={<UniAfterlogin />} />
      <Route path="/Queform" element={<Queform />} />
      <Route path="/Stuplans" element={<Stuplans />} />
      <Route path="/Editprofile" element={<EditProfile />} />
      <Route path="/Resetpassword" element={<Resetpassword />} />
      <Route path="/Test" element={<Test />} />
      <Route path="/Test2" element={<Test2 />} />
      <Route path="/Stuedit" element={<Stuedit />} />
      <Route path="/Delete" element={<Delete />} />
      <Route path="/Sturesetpass" element={<Sturesetpass />} />
      <Route path="/SectionA" element={<SectionA />} />
      <Route path="/SectionB" element={<SectionB />} />
      <Route path="/SectionC" element={<SectionC />} />
      <Route path="/rating" element={<Rating/>} />
      <Route path="/Allstudent" element={<Allstudent/>} />
      <Route path="/Failed" element={<Failed/>} />
      <Route path="/Success" element={<Success/>} />
      <Route path="/Activate" element={<Activate/>} />
      <Route path="/Edit" element={<Edit/>} />
      <Route path="/Notes" element={<Notes/>} />
      <Route path="/Recharge" element={<Recharge/>} />
      <Route path="/Universitydashboard" element={<Universitydashboard/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Result" element={<Result/>} />


    
    </Routes>
  </Router>
);

export default App;
