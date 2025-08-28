import Link from "next/link";
interface Props {
    message?: string;
}

export const NotFound = ({ message }: Props) => {
    if (!message || message.length === 0)
        message = "La página que buscas no existe.";
    return (
        <div className="mt-80 flex flex-col items-center justify-center bg-gray-900 text-white fade-in">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">{message}</p>
            <Link href="/" className="btn-primary">
                Regresar al inicio
            </Link>
        </div>
    );
};
