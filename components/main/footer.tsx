import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <>
      <div className="h-1.5 sm:h-2" aria-hidden />
      <div
        id="site-footer"
        className="mt-0 h-full w-full bg-white/10 p-3 text-gray-200 shadow-lg sm:p-[15px]"
      >
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-start justify-between">
            {FOOTER_DATA.map((column, idx) => (
              <div
                key={column.title}
                className={
                  idx === 0
                    ? "md:col-span-1 col-span-1 w-full h-auto flex flex-col items-start justify-start md:items-start md:ml-8"
                    : "min-w-[200px] h-auto flex flex-col items-center justify-start"
                }
              >
                <h3
                  className={
                    (idx === 0
                      ? "font-bold text-[22px] mb-3 text-left tracking-wide "
                      : "font-bold text-[20px] mb-3 text-center tracking-wide ") +
                    "bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 bg-clip-text text-transparent"
                  }
                >
                  {column.title}
                </h3>
                {column.data.map(({ icon: Icon, name, link }) =>
                  link ? (
                    <Link
                      key={`${column.title}-${name}`}
                      href={link}
                      {...(link.startsWith("http")
                        ? { target: "_blank" as const, rel: "noreferrer noopener" }
                        : {})}
                      className="flex flex-row items-center my-[10px] text-[15px]"
                    >
                      {Icon && (
                        <Icon className="h-[18px] w-[18px] shrink-0 opacity-90" aria-hidden />
                      )}
                      <span className="ml-[6px]">{name}</span>
                    </Link>
                  ) : (
                    <span
                      key={`${column.title}-${name}`}
                      className={
                        idx === 0
                          ? "my-[10px] text-[14px] text-left leading-relaxed"
                          : "flex flex-row items-center my-[10px] text-[10px] ml-[6px] text-center"
                      }
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
          <div className="mb-[12px] sm:mb-[20px] text-[12px] sm:text-[14px] text-center mt-6 sm:mt-8">
            &copy; Dondon Herrera {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};
