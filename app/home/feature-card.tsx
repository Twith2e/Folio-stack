import { FeatureCardPropsType } from "../definitions";

export default function FeatureCard({
  title,
  description,
  Icon,
}: FeatureCardPropsType) {
  return (
    <div className="border-2 border-[#4e46e5] rounded-md shadow-md flex flex-col items-start gap-2 p-3 max-w-xs hover:-translate-y-5 transition-transform duration-300">
      <div className="border border-gray-100 shadow-md p-1 rounded-md">
        <Icon size={24} color="#4F46E5" />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <span className="text-base">{description}</span>
    </div>
  );
}
