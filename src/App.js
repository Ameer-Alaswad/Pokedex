import "./App.css";
import PokemonsList from "./components/Pokemons-list/PokemonsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonData from "./components/pokemon-data/PokemonData";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<PokemonsList />} />
          <Route path="/pokemon/:id" element={<PokemonData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
