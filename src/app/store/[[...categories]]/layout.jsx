import Link from "next/link";

export default function Layout({ children }) {
    return (
        <main>
            <nav className="mt-10 text-black ml-5">
                <ul className="flex">
                    <li>
                        <Link href="/store">Store /</Link>
                    </li>
                    <li>
                        <span className="text-gray-600 ml-1">Tech</span>
                    </li>
                </ul>
            </nav>
            {children}
        </main>
    );
}
