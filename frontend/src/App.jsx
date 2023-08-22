import { lazy } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Cambio aquí

import './App.css'

// lazy loading
const LoginForm = lazy(() => import('./auth/LoginForm'))
const RegisterForm = lazy(() => import('./auth/RegisterForm'))
const SetPhoto = lazy(() => import('./auth/setPhoto'))
const ForgotPassword = lazy(() => import('./auth/ForgotPassword'))
const MainContent = lazy(() => import('./private/dashboard/MainContent'))
const Feed = lazy(() => import('./private/dashboard/components/Feed'))

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

          <Route path="/setphoto" element={<SetPhoto />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          {/* If you want this auth to work search firebase authguard for react-router */}
          <Route path="/maincontent" element={<MainContent />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
