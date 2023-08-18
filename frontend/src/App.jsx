import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Cambio aquí
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import SetPhoto from './setPhoto';
import ForgotPassword from './ForgotPassword';
import MainContent from './MainContent';
import Feed from './Feed';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/" element={<LoginForm />} /> 
          <Route path="/register" element={<RegisterForm />} /> 
  
          <Route path="/setphoto" element={<SetPhoto />} /> 
          <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
          <Route path="/maincontent" element={<MainContent/>} />
          <Route path="/feed" element={<Feed/>} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App
