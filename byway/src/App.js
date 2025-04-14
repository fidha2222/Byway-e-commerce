import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import CourseDetails from './pages/coursedetails/CourseDetails';
import data from './datas.json';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<CourseDetails courses={data.courses}/>} />
      </Routes>
    </Router>
  );
};

export default App;