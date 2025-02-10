import {NextRequest, NextResponse} from "next/server";
import {db} from "@/lib/db";

type TPageProps = {
    params: Promise<{ commentId: string }>;
}

export async function DELETE(req: NextRequest, { params }: TPageProps) {
    try {
        const { commentId } = await params;

        if(req.method !== 'DELETE') return new NextResponse('Method Not Allowed', { status: 405 });

        const comment = await db.comment.findUnique({where: {id: commentId}})

        if(!comment) {
            return NextResponse.json(
                {message: "Comment not found"},
                {status: 404}
            )
        }

        await db.comment.delete({
            where: {
                id: commentId
            }
        });

        return NextResponse.json(
            {message: "Comment deleted successfully"},
            {status: 200}
        )
    } catch (err) {
        console.log('[ARTICLE] ', err);
        return new NextResponse('Internal Error', { status: 500 });
    }
}