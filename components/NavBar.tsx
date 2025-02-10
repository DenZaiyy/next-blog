import Link from "next/link";

const NavBar = () => {
    return (
        <nav className={"p-4 b bg-slate-900 text-white"}>
            <ul className="flex gap-4">
                <Link href={"/article"} className="hover:underline hover:text-blue-600 duration-150">Articles</Link>
                <Link href={"/contact"} className="hover:underline hover:text-blue-600 duration-150">Contact</Link>
            </ul>
        </nav>
    )
}

export default NavBar;