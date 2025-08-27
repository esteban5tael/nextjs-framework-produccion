"use client";
"use client";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold mb-4 text-blue-500">
                    404
                </h1>
                <p className="text-xl mb-8">Página no encontrada</p>
                <Link
                    href="/dashboard"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition-colors font-semibold"
                >
                    Go To Dashboard
                </Link>
            </div>
        </div>
    );
}
