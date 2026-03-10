import { router } from "expo-router";
import React from 'react';
import { Image, Pressable, Text } from 'react-native';
interface PokemonCardProps {
    name: string;
    url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
    const id = props.url.split("/")[6];

    const PokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const PokemonImageURLBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
    return (
        <Pressable
            onPress={() => router.push(`/pokemon/${props.name}`)}
            style={{
                padding: 10,
                borderWidth: 1,
                alignItems: "center",
            }}
        >
            <Image
                source={{ uri: PokemonImageURL }}
                style={{ width: 100, height: 100 }}
            ></Image>
            <Image
                source={{ uri: PokemonImageURLBack }}
                style={{ width: 100, height: 100 }}
            ></Image>

            <Text>{props.name}</Text>
            <Text>{props.url}</Text>
        </Pressable>
    );
}


