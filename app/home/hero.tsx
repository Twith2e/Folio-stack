import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl text-center font-black w-1/2 mx-auto mb-5 relative">
        Build & Launch Your Portfolio in Minutes
        <svg
          className="absolute w-full h-4 left-0 -bottom-2"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M0,5 C25,10 75,0 100,5"
            stroke="#4F46E5"
            strokeWidth="3"
            fill="transparent"
          />
        </svg>
      </h2>
      <p className="text-center">
        No code. No stress. Just your work — beautifully showcased.
      </p>
      <div className="flex gap-3 items-center mt-5">
        <Link
          className="bg-[#4F46E5] p-3 rounded-md text-white text-sm font-medium active:scale-103 transition-all duration-200"
          href=""
        >
          <span>Start Building</span>
        </Link>
        <Link
          className="border-1 border-[#4F46E5] text-sm font-medium p-3 rounded-md"
          href=""
        >
          <span>View Demo</span>
        </Link>
      </div>
      <div className="bg-[#22C55E] shadow-lg rounded-lg p-5 mt-10">
        <Image
          className="rounded-lg"
          src="/screenshot.png"
          width={1000}
          height={1000}
          alt="Screenshot"
        />
      </div>
    </div>
  );
}
