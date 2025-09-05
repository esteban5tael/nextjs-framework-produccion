import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";
import { Product } from "@/interfaces";


const {products} =await getPaginatedProductsWithImages() ;

export default async function ShopPage() {
    console.log(products);
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
