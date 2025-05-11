import { PortfolioProvider } from "../contexts/portfolio-state-context";
import Preview from "../ui/portfolio-generator/preview";
import PortfolioInfo from "../ui/portfolio-info";

export default function PortfolioGenerator() {
  return (
    <main className="pt-24 pb-5 px-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <PortfolioProvider>
          <PortfolioInfo />
          <Preview />
        </PortfolioProvider>
      </div>
    </main>
  );
}
