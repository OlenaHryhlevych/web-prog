import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body text-center">
          <h5 className="card-title">{character.name}</h5>
          <Link to={`/character/${character.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;