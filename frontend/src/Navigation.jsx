import React, { useState } from "react";
import { FaHome, FaSearch, FaEnvelope, FaBell } from 'react-icons/fa'; // Importa los íconos de react-icons
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig.js";
import './styles/style.css';
import logo from './assets/SOLOBC.png';

const Navigation = () => {
    // Simular el horario (día/noche)
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const isMorning = currentHour < 12;
    const greeting = isMorning ? "Buenos días" : "Buenas noches";
  
    // Nombre de usuario (puedes obtenerlo de tus datos de usuario)
    const username = " de Usuario";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <div className="user-info">
            <p>{greeting}, {username}</p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaHome /> Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaSearch /> Buscar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaEnvelope /> Mensajes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaBell /> Notificaciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Perfil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navigation;