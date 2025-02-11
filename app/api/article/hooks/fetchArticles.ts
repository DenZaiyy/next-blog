import { redirect } from "next/navigation";

export const fetchArticles = async (): Promise<TArticleWithTagsAndComments[]> => {
    const baseUrl = process.env.NODE_ENV === "production"
        ? "https://next-blog-38tkaycy3-denzaiyys-projects.vercel.app/"
        : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/article/`, {
        cache: "no-store"
    });

    if(!res.ok) redirect('/article')

    return res.json();
}