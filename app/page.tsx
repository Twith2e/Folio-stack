import Features from "./ui/home/features";
import Hero from "./ui/home/hero";

export default function Home() {
  return (
    <main className="pt-30 pb-5">
      <section>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
    </main>
  );
}
