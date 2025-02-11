import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import {fetchArticles} from "@/app/api/article/hooks/fetchArticles";
import ArticleList from "@/components/ArticleList";

const ArticlePage = async () => {

    const articles = await fetchArticles();

    /*const [articles, setArticles] = useState<TArticleWithTagsAndComments[] | null >(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await fetchArticles();
                setArticles(data);

            } catch (err) {
                console.log('[ARTICLES] ', err);
            }
            const response = await fetch('/api/article');
            const data: TArticleWithTagsAndComments[] = await response.json();
            setArticles(data);
        }

        fetchArticles()
    }, []);*/

    return (
        <>
            <h1 className="text-4xl font-bold mb-6">Blog</h1>

            <ArticleList articles={articles} />
        </>
    );
}

export default ArticlePage;