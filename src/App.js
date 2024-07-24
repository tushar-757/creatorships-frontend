// Example of setting up routes in App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PartnershipsList from './components/Partnership';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import LandingPage from './components/LandingPage';
import Creator from './components/Creator';
import Business from './components/Business';
import Partnerships from './components/Partnership';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/home" element={<PartnershipsList/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/creator" element={<Creator/>} />
        <Route path="/business" element={<Business/>} />
        <Route path="/partnership" element={<Partnerships/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
