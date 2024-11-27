import About from "@/components/about";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About/>
    </>
  );
}
