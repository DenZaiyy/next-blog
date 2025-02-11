import { redirect } from "next/navigation";

export const fetchArticle = async (articleId: string): Promise<TArticleWithTagsAndComments> => {

    const res = await fetch(`/api/article/${articleId}`, {
        cache: "no-store"
    });

    if(!res.ok) redirect('/article')

    return res.json();
}