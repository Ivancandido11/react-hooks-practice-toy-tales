import React, { useState } from "react";

function ToyForm({ onToyFormSubmit }) {
  const [newToy, setNewToy] = useState({
    name: "",
    image: "",
    likes: 0
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onToyFormSubmit(newToy)
    setNewToy({
      name: "",
      image: "",
      likes: 0
    })
  }

  const handleUserInput = (e) => {
    const key = e.target.name
    const value = e.target.value
    setNewToy({
      ...newToy,
      [key]:value
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit} >
        <h3>Create a toy!</h3>
        <input
          onChange={handleUserInput}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
        />
        <br />
        <input
          onChange={handleUserInput}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
