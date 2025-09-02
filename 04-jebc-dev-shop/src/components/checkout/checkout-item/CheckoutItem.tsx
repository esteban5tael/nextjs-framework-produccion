
import { Product } from "@/interfaces";
import Image from "next/image";

interface Props {
    product: Product;
}
export const CheckoutItem = ({ product }: Props) => {
    return (
        <div className="flex mb-2">
            <Image
                className="mr-5 rounded"
                src={`/products/${product.images[0]}`}
                alt={product.title}
                width={100}
                height={100}
                style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                }}
            />
            <div>
                <p className="font-bold text-sm">{product.title}</p>
                <p>$ {product.price} x 4</p>
                <p>SubTotal: ${product.price*3}</p>

                
            </div>
        </div>
    );
};
