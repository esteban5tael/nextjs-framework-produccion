import { Gender } from "@/generated/prisma";

export interface PaginationOptions{
    page?: number;
    take?: number;
    gender?:Gender;
}