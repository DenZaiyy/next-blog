import { redirect } from "next/navigation";

export const fetchArticle = async (articleId: string): Promise<TArticleWithTagsAndComments> => {
    const baseUrl = process.env.NODE_ENV === "production"
    ? "https://next-blog.vercel.app"
    : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/article/${articleId}`, {
        cache: "no-store"
    });

    if(!res.ok) redirect('/article')

    return res.json();
}