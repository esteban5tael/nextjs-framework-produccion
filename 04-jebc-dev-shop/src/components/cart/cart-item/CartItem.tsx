import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector"
import { Product } from "@/interfaces"
import Image from "next/image"

interface Props{
    product:Product
}
export const CartItem = ({product}:Props) => {
  return (
    <div className="flex">
        <Image
        className="mr-5 rounded"
        src={`/products/${product.images[0]}`}
        alt={product.title}
        width={100}
        height={100}
        />
        <div>
            <p>
                {product.title}
            </p>
            <p>
                $ {product.price}
            </p>
            <QuantitySelector
            quantity={3}
            />

            <button className="underline mt-3">Remover</button>
        </div>
    </div>
  )
}
