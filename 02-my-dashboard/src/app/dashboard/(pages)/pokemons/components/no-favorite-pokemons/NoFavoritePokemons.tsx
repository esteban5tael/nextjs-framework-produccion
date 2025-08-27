import React from "react";
import Link from "next/link";

import { IoHeartDislike } from "react-icons/io5";

export const NoFavoritePokemons = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full py-16">
            <IoHeartDislike className="text-6xl text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-gray-700">
                No favorite Pokémons yet
            </h2>
            <p className="text-gray-500 mb-6 text-center max-w-md">
                You haven&apos;t added any Pokémons to your favorites.
                Start exploring and add your favorite Pokémons to your
                collection!
            </p>
            <Link href="/dashboard/pokemons">
                <a className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors">
                    Go to Pokémons
                </a>
            </Link>
        </div>
    );
};
