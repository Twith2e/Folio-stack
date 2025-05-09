import Features from "./home/features";
import Hero from "./home/hero";

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
