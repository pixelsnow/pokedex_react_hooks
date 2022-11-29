import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import PokeList from "./components/PokeList";
import About from "./components/About";
import Home from "./components/Home";
import PokeSingle from "./components/PokeSingle";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokelist" element={<PokeList />} />
          {/* This is where we defined pokesingle */}
          <Route path="pokeList/:pokesingle" element={<PokeSingle />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
