import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./components/CharacterDetail";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
