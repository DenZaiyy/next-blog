import { redirect } from "next/navigation";

export const fetchArticles = async (): Promise<TArticleWithTagsAndComments[]> => {

    const res = await fetch(`${process.env.BASE_URL}/api/article/`, {
        cache: "no-store"
    });

    if(!res.ok) redirect('/article')

    return res.json();
}