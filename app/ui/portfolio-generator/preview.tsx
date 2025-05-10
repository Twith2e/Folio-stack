"use client";

import { usePortfolioState } from "@/app/contexts/portfolio-state-context";

export default function Preview() {
  const { profile, projects, theme } = usePortfolioState();
  return (
    <div className="flex-1 border border-gray-300 p-5 bg-[#2b2b2b]">
      {profile.name && (
        <header className="bg-white text-black px-4 py-4 shadow-md">
          <nav className="flex justify-between items-center">
            <span>{profile.name}</span>
            <ul className="flex gap-3">
              <li>Work Experience</li>
              <li>Projects</li>
              <li>Education</li>
              <li>Contact Me</li>
            </ul>
          </nav>
        </header>
      )}
      <main className="mt-7 text-white">
        <div className="flex gap-6">
          <div className="flex flex-col gap-2">
            {profile.name && (
              <h2 className="text-3xl">Hi, I am {profile.name}</h2>
            )}
            <p>{profile.bio}</p>
          </div>
          <div>
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="p-2 rounded-md bg-gray-300 text-black"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
