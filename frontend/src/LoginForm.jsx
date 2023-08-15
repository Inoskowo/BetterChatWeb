import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig.js";
import './styles/style.css';
import logo from './assets/LogoBCB1.png';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Usuario autenticado:", user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
        <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="wrapper">
        <div className="form-box login">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
              <div className="input-box">
                <label htmlFor="email" className="form-label" ></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="password" className="form-label"></label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-box left-align">
                <a href="/forgot-password" className="small">¿Olvidaste tu contraseña?</a>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
              </div>
              <p className="mt-3 text-center" style={{ color: "#0a4d68" }}>
  ¿No tienes cuenta? <a href="/register" className="register-link"><strong>Regístrate</strong></a>
</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
