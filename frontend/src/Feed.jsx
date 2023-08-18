// Feed.jsx
import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig.js";
import "./styles/feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Obtener los datos de Firebase y actualizar el estado de los posts
    // Aquí debes implementar la lógica para obtener los posts de Firebase
    // y actualizar el estado con setPosts
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <img src={post.profileImage} alt="Foto de perfil" className="profile-image" />
            <h3>{post.username}</h3>
          </div>
          <p className="post-content">{post.content}</p>
          {post.imageUrl && <img src={post.imageUrl} alt="Publicación" />}
        </div>
      ))}
    </div>
  );
};

export default Feed;
    