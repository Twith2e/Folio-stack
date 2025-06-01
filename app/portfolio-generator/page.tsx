import { PortfolioProvider } from "../contexts/portfolio-state-context";
import EditorPreview from "../ui/portfolio-generator/editor-preview";
import InlineEditor from "../ui/portfolio-generator/inline-editor";
// import Preview from "../ui/portfolio-generator/preview";
import PortfolioInfo from "../ui/portfolio-info";

export default function PortfolioGenerator() {
  return (
    <PortfolioProvider>
      <main className="pt-24 pb-5 px-6 lg:px-12">
        {/* <div className="flex flex-col lg:flex-row gap-8">
        <PortfolioProvider>
          <PortfolioInfo />
          <Preview />
        </PortfolioProvider>  
      </div> */}
        <EditorPreview />
      </main>
    </PortfolioProvider>
  );
}
