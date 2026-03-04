import { useEffect, useState } from "react";
import { Text, View } from "react-native";

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
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {results.map((pokemon) => (
        <Text key={pokemon.name}>{pokemon.name} </Text>
      ))}
    </View>
  );
}