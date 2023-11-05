'use server';

import { db } from "@/prisma/prismaClient";
import { revalidatePath } from "next/cache";

export const postBlog = async (data: {
    title: string;
    subTitle: string;
    category: string;
    slug: string,
    body: string
},) => {
    'use server';
    await db.blogs.create({ data });
    revalidatePath('/tech-blog');
}

export const getBlogBySlug = async (slug: string) => {
    const blog = await db.blogs.findUnique({ where: { slug } });
    return blog;
}

export const getBlogs = async () => {
    const blogs = await db.blogs.findMany({ select: { title: true, subTitle: true, category: true, slug: true, createdAt: true } });
    return blogs;
} 