import { getPaginatedProductsWithImages } from "@/actions";
import { Title, ProductGrid, Pagination } from "@/components";
import { CategoryEnum } from "@/enums";
import { Gender } from "@/generated/prisma";

import { notFound, redirect } from "next/navigation";

interface Props {
    params: {
        gender: string;
    };

    searchParams: {
        page?: string;
        take?: string;
    };
}

export default async function CategoryPage({
    params,
    searchParams,
}: Props) {
    const { gender } = await params;
    const resolvedSearchParams = await searchParams;

    const page = resolvedSearchParams.page
        ? parseInt(resolvedSearchParams.page)
        : 1;
    const take = resolvedSearchParams.take
        ? parseInt(resolvedSearchParams.take)
        : 12;

    const { products,/* currentPage, */totalPages } = await getPaginatedProductsWithImages({
        page,
        take,
        gender:gender as Gender,
    });

    if (products.length === 0) {
        redirect(`/gender/${gender}`);
    }

    const labels: Record<string, string> = {
        men: "Hombres",
        women: "Mujeres",
        kid: "Niños",
        unisex: "Unisex",
    };

    if (!Object.values(CategoryEnum).includes(gender as CategoryEnum))
        notFound();

    return (
        <>
            <Title
                title={`Artículos para ${labels[gender]}`}
                subtitle="Los mejores productos para ti"
                className="mb-2"
            />
            <ProductGrid products={products} />
             <Pagination totalPages={totalPages} /> 
        </>
    );
}
