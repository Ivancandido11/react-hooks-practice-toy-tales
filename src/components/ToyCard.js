import React from "react";

function ToyCard({ toy, onDeleteClick, onLikeClick }) {
  const { id, name, image, likes} = toy

  const handleDeleteClick = () => {
    onDeleteClick(id)
  }
  const handleLikeClick = () => {
    const newLikes = likes + 1
    onLikeClick(id, newLikes)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button 
        className="like-btn"
        onClick={handleLikeClick}
      >Like {"<3"}
      </button>
      <button 
        className="del-btn" 
        onClick={handleDeleteClick}
      >Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
