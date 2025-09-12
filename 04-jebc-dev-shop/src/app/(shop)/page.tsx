export const revalidate = 60;

import { redirect } from "next/navigation";
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";

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

    const { products, /* currentPage, */ totalPages } =
        await getPaginatedProductsWithImages({ page, take });

    if (products.length === 0) {
        redirect("/");
    }

    return (
        <>
            <Title
                title="Tienda"
                subtitle="Todos Los Productos"
                className="mb-2"
            />
            <ProductGrid products={products} />
            <Pagination totalPages={totalPages} />
        </>
    );
}
