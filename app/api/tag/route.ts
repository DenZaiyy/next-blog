import {db} from "@/lib/db";
import {NextResponse} from "next/server";

export async function GET() {
    try {
        const tags = await db.tag.findMany({
            orderBy: {
                name: 'asc'
            }
        });

        // retourne une réponse au format json avec la liste des articles
        return NextResponse.json(tags);

    } catch (error) {
        console.log('[TAGS] ', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}