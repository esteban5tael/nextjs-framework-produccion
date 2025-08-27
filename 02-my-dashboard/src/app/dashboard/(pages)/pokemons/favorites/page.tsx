
import { Metadata } from "next";
import { PokemonGrid } from "../components";



export const metadata: Metadata = {
    title: "Favorite Pokémons | My Dashboard",
    description: "Your favorite Pokémons.",
    keywords: ["Next.js", "React", "JavaScript", "Favorites"],
};
export default async function PokemonsPage() {
    

    return (
        <>
            <h1 className="text-2xl font-extrabold text-center">
                <span className="text-blue-700">Favorite</span> Pokémons List
            </h1>
            <div className="flex flex-col">
                <PokemonGrid pokemons={[]} />
            </div>
        </>
    );
}
