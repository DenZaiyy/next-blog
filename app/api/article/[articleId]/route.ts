import {db} from "@/lib/db";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ articleId: string }> }) {
    const { articleId } = await params;

    try {
        const article = await db.article.findUnique({
            where: {
                id: articleId
            },
            include: {
                tags: {
                    include: {
                        tag: true
                    }
                },
                comments: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            }
        });

        // retourne une réponse au format json avec la liste des articles
        return NextResponse.json(article);

    } catch (error) {
        console.log('[ARTICLES] ', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ articleId: string }> }) {
    const { articleId } = await params;

    try {
        await db.article.delete({
            where: {
                id: articleId
            }
        });

        return NextResponse.json(
            { message: "Article deleted successfully" },
            { status: 200 }
        );
    } catch (err) {
        console.log('[ARTICLE] ', err);
        return new NextResponse('Internal Error', { status: 500 });
    }
}