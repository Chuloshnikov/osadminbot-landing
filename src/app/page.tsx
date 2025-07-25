import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Stats />
      <Features />
      <Pricing />
    </main>
  );
}
