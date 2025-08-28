import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white fade-in">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">La categoría que buscas no existe.</p>
      <Link href="/" className="btn-primary">
        Regresar al inicio
      </Link>
    </div>
  );
}