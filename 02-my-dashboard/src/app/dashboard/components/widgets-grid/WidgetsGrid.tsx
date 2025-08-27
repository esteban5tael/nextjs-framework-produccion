"use client";
import { useAppSelector } from '@/store';
import { SimpleWidget } from '../';
import { FaRegClock } from 'react-icons/fa';

export const WidgetsGrid = () => {
    const count = useAppSelector((state) => state.counter.count);
    return (
        <>
            <div className="flex flex-wrap p-2">
                <SimpleWidget
                    key={count}
                    title="Counter"
                    subtitle={`${count}`}
                    description="This is the counter current value"
                    icon={<FaRegClock size={40} />}
                    href='/dashboard/counter'
                />
            </div>
        </>
    );
};
