import React from "react";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";

interface IArticleListProps {
    articles: TArticleWithTagsAndComments[];
}

const ArticleList:React.FC<IArticleListProps> = ({ articles })=> {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Liste des articles */}
            {articles.map((article: TArticleWithTagsAndComments, index ) => (
                <Link key={index} href={`/article/${article.id}`}>
                    <ArticleCard article={article} />
                </Link>
            ))}
        </div>
    )
}

export default ArticleList;