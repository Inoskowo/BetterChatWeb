import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore"; // Importa lo necesario para Firestore
import { storage, ref, uploadBytes, getDownloadURL } from "../utils/firebaseConfig.js"; // Importa lo necesario para Firebase Storage
import { db, auth } from "../utils/firebaseConfig.js"; // Asegúrate de que tienes db y auth importados
import '../styles/style.css';
import logo from '../assets/LogoBCB1.png';

const SetPhoto = () => {
  const [displayname, setdisplayname] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setProfileImage(selectedImage);
  };

  const handleSaveProfile = async () => {
    if (profileImage) {
      const currentUser = auth.currentUser; // Obtener el usuario actual
      // Subir la imagen a Firebase Storage y obtener la URL
      const storageRef = ref(storage, `FotosdePerfil/${currentUser.uid}`);
      await uploadBytes(storageRef, profileImage);
      const profileImageUrl = await getDownloadURL(storageRef);

      // Actualizar el display name y la URL de la imagen en Firestore
      const userRef = doc(db, "usuario", currentUser.uid);
      await updateDoc(userRef, {
        displayname: displayname,
        profileImageUrl: profileImageUrl,
      });
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="wrapper photo-wrapper">
        <div className="form-box register">
          <h1 className="set-photo-title">Elige tu foto de perfil y también un apodo!</h1>
          <div className="col-md-6">
            <div className="profile-image-preview">
              {/* Agregamos la caja para la vista previa */}
              <div className="profile-image-preview-box">
                {profileImage && (
                  <img src={URL.createObjectURL(profileImage)} alt="Vista previa" className="preview-image" />
                )}
              </div>
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
            <div className="input-box">
              <label htmlFor="displayname" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="displayname"
                placeholder="Apodo"
                value={displayname}
                onChange={(e) => setdisplayname(e.target.value)}
                required
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
