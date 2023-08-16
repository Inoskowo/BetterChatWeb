import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { app } from "./firebaseConfig.js";
import './styles/style.css';
import logo from './assets/LogoBCB1.png';

const SetPhoto = () => {
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
          <h2 className="h2.register">Setear Foto de Perfil</h2>
          <div className="col-md-6">
            {profileImage && (
              <img src={URL.createObjectURL(profileImage)} alt="Vista previa" className="preview-image" />
            )}
            <div className="input-box">
              <label htmlFor="usuario" className="form-label">Nombre de Usuario</label>
              <input
                type="text"
                className="form-control"
                id="usuario"
                placeholder="Nombre de Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="profileImage" className="form-label">Cargar Foto de Perfil</label>
              <input
                type="file"
                className="form-control"
                id="profileImage"
                accept="image/*"
                onChange={handleProfileImageChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="button" className="btn btn-primary" onClick={handleSaveProfile}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPhoto;