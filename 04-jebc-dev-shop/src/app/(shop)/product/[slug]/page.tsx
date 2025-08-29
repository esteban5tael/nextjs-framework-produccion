import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    };
}

export default function ProductPage({ params }: Props) {
    const { slug } = params;
    const product = initialData.products.find(
        (product) => product.slug === slug
    );
    if (!product) {
        notFound();
    }
    return (
        <div className="m-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Slideshow */}
            <div className="col-span-1 md:col-span-2">
                <h1>Imagen</h1>
            </div>

            {/* Details */}
            <div className="col-span-1 px-5 shadow-sm">
                <h1 className="antialiased font-bold text-xl">
                    {product.title}{" "}
                </h1>
                <p className="text-lg mb-5">$ {product.price} </p>

                {/* Selector de Tallas */}

                {/* Selector de Cantidad */}

                {/* Agregar al carrito */}
                <button className="btn-primary my-5">Agregar al Carrito</button>

                {/* Descripcion */}
                <h3 className="font-bold text-sm text-gray-500">Descripción </h3>
                <p className="font-light text-sm">
                    {product.description}
                </p>
            </div>
        </div>
    );
}
