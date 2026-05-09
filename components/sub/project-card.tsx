import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({ src, title, description, link }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.7)] transition transform hover:scale-105 hover:shadow-purple-500/40"
    >
      <div className="p-3 sm:p-4">
        {/* Project Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-2">
          {title}
        </h1>

        {/* Full Image */}
        <div className="flex flex-1 items-center justify-center p-2 sm:p-3">
          <Image
            src={src}
            alt={title}
            width={600}
            height={400}
            className="max-h-[180px] w-auto object-contain rounded-lg sm:max-h-[220px] md:max-h-[260px]"
            loading="lazy" // Lazy load for better performance
            placeholder="blur" // Optional: show blurred preview while loading
            blurDataURL={src} // Required if using placeholder="blur"
          />
        </div>

        {/* Description */}
        <p
          className={`mt-2 text-gray-300 text-sm sm:text-base transition-all duration-300 ${
            !isExpanded ? "line-clamp-4" : ""
          }`}
        >
          {description}
        </p>

        {/* Read More / Less Button */}
        {description.split(" ").length > 25 && (
          <button
            onClick={(e) => {
              e.preventDefault(); // prevent Link navigation
              setIsExpanded(!isExpanded);
            }}
            className="mt-2 text-cyan-400 text-sm hover:underline"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </Link>
  );
};
