import Image from "next/image";

export default function Category(props) {
    console.log(props);
    const { categories } = props.params;
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-10">
            <h1 className="text-2xl"> {categories !== undefined? `Categoría Dinámica - ${categories.join(" / ")}` : "Store"} </h1>
        </main>
    );
}
