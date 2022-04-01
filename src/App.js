import "./App.css";
import PokemonsList from "./components/Pokemons-list/PokemonsList";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <PokemonsList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
