import "./App.css";
import PokemonsList from "./components/Pokemons-list/PokemonsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetails from "./components/Pokemons-list/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PokemonsList />
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
