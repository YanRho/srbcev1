import About from "@/components/about";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Services/>
      <Gallery/>
    </>
  );
}
