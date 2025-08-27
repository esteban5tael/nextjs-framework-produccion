import { SimplePokemon } from "@/app/dashboard/interfaces";

import { PokemonCard } from "../pokemon-card/PokemonCard";

interface Props {
    pokemons: SimplePokemon[];
}
export const PokemonGrid = ({pokemons}: Props) => {
    return (
        <>
            <div className="flex flex-wrap gap-5 items-center justify-center">
                {pokemons.map((pokemon) => (
                   <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                ))}
            </div>
        </>
    );
};
