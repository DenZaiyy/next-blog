import {NextRequest, NextResponse} from "next/server";
import {db} from "@/lib/db";

type TPageProps = {
    params: Promise<{ commentId: string }>;
}

export async function DELETE(req: NextRequest, { params }: TPageProps) {
    const { commentId } = await params;

    try {
        await db.comment.delete({
            where: {
                id: commentId
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