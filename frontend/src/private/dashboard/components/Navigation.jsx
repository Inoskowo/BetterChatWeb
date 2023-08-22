import { useState, useEffect } from "react";
import { FaHome, FaSearch, FaEnvelope, FaBell } from 'react-icons/fa';
import { Nav, ListGroup } from "react-bootstrap";
import { auth, db } from "../../../utils/firebaseConfig.js"; // Importa los módulos necesarios para Firebase
import './styles/style.css';
import logo from '../../../assets/SOLOBC.png';
import { doc, getDoc } from "firebase/firestore"; // Importa los módulos necesarios para Firestore

const Navigation = () => {
  const [displayName, setDisplayName] = useState("");

  // the loading is to slow sometimes xd
  const [loading, setLoading] = useState(true);

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const isMorning = currentHour < 12;
  const greeting = isMorning ? "Buenos días" : "Buenas noches";

  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      const userRef = doc(db, "usuario", currentUser.uid);
      getDoc(userRef).then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setDisplayName(userData.displayName);
        }
        setLoading(false);
      });
    }
  }, [currentUser]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="navigation-container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="user-info">
        <p>{greeting}, {displayName}</p>
      </div>
      <ListGroup className="nav-links">
        <ListGroup.Item><Nav.Link href="#"><FaHome /> Inicio</Nav.Link></ListGroup.Item>
        <ListGroup.Item><Nav.Link href="#"><FaSearch /> Buscar</Nav.Link></ListGroup.Item>
        <ListGroup.Item><Nav.Link href="#"><FaEnvelope /> Mensajes</Nav.Link></ListGroup.Item>
        <ListGroup.Item><Nav.Link href="#"><FaBell /> Notificaciones</Nav.Link></ListGroup.Item>
        <ListGroup.Item><Nav.Link href="#">Perfil</Nav.Link></ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Navigation;