// Suggestions.jsx
import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig.js";
import "./styles/suggestions.css";

const Suggestions = () => {
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    // Obtener las sugerencias de usuarios de Firebase y actualizar el estado de suggestedUsers
    // Aquí debes implementar la lógica para obtener las sugerencias de usuarios de Firebase
    // y actualizar el estado con setSuggestedUsers
  }, []);

  return (
    <div className="suggestions">
      <h2>Sugerencias para ti</h2>
      <div className="user-list">
        {suggestedUsers.map((user) => (
          <div className="user" key={user.id}>
            <img src={user.profileImage} alt="Foto de perfil" className="profile-image" />
            <p>{user.username}</p>
            <button>Seguir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
