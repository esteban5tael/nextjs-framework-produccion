import { ProductGrid, Title } from "@/components";
import { Product } from "@/interfaces";
import { initialData } from "@/seed/seed";

const products:Product[] = initialData.products;

export default function ShopPage() {
    return (
        <>
            <Title
                title="Tienda"
                subtitle="Todos Los Productos"
                className="mb-2"
            />
            <ProductGrid products={products} />
        </>
    );
}
