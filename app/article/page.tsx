"use client";

import {useEffect, useState} from "react";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

const ArticlePage = () => {

    const [articles, setArticles] = useState<TArticleWithTagsAndComments[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('/api/article');
            const data: TArticleWithTagsAndComments[] = await response.json();
            setArticles(data);
        }

        fetchArticles()
    }, []);

    return (
        <>
            <h1 className="text-4xl font-bold mb-6">Blog</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Liste des articles */}
                {articles.map((article: any ) => (
                    <Link key={article.id} href={`/article/${article.id}`}>
                        <ArticleCard article={article} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default ArticlePage;