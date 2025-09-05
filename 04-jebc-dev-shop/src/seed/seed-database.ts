
import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main(): Promise<void> {
    await Promise.all([
        console.log(`Deleting database...`),
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
        console.log(`Database deleted.`),
    ]);

        console.log(`Seeding database...`);
    const { categories, products } = initialData;

    const categoriesData = categories.map((category) => {
        return { name: category };
    });

    

    await prisma.category.createMany({
        data: categoriesData,
    });

    

    const categoriesDB = await prisma.category.findMany();
    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[category.name.toLocaleLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>);

    
    products.forEach(async (product) => {
        const { type, images, ...rest } = product;
        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                category_id: categoriesMap[type],
            },
        });


        const imagesData = images.map(image=>({
            url : image,
            product_id: dbProduct.id
        }));

        const productImages = await prisma.productImage.createMany({
            data: imagesData
        });
        console.log({productImages});
        
    });

    console.log(`Database seeded.`);

}

(() => {
    if (process.env.NODE_ENV === "production") return;
    main();
})();
