import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { app } from "./firebaseConfig.js";
import './styles/style.css';
import logo from './assets/LogoBCB1.png';

const RegisterForm = () => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden.");
        return;
      } 

      const auth = getAuth(app);
      
      // Verificar si el usuario ya existe
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        setError("El correo electrónico ya está en uso. Por favor, ingrese otro.");
        return;
      }

      // Crear usuario
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Usuario registrado:", user);
    } catch (error) {
      if (error.code === "auth/weak-password") {
        setError("La contraseña es débil. Debe contener al menos 6 caracteres.");
      } else {
        setError(error.message);
      }
    }
  };
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="wrapper register-wrapper">
        <div className="form-box register">
          <div className="col-md-6">    
            <h2 className="text-center mb-4">Registrate</h2>
            {error && <div className="alert alert-danger alert-message">{error}</div>}
            <form   onSubmit={handleRegister}>
              <div className="input-box">
                <label htmlFor="usuario" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="usuario"
                  placeholder="Usuario"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <div className="input-box">
                <label htmlFor="confirmPassword" className="form-label"></label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirmar Contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">Registrarse</button>
              </div>
              <p className="mt-3 text-center register-text">
                         ¿Ya tienes cuenta? <a href="/setphoto" className="register-link"><strong>Iniciar Sesión</strong></a>
                    </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RegisterForm;