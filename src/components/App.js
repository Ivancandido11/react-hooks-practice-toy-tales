import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  const handleToyFormSubmit = (newToy) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    }
    fetch("http://localhost:3001/toys", configObj)
      .then(r => r.json())
      .then(data => {
        setToys([...toys, data])
      })
  }
  const handleDeleteToy = (id) => {
    const filteredToys = toys.filter(toy => id !== toy.id)
    const configObj = {
      method: "DELETE"
    }
    fetch(`http://localhost:3001/toys/${id}`, configObj)
      .then(setToys(filteredToys))
  }
  const handleLikeToy = (id, likes) => {
    const likeObj = {
      likes: likes
    }
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(likeObj)
    }
    fetch(`http://localhost:3001/toys/${id}`, configObj)
      .then(r => r.json())
      .then(data => {
        const updatedToys = toys.map(toy => {
          if (toy.id === id) {
            return data
          } else {
            return toy
          }
        })
        setToys(updatedToys)
      })
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(data => setToys(data))
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm onToyFormSubmit={handleToyFormSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        onDeleteClick={handleDeleteToy}
        onLikeClick={handleLikeToy}
      />
    </>
  );
}

export default App;
