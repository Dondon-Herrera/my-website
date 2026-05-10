import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import CustomCursorWrapper from "@/components/common/CustomCursorWrapper";
import { InitialLoadOverlay } from "@/components/common/initial-load-overlay";
import { Footer } from "@/components/main/footer";
import { HeroFixedChrome } from "@/components/main/hero-fixed-chrome";
import { StarsCanvas } from "@/components/main/star-background";
import { AudioPlayer } from "@/components/main/audio-player";
import { siteConfig } from "@/config";
import { CRITICAL_IMAGE_PATHS } from "@/lib/critical-images";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        {CRITICAL_IMAGE_PATHS.map((href) => (
          <link
            key={href}
            rel="preload"
            href={href}
            as="image"
            type={href.endsWith(".svg") ? "image/svg+xml" : undefined}
          />
        ))}
      </head>
      <body
        className={cn(
          "relative scroll-smooth overflow-y-scroll overflow-x-hidden bg-transparent",
          inter.className
        )}
      >
        <div
          className="fixed inset-0 z-0 bg-[#030014]"
          aria-hidden
        />
        <StarsCanvas variant="viewport" />
        <CustomCursorWrapper />
        <HeroFixedChrome />
        <div className="app-main-shell relative z-10">
          {children}
          <AudioPlayer />
          <Footer />
        </div>
        <InitialLoadOverlay />
      </body>
    </html>
  );
}
