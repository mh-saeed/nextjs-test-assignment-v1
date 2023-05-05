// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import Table from "@/components/table/Table";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Table />
    </main>
  );
}
