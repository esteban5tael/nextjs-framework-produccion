import {
    PokemonsResponse,
    SimplePokemon,
} from "@/app/dashboard/interfaces";

import { PokemonGrid } from "../components";
import { notFound } from "next/navigation";

const getPokemons = async (
    limit: number = 20,
    offset: number = 0
): Promise<SimplePokemon[]> => {
    const apiUrl: string = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    const res = await fetch(apiUrl, {
        cache: "force-cache",
        next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!res.ok) {
        notFound();
    }

    const data: PokemonsResponse = await res.json();

    const pokemons: SimplePokemon[] = data.results.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.url.split("/").at(-2)!,
        url: pokemon.url,
    }));
    return pokemons;
};

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);

    return (
        <>
        <h1 className="text-2xl font-extrabold text-center">Static Pokémons List</h1>
            <div className="flex flex-col">
                <PokemonGrid pokemons={pokemons} />
            </div>
        </>
    );
}
