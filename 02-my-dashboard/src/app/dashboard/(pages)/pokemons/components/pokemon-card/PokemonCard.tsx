"use client";

import { SimplePokemon } from "@/app/dashboard/interfaces";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";
import Image from "next/image";
import Link from "next/link";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const { id, name } = pokemon;
    const isFavorte = useAppSelector((state) => !!state.pokemons[id]);
    const dispatch = useAppDispatch();
    const onToggleFavoritePokemon = () => {
        dispatch(toggleFavorite(pokemon));
    };
    return (
        <>
            <div className="mx-auto right-0 mt-2 w-60">
                <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                    <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
                            alt={name}
                            width={96}
                            height={96}
                            priority={false}
                        />
                        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
                            {name} (#{id})
                        </p>

                        <div className="mt-5">
                            <Link
                                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                                href={`/dashboard/pokemons/${id}`}
                            >
                                Pokémon Details
                            </Link>
                        </div>
                    </div>
                    <div className="border-b">
                        <div
                            className="px-2 py-1 hover:bg-gray-100 flex items-center cursor-pointer"
                            onClick={onToggleFavoritePokemon}
                        >
                            <div className="text-red-600">
                                {isFavorte ? (
                                    <IoHeart />
                                ) : (
                                    <IoHeartOutline />
                                )}
                                {/* <IoHeartOutline /> */}
                                {/* <IoHeart /> */}
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    {isFavorte
                                        ? "Remove from favorites"
                                        : "Add to favorites"}
                                </p>
                                <p className="text-sm font-medium text-gray-400 leading-none">
                                    Click to{" "}
                                    {isFavorte ? "remove" : "add"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
