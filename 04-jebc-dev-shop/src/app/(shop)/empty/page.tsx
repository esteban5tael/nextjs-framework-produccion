import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
    return (
        <div className="flex justify-center items-center h-[800px]">
            <IoCartOutline
                size={100}
                className="text-gray-300 mx-5"
            />

<div className="flex flex-col items-center">
    <h1 className="text-xl font-semibold"> Tu Carrito Está Vacío</h1>
    <Link href="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Ir a la Tienda
    </Link>
</div>

        </div>
    );
}
