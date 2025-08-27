import { Pokemon } from "@/app/dashboard/interfaces";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string;
    };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const res = await fetch(apiUrl, {
      cache: "force-cache",
        next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });
    if (!res.ok) {
        notFound();
    }
    const pokemon: Pokemon = await res.json();
    return pokemon;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    try {
        // Asegúrate de await params si es necesario, pero en este caso
        // params.id ya está disponible sincrónicamente
        const { id, name } = await getPokemon(await params.id);
        const title =
            `#${id} - ${name} | My Dashboard` ||
            "Pokémon Not Found | My Dashboard";
        const description =
            `Details and statistics about ${name}.` ||
            "Pokémon not found.";
        return {
            title,
            description,
            keywords: ["Next.js", "React", "JavaScript", name],
        };
    } catch (error) {
        return {
            title: "Pokémon Not Found | My Dashboard",
            description:
                error instanceof Error
                    ? error.message
                    : "Pokémon not found.",
            keywords: ["Next.js", "React", "JavaScript", "Not Found"],
        };
    }
}

export async function generateStaticParams() {
    const pokemonIds = Array.from({ length: 151 }, (_, i) => `${i + 1}`);
    return pokemonIds.map((id) => ({ id }));
}

export default async function NamePage({ params }: Props) {
    // No necesitas extraer pokemonId, puedes usar params.id directamente
    const pokemon = await getPokemon(params.id);

    return (
        <>
            <div className="flex mt-5 flex-col items-center text-gray-100">
                <div className="relative flex flex-col items-center rounded-2xl w-full max-w-2xl mx-auto bg-gray-800 shadow-lg p-4 border border-gray-700">
                    <div className="mt-2 mb-8 w-full">
                        <h1 className="px-2 text-2xl font-bold text-gray-100 capitalize">
                            #{pokemon.id} {pokemon.name}
                        </h1>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={
                                    pokemon.sprites.other?.dream_world
                                        .front_default ?? ""
                                }
                                width={150}
                                height={150}
                                alt={`Imagen del pokemon ${pokemon.name}`}
                                className="mb-5 drop-shadow-lg"
                            />
                            <div className="flex flex-wrap gap-2">
                                {pokemon.moves.map((move) => (
                                    <span
                                        key={move.move.name}
                                        className="bg-gray-700 text-gray-100 px-2 py-1 rounded capitalize text-xs mb-1"
                                    >
                                        {move.move.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 w-full">
                        <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-900 px-3 py-4 border border-gray-700">
                            <p className="text-sm text-gray-400 mb-1">
                                Types
                            </p>
                            <div className="text-base font-medium text-gray-100 flex flex-wrap gap-2">
                                {pokemon.types.map((type) => (
                                    <span
                                        key={type.slot}
                                        className="bg-gray-700 px-2 py-1 rounded capitalize text-xs"
                                    >
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-900 px-3 py-4 border border-gray-700">
                            <p className="text-sm text-gray-400 mb-1">
                                Peso
                            </p>
                            <span className="text-base font-medium text-gray-100 flex">
                                {pokemon.weight}
                            </span>
                        </div>
                        <div className="flex flex-col justify-center rounded-2xl bg-gray-900 px-3 py-4 border border-gray-700">
                            <p className="text-sm text-gray-400 mb-1">
                                Regular Sprites
                            </p>
                            <div className="flex justify-center gap-4">
                                <Image
                                    src={
                                        pokemon.sprites.front_default
                                    }
                                    width={100}
                                    height={100}
                                    alt={`sprite ${pokemon.name}`}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    width={100}
                                    height={100}
                                    alt={`sprite ${pokemon.name}`}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center rounded-2xl bg-gray-900 px-3 py-4 border border-gray-700">
                            <p className="text-sm text-gray-400 mb-1">
                                Shiny Sprites
                            </p>
                            <div className="flex justify-center gap-4">
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    width={100}
                                    height={100}
                                    alt={`sprite ${pokemon.name}`}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    width={100}
                                    height={100}
                                    alt={`sprite ${pokemon.name}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
