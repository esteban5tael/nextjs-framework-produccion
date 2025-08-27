import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/*  */
import { SimplePokemon } from "@/app/dashboard/interfaces";

interface FavoritesPokemonsState {
    [key: string]: SimplePokemon;
}

const getInitialState=()=>{
    if (typeof window === "undefined") return {};

    const favoritePokemons = localStorage.getItem("favoritePokemons");

    return favoritePokemons
        ? JSON.parse(favoritePokemons)
        : '{}';
}

const initialState: FavoritesPokemonsState = {
    ...getInitialState(),
};

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        toggleFavorite: (
            state,
            action: PayloadAction<SimplePokemon>
        ) => {
            const pokemon = action.payload;

            const { id } = pokemon;

            if (!!state[id]) {
                delete state[id];
            } else {
                state[id] = pokemon;
            }

            localStorage.setItem("favoritePokemons", JSON.stringify(state));
        },
    },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
