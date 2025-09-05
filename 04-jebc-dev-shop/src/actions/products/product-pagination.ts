"use server";

import prisma from "@/lib/prisma";


export const getPaginatedProductsWithImages = async () => {
    try {
        const products = await prisma.product.findMany({
            
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true,
                    },
                },
                category: { select: { name: true } },
            },
        });
        return {
            products: products.map(product => ({
                ...product,
                images: product.ProductImage.map(img => img.url),
                type: product.category.name
            }))
        };

        /*  */
    } catch (error) {
        console.log(
            "Error al obtener los productos paginados con imágenes",
            { error }
        );
        throw new Error(
            "Error al obtener los productos paginados con imágenes"
        );
    }
};
