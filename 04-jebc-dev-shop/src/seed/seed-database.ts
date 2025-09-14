import prisma from "../lib/prisma";
import { initialData } from "./seed";
import bcrypt from "bcryptjs";
interface SeedUser{
    
    name: string;
    email: string;
    password: string;
    role: "admin"|"user";

}
async function main(): Promise<void> {
    await console.log(`Deleting database...`);
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
    await console.log(`Database deleted.`);

    const initialUsersData: SeedUser[] = [
            {
                name: "Admin User",
                email: "admin@admin.com",
                password:bcrypt.hashSync( "admin123"), 
                role: "admin",
            },
            {
                name: "Normal User",
                email: "user@user.com",
                password:bcrypt.hashSync( "user123"), 
                role: "user",
            },
        ];
    console.log(`Seeding database...`);
     await prisma.user.createMany({
        data: initialUsersData
    });
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

        const imagesData = images.map((image) => ({
            url: image,
            product_id: dbProduct.id,
        }));

        const productImages = await prisma.productImage.createMany({
            data: imagesData,
        });
        console.log({ productImages });
    });

    console.log(`Database seeded.`);
}

(() => {
    if (process.env.NODE_ENV === "production") return;
    main();
})();
