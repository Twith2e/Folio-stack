"use client";

import { usePortfolioState } from "@/app/contexts/portfolio-state-context";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuLinkedin } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

export default function Preview() {
  const { profile, work } = usePortfolioState();
  return (
    <div className="flex-1 border border-gray-300 p-5 bg-[#2b2b2b]">
      {profile.name && (
        <header className="bg-white text-black px-4 py-4 shadow-md">
          <nav className="flex justify-between items-center">
            <span>{profile.name}</span>
            <ul className="flex gap-3">
              <li>
                <Link href="">Work Experience</Link>
              </li>
              <li>
                <Link href="">Projects</Link>
              </li>
              <li>
                <Link href="">Education</Link>
              </li>
              <li>
                <Link href="">Contact Me</Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
      <main className="mt-7 text-white">
        <div className="flex gap-2 items-start">
          <div className="flex flex-col gap-2 w-[90%]">
            {profile.name && (
              <h2 className="text-3xl">Hi, I am {profile.name}</h2>
            )}
            <p>{profile.bio}</p>
            <div className="flex gap-3 items-center">
              {profile.email && (
                <a href={`mailto:${profile.email}`} target="_blank">
                  <MdOutlineMailOutline size={24} />
                </a>
              )}
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank">
                  <LuLinkedin size={24} />
                </a>
              )}
              {profile.whatsapp && (
                <a href={profile.whatsapp} target="_blank">
                  <FaWhatsapp size={24} />
                </a>
              )}
              {profile.github && (
                <a href={profile.github} target="_blank">
                  <FaGithub size={24} />
                </a>
              )}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {profile.skills.map((skill) => {
              if (skill != "")
                return (
                  <span
                    key={skill}
                    className="p-2 border border-gray-100 hover:scale-104 bg-white text-black"
                  >
                    {skill}
                  </span>
                );
            })}
          </div>
        </div>
        {work.length > 0 && (
          <div>
            <h2 className="text-xl lg:text-3xl font-medium lg:font-bold text-center my-3">
              Work Experience
            </h2>
            {work.map((item, idx) => (
              <div key={idx} className="border border-gray-100 p-2 rounded-md">
                <div className="flex justify-between">
                  <div className="flex gap-3 items-start">
                    <Image
                      src={
                        item.logo !== "" ? item.logo : "/placeholder-logo.png"
                      }
                      alt={item.company}
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col gap-2">
                      <span className="text-2xl">{item.jobTitle}</span>
                      <div className="flex items-center gap-2 text-sm">
                        <Link
                          className="hover:text-[#4F46E5]"
                          href={
                            item.logo.split("https://logo.clearbit.com/")[1]
                          }
                          target="_blank"
                        >
                          {item.company}
                        </Link>
                        <span className="h-5 border border-gray-100"></span>
                        <span>Ibadan, Nigeria</span>
                      </div>
                    </div>
                  </div>
                  <span>Jan 2024 - Till Date</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
