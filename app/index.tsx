import PokemonCard from "@/components/PokemonCard";
import { router } from "expo-router";
import { useEffect, useState, } from "react";
import { Button, ScrollView } from "react-native";

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
    <ScrollView>
      <Button title="Pokémon" onPress={() => router.push("../pokemon")} />
      <Button title="Nueva Pantalla" onPress={() => router.push("/new_screen")} />
      <Button title="Dinamic route" onPress={() => router.push("/pokemon/[name]")} />

      {results.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url} />
      ))}
    </ScrollView>
  );
}