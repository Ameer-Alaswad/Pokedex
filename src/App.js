import "./App.css";
import PokemonsList from "./components/Pokemons-list/PokemonsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonData from "./components/pokemon-data/PokemonData";
import ButtonAppBar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ButtonAppBar />
        <Routes>
          <Route exact path="/" element={<PokemonsList />} />
          <Route path="/pokemon/:id" element={<PokemonData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
