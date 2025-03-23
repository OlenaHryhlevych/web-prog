import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!character) return <div className="text-center mt-4">Loading...</div>;

  return (
    <div className="container mt-4 text-center">
      <Link to="/" className="btn btn-outline-primary mb-3">Back</Link>
      <h1 className="mb-3">{character.name}</h1>
      <img src={character.image} className="img-fluid rounded mb-3" alt={character.name} />
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
    </div>
  );
};

export default CharacterDetail;
