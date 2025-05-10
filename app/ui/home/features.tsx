import { featuresInfos } from "../../data";
import FeatureCard from "./feature-card";

export default function Features() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center">Features</h2>
      <div className="bg-[#fff] flex gap-5 justify-center flex-wrap mt-2 p-10 ">
        {featuresInfos.map((feature) => (
          <FeatureCard
            key={feature.id}
            Icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
