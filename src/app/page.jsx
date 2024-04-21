'use client'
import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { MainProducts } from "app/components/home/MainProducts";

export default function Home() {
  console.log("Hello world");
  return (
    <main className="flex h-screen flex-col items-center justify-around p-24">
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
