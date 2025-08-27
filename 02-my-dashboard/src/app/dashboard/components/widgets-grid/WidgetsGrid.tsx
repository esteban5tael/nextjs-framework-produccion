"use client";
import { useAppSelector } from '@/store';
import { SimpleWidget } from '../';
import { FaRegClock } from 'react-icons/fa';
import { SiAnimalplanet } from 'react-icons/si';

export const WidgetsGrid = () => {
    const count = useAppSelector((state) => state.counter.count);
    const pokemons = useAppSelector((state) => state.pokemons);
    return (
        <>
            <div className="flex flex-wrap p-2">
                <SimpleWidget
                    
                    title="Counter"
                    subtitle={`${count}`}
                    description="This is the counter current value"
                    icon={<FaRegClock size={40} />}
                    href='/dashboard/counter'
                />
                <SimpleWidget
                    
                    title="Favorites Pokemons"
                    subtitle={`${Object.keys(pokemons).length}`}
                    description="This is the number of favorite pokemons"
                    icon={<SiAnimalplanet size={40} />}
                    href='/dashboard/pokemons/favorites'
                />
            </div>
        </>
    );
};
