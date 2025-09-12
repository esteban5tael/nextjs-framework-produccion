export const revalidate = 604800; // 7 days

import { getProductBySlug } from "@/actions";
import {
    QuantitySelector,
    SizeSelector,
    SlideShow,
    StockLabel,
} from "@/components";
import { Metadata, /* ResolvingMetadata */ } from "next";

import { notFound } from "next/navigation";

export async function generateMetadata(
    { params }: Props,
    // parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const { slug } = await params;

    // fetch data
    const product = await getProductBySlug(slug);

    // optionally access and extend (rather than replace) parent metadata
    //   const previousImages = (await parent).openGraph?.images || []

    return {
        title: product?.title || "Producto no encontrado",
        description:
            product?.description || "No se ha encontrado el producto",
        openGraph: {
            title: product?.title || "Producto no encontrado",
            description:
                product?.description ||
                "No se ha encontrado el producto",
            images: [
                `/products/${product?.images[0]}`
            ],
        },
    };
}

interface Props {
    params: {
        slug: string;
    };
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }
    return (
        <div className="m-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Slideshow */}

            <div className="col-span-1 md:col-span-2 mb-10">
                <SlideShow
                    title={product.title}
                    images={product.images}
                    className="w-full h-[500px] rounded-lg"
                />
            </div>

            {/* Details */}
            <div className="col-span-1 px-5 shadow-sm">
                <StockLabel slug={product.slug} />
                <h1 className="antialiased font-bold text-xl">
                    {product.title}{" "}
                </h1>
                <p className="text-lg mb-5">$ {product.price} </p>

                {/* Selector de Tallas */}
                <SizeSelector
                    selectedSize={product.sizes[1]}
                    availableSizes={product.sizes}
                />

                {/* Selector de Cantidad */}
                <QuantitySelector quantity={2} />

                {/* Agregar al carrito */}
                <button className="btn-primary my-5">
                    Agregar al Carrito
                </button>

                {/* Descripcion */}
                <h3 className="font-bold text-sm text-gray-500">
                    Descripción{" "}
                </h3>
                <p className="font-light text-sm">
                    {product.description}
                </p>
            </div>
        </div>
    );
}
