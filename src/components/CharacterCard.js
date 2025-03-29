import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body text-center">
          <h5 className="card-title">{character.name}</h5>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <Link 
            to={`/character/${character.id}`} 
            state={{ character }}
            className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;