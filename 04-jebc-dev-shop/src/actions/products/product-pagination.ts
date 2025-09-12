"use server";

import { PaginationOptions } from "@/interfaces";
import prisma from "@/lib/prisma";




export const getPaginatedProductsWithImages = async ({
    page = 1,
    take = 12,
    gender,

}:PaginationOptions) => {
    try {
        if(isNaN(Number(page)) ) page=1;
        if(isNaN(Number(take)) ) take=12;
        if(page<1) page=1;
        if(take<1) take=12;
        const products = await prisma.product.findMany({
            take,
            skip: (page - 1) * take,
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true,
                    },
                },
                category: { select: { name: true } },
            },
            where: {
                gender:gender
            },
        });
        const totalCount = await prisma.product.count({
            where: {
                gender:gender
            },
        });
        const totalPages = Math.ceil(totalCount / take);
        return {
            currentPage: page,
            
            totalPages: totalPages,
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
