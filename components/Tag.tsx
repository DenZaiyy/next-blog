import React from "react";

interface ITagProps {
    text: string;
}

const Tag:React.FC<ITagProps> = ({text}) => {
    return (
        <span className={"text-xs rounded-full px-3 py-2 bg-slate-600 group-hover:bg-blue-600 hover:bg-blue-600 cursor-pointer duration-300"}>
            {text}
        </span>
    )
}

export default Tag