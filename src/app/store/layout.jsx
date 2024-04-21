import Link from "next/link";

export default function Layout({ children }) {
    return (
        <main>
            <nav className="mt-10 text-black">
                <ul className="flex justify-around w-11/12 mx-auto bg-black text-white mt-20 p-4">
                    <li>
                        <Link href="/store/Ropa">Ropa</Link>
                    </li>
                    <li>
                        <Link href="/store/Tech">Tech</Link>
                    </li>
                    <li>
                        <Link href="/store/Food">Food</Link>
                    </li>
                    <li>
                        <Link href="/store/Trucks">Trucks</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </main>
    );
}
