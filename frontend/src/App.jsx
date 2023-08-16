import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Cambio aquí
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import SetPhoto from './setPhoto';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/" element={<LoginForm />} /> 
          <Route path="/register" element={<RegisterForm />} /> 
          <Route path="/login" element={<LoginForm />} /> 
          <Route path="/setphoto" element={<SetPhoto />} /> 
        </Routes> 
      </div>
    </Router>
  );
}

export default App
