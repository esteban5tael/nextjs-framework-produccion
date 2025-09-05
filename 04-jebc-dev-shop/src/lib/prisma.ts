import { PrismaClient } from "../generated/prisma";

const prismaClientSingleton = () => {
    return new PrismaClient();
};

type PrismaClientType = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = global as unknown as {
    prisma: PrismaClientType | undefined;
};
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = prisma;

/* export  const prisma = new PrismaClient();
export default prisma; */