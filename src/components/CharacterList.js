import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";

const API_URL = "https://rickandmortyapi.com/api/character";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [species, setSpecies] = useState("all");
  const [gender, setGender] = useState("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const params = new URLSearchParams({
          page,
          name: search,
          status: status !== "all" ? status : "",
          species: species !== "all" ? species : "",
          gender: gender !== "all" ? gender : ""
        });
        const res = await axios.get(`${API_URL}?${params.toString()}`);
        setCharacters(res.data.results);
        setTotalPages(res.data.info.pages);
      } catch (err) {
        console.error(err);
        setCharacters([]);
        setTotalPages(1);
      }
    };

    fetchCharacters();
  }, [page, search, status, species, gender]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Rick and Morty Characters</h1>
      <input
        type="text"
        placeholder="Search characters..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="form-control mb-4"
      />
      <div className="d-flex gap-2 mb-4">
        <select className="form-select" value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }}>
          <option value="all">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select className="form-select" value={species} onChange={(e) => { setSpecies(e.target.value); setPage(1); }}>
          <option value="all">All Species</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
        </select>
        <select className="form-select" value={gender} onChange={(e) => { setGender(e.target.value); setPage(1); }}>
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="row">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {totalPages > 1 && <Pagination page={page} totalPages={totalPages} setPage={setPage} />}
    </div>
  );
};

export default CharacterList;
