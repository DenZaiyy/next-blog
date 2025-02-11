import { redirect } from "next/navigation";

export const fetchArticle = async (articleId: string): Promise<TArticleWithTagsAndComments> => {

    const res = await fetch(`${process.env.BASE_URL}/api/article/${articleId}`, {
        cache: "no-store"
    });

    if(!res.ok) redirect('/article')

    return res.json();
}