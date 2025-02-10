interface TTag {
    id: string;
    name: string;
}

interface TTagArticle {
    id: string;
    tag: TTag;
}

interface TComment {
    id: string;
    text: string;
    userId: string;
    createdAt: Date;
}

interface TArticleWithTagsAndComments {
    id: string;
    title: string;
    text: string;
    slug: string;
    createdAt: Date;
    tags: TTagArticle[];
    comments: TComment[];
}