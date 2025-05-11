import PersonalInfo from "./portfolio-generator/personal-info";
import ProfessionalInfo from "./portfolio-generator/professional-info";

export default function PortfolioInfo() {
  return (
    <div className="overflow-y-auto px-2 lg:px-4 lg:h-screen">
      <PersonalInfo />
      <ProfessionalInfo />
    </div>
  );
}
