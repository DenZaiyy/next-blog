import Button from "@/components/Button";
import {CalendarDays, Trash2, UserRound} from "lucide-react";
import React from "react";
import {formatDate} from "@/lib/utils";
import toast from "react-hot-toast";

interface ICommentProps {
    comment: TComment;
}

const Comment: React.FC<ICommentProps> = ({comment}) => {

    const handleCommentDelete = async (id: string) => {
        try {
            if(confirm('Êtes-vous sûre de vouloir supprimer le commentaire ?')) {
                const res = await fetch(`/api/comment/${id}`, {
                    method: 'DELETE',
                    cache: "no-store"
                })

                if (!res.ok) {
                    toast.success('Comment deleted successfully');
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                } else {
                    toast.error('Une erreur est survenue lors de la suppression du commentaire');
                }
            }
        } catch (err) {
            console.log('[COMMENT] ', err);
            toast.error('Une erreur est survenue lors de la suppression du commentaire');
        }

    }

    return (
        <div className="rounded-md bg-slate-700 p-4 flex flex-col relative">

            <button
                type={"submit"}
                className="absolute flex gap-2 items-center top-4 right-4 rounded-md bg-red-600 hover:bg-red-700 duration-300 py-2 px-4 cursor-pointer"
                onClick={() => handleCommentDelete(comment.id)}
            >
                <Trash2 size={20}/>
                Delete
            </button>

            <div className="flex gap-2">
                <UserRound />
                {comment?.userId}
            </div>
            <div className="text-sm flex items-center gap-2">
                <CalendarDays />
                <p className="text-gray-300">{formatDate(comment?.createdAt)}</p>
            </div>
            <p className='mt-2'>
                {comment?.text}
            </p>
        </div>
    )
}

export default Comment