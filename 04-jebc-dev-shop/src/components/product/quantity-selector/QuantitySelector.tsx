"use client";


import {
    IoAddCircleOutline,
    IoRemoveCircleOutline,
} from "react-icons/io5";

interface Props {
    quantity: number;
    onQuantityChanged?: (quantity: number) => void;
}

export const QuantitySelector = ({
    quantity = 1,
    onQuantityChanged,
}: Props) => {
    

    const onValueChanged = (value: number) => {
        if (quantity + value < 1) return;
        /* 
        if (count + value > 10) return;
        setCount(count + value); */
        onQuantityChanged?.(quantity + value);
    };
    return (
        <div className="flex ">
            <button onClick={() => onValueChanged(-1)}>
                <IoRemoveCircleOutline size={30} />
            </button>
            <span className="w-20 mx-3 px-5 bg-gray-700 text-center items-center justify-center flex rounded-md">
                {quantity}
            </span>
            <button onClick={() => onValueChanged(+1)}>
                <IoAddCircleOutline size={30} />
            </button>
        </div>
    );
};
