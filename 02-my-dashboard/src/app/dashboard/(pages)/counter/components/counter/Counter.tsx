"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
    addOne,
    initCounterState,
    resetCounter,
    subOne,
} from "@/store/counter/counterSlice";
import type{ APICount } from "../../interfaces/api-count";

import { useEffect } from "react"

/* interface Props {
    value: number;
} */

const getApiCounterValue = async (): Promise<APICount> => {
    try {
        const response = await fetch(
            "http://localhost:3000/api/v1/counter",
            {
                cache: "no-store", // Evita el almacenamiento en caché para obtener siempre el valor más reciente
            }
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data: APICount = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching counter value:", error);
        throw new Error("Network response was not ok");
    }
};

export const Counter = () => {
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();

    /*   useEffect(() => {
    dispatch(initCounterState(value))
  }, [value, dispatch]) */

  useEffect(() => {
    getApiCounterValue().then(({count}) =>dispatch(initCounterState(count)))
    
  }, [ dispatch])

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-900 rounded-xl shadow-lg p-8">
            <div className="mb-6">
                <span className="text-5xl font-bold text-white drop-shadow-lg">
                    {count}
                </span>
            </div>
            <div className="flex gap-4">
                <button
                    className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 shadow"
                    onClick={() => dispatch(subOne())}
                >
                    -1
                </button>
                <button
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition-colors border border-blue-700 shadow"
                    onClick={() => dispatch(resetCounter(0))}
                >
                    Reset
                </button>
                <button
                    className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 shadow"
                    onClick={() => dispatch(addOne())}
                >
                    +1
                </button>
            </div>
        </div>
    );
};
