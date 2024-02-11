
export default function Layout({ children }) {
    return (
        <main>
            <nav className="mt-10 text-black">
                Navegación de las categorías
            </nav>
            {children}
        </main>
    );
}
