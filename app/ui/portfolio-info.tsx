import PersonalInfo from "./portfolio-generator/personal-info";
import ProfessionalInfo from "./portfolio-generator/professional-info";

export default function PortfolioInfo() {
  return (
    <div className="overflow-y-scroll px-4 h-screen">
      <PersonalInfo />
      <ProfessionalInfo />
    </div>
  );
}
