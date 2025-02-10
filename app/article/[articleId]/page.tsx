"use client";

import {use, useEffect, useState} from "react";
import {fetchArticle} from "@/app/api/article/hooks/fetchArticle";
import Tag from "@/components/Tag";
import Comment from "@/components/Comment";

type TPageProps = {
    params: Promise<{ articleId: string }>;
}

const ArticleDetail = ({ params }: TPageProps)=> {

    const { articleId } = use(params);

    const [article, setArticle] = useState<TArticleWithTagsAndComments | null>(null)

    useEffect(() => {
        const loadArticle = async () => {
            try {
                const data = await fetchArticle(articleId);
                setArticle(data);
            } catch (error) {
                console.log('[ARTICLE] ', error)
            }
        }

        loadArticle();

    }, [articleId]);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">{article?.title}</h1>

            <div className={"my-5 flex flex-wrap gap-2"}>
                {article?.tags.map((tagArticle: TTagArticle) => (
                    <Tag key={tagArticle.tag.id} text={tagArticle.tag.name}/>
                ))}
            </div>

            <p>{article?.text}</p>
            {article?.comments && article.comments.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-2xl font-bold mb-3">Comments ({article?.comments.length})</h2>
                    <div className="flex gap-4 flex-col">
                        {article?.comments.map((comment: TComment) => (
                            <Comment key={comment.id} comment={comment} />
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}

export default ArticleDetail