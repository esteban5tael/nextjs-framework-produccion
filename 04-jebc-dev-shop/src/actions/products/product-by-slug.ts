"use server"

import prisma  from "@/lib/prisma";
import { notFound } from "next/navigation";

export const getProductBySlug = async (slug: string) => {
    try {
        const product=await prisma.product.findUnique({
            where: {
                slug: slug,
            },
            include:{
                ProductImage:{
                    select:{
                        url:true,
                    }
                }
            }
        });

        if (!product) {
            notFound();
        }

        return{
            ...product,
            images: product.ProductImage.map(img => img.url),
        }
    } catch (error) {
        console.log(error);
        notFound();
    }
}