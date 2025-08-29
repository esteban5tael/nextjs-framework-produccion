import { Title, ProductGrid } from "@/components";
import { CategoryEnum } from "@/enums";
import { Product, Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
const seedProducts: Product[] = initialData.products;

interface Props {
    params: {
        id: Category;
    };
}

export default function CategoryPage({ params }: Props) {
    const { id } = params;

    const labels: Record<Category, string> = {
        men: "Hombres",
        women: "Mujeres",
        kid: "Niños",
        unisex: "Unisex",
    };

    if (!Object.values(CategoryEnum).includes(id as CategoryEnum))
        notFound();

    const products = seedProducts.filter(
        (product) => product.gender === id
    );

    return (
        <>
            <Title
                title={`Artículos para ${labels[id]}`}
                subtitle="Los mejores productos para ti"
                className="mb-2"
            />
            <ProductGrid products={products} />
        </>
    );
}
