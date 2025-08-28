"use client";

import Image from "next/image";
import Link from "next/link";
/*  */
import { Product } from "@/interfaces";
import { useState } from "react";

interface Props {
    product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
    const [displayImage, setDisplayImage] = useState(product.images[0])
    return (
        <Link
        className="hover:scale-105 transition-all"
        href={`/product/${product.slug}`}>
            <div className="rounded-md overflow-hidden fade-in">
                <Image
                    className="w-full h-48 object-cover hover:scale-105 transition-all"
                    src={`/products/${displayImage}`}
                    alt={product.title}
                    width={400}
                    height={400}
                    onMouseEnter={()=>{
                        if(product.images.length>1){
                            setDisplayImage(product.images[1])
                        }
                    }}
                    onMouseLeave={()=>{
                        setDisplayImage(product.images[0])
                    }}
                />

                <div className="p-4 flex flex-col">
                    <span className=" hover:text-blue-500">

                    {product.title}
                    </span>
                    <span className="font-bold">
                        ${product.price}
                    </span>
                </div>
            </div>
        </Link>
    );
};
