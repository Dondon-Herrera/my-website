import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

/**
 * All breakpoints: flex-wrap + justify-center so each row’s icons cluster in the middle.
 * Avoids CSS grid “empty columns” on partial last rows (irregular gaps on mobile).
 */
const skillRowClass =
  "flex w-full max-w-[min(100%,80rem)] mx-auto flex-row flex-wrap justify-center items-center " +
  "gap-x-3 gap-y-4 sm:gap-x-4 sm:gap-y-4 md:gap-x-5 md:gap-y-5 px-2 sm:px-4";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(1)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10 sm:py-14 px-3 sm:px-6"
    >
      <SkillText />
      <div className={`${skillRowClass} mt-4`}>
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className={`${skillRowClass} mt-4`}>
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className={`${skillRowClass} mt-4`}>
        {BACKEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className={`${skillRowClass} mt-4`}>
        {FULLSTACK_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className={`${skillRowClass} mt-4`}>
        {OTHER_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
   