import Link from "next/link";

export const Header = () => {
    console.log("Hola Mundo Header");
    return (
        <header className="fixed top-0 w-full h-auto px-4 bg-gray-800">
            {/* una barra de navegación con tailwindcss */}
            <nav className="relative h-auto flex justify-end py-5">
                <ul className=" flex h-auto">
                    <li>
                        <Link href="/" className="text-white py-5 px-4">
                            Home
                        </Link>
                    </li>
                    <span className="text-white mx-4"> | </span>
                    <li>
                        <Link href="/store" className="text-white py-5 px-4">
                            Store
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}