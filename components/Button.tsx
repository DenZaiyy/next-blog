import React from "react";
import Link from "next/link";

interface IButtonProps {
    bgColor?: string;
    hoverColor?: string;
    label: string;
    href: string;
}

const Button:React.FC<IButtonProps> = ({bgColor, hoverColor, label, href}) => {

    const primaryColor = bgColor ? bgColor : 'bg-cyan-900';
    const secondaryColor = hoverColor ? hoverColor : 'bg-cyan-800';

    return (
        <Link
            href={href}
            className={`inline-block px-5 py-2 my-3 ${primaryColor} hover:${secondaryColor} cursor-pointer rounded-lg`}>
            {label}
        </Link>
    )
}

export default Button