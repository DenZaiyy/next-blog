import {formatDate} from "@/lib/utils";
import React from "react";
import Tag from "@/components/Tag";

interface IArticleCardProps {
    article: TArticleWithTagsAndComments;
}

const ArticleCard:React.FC<IArticleCardProps> = ({ article })=> {
    return (
        <div className="group border border-slate-500 p-6 rounded-md hover:bg-slate-700 cursor-pointer hover:-translate-y-2 duration-300">
            {/* Titre de l'article */}
            <h2 className="text-xl font-bold">{article.title}</h2>

            {/* date de l'article */}
            <p className={"text-sm text-slate-300"}>{formatDate(article.createdAt)}</p>

            <div className="flex flex-wrap gap-2 my-4">
                {/* Liste des tags de l'article */}
                {article.tags.map((tagArticle) => (
                    <Tag key={tagArticle.tag.id} text={tagArticle.tag.name} />
                ))}
            </div>


            {/* texte de l'article */}
            <p className="line-clamp-4">{article.text}</p>
        </div>
    )
}

export default ArticleCard;