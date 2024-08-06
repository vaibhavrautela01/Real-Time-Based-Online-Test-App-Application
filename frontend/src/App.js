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

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Plans />} />
      <Route path="/Studentdetails" element={<Studentdetails />} />
      <Route path="/Student" element={<Student />} />
      <Route path="/University" element={<University />} />
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
    </Routes>
  </Router>
);

export default App;
