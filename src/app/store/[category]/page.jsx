import Image from "next/image";

export default function Category({ params }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-10">
            <h1 className="text-2xl">Categoría Dinámica - {params.category}</h1>
        </main>
    );
}
