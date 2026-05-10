import { PROJECTS_SHOWCASE } from "@/constants";

/** Hero cutout, hero-side portrait, about-me profile — loaded first with project thumbnails. */
const HERO_AND_PROFILE = [
  "/hero_body_cutout.svg",
  "/formal2.jpg",
  "/profile.png",
] as const;

/** Unique paths for `<link rel="preload">` and the initial load gate. */
export const CRITICAL_IMAGE_PATHS: string[] = Array.from(
  new Set<string>([
    ...HERO_AND_PROFILE,
    ...PROJECTS_SHOWCASE.map((p) => p.image),
  ]),
);
