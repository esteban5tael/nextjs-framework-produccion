"use client";
import { useAppSelector } from "@/store";
import { NoFavoritePokemons, PokemonGrid } from "../";
import { useState } from "react";

export const FavoritePokemonsGrid = () => {
    const favoritePokemons=useAppSelector(state=>Object.values(state.pokemons));
    const [favorites, setFavorites] = useState(favoritePokemons)
    return (
        <>
        {
            favorites.length
                ? (<PokemonGrid pokemons={favorites} />)
                : (<NoFavoritePokemons />)
        }
        </>
    );
};
