import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteClick, onLikeClick }) {
  return (
    <div id="toy-collection">
      {toys.map(toy => <ToyCard 
        key={toy.id}
        onDeleteClick={onDeleteClick}
        onLikeClick={onLikeClick}
        toy={toy} 
        />)
      }
    </div>
  );
}

export default ToyContainer;
