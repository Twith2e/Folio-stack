import { Work } from "@/app/definitions";
import Image from "next/image";
import Link from "next/link";

export default function WorkExperienceTemplate({
  jobTitle,
  company,
  startDate,
  endDate,
  companyLink,
  logo = "https://placehold.co/200x60.svg?text=Logo",
  location,
}: Work) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex gap-4 items-start">
        <div>
          <Image src={logo} alt={company} width={50} height={50} />
        </div>
        <div>
          <h2>{jobTitle}</h2>
          <span>
            <Link href={companyLink}>{company}</Link>
            <span> - </span>
            <span>{location}</span>
          </span>
        </div>
      </div>
      <div>
        <span>
          {startDate} - {endDate}
        </span>
      </div>
    </div>
  );
}
