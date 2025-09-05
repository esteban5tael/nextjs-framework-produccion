import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
    searchParams: {
        page?: string;
        take?: string;
    };
}

export default async function ShopPage({ searchParams }: Props) {
    
    const params = await searchParams;

    const page = params.page ? parseInt(params.page) : 1;
    const take = params.take ? parseInt(params.take) : 12;

    
    const { products } = await getPaginatedProductsWithImages({page, take });

    if(products.length === 0){
        redirect('/');
    }

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
