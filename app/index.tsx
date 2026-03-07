import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";


export default function Index() {

  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    console.log("entré en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL, {
      method: "GET",
    });
    console.log(response);
    const data = await response.json();
    setResults(data.results);
    console.log(data);
  };
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {results.map((pokemon) => (
        < PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </ScrollView>
  );
}