"use client";

import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";


const stats = [
  { label: "Available Immediately", value: null, gradient: "bg-gradient-purple-cyan" },
  { label: "Open for Remote Work", value: null, gradient: "bg-gradient-cyan-blue" },
  { label: "Years of Experience", value: 8, gradient: "bg-gradient-yellow-orange" },
  { label: "Projects Delivered", value: 30, gradient: "bg-gradient-green-teal" },
];

type StatCardProps = {
  stat: typeof stats[0];
  delay: number;
};

const StatCard: React.FC<StatCardProps> = ({ stat, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [playCount, setPlayCount] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative flex w-full max-w-[min(16rem,calc(100vw-2rem))] flex-col items-center justify-center rounded-2xl border border-border/20 bg-card/10 p-4 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:border-purple-500/30 hover:shadow-purple-500/20 sm:w-64 sm:max-w-none sm:p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, delay }}
      onAnimationComplete={() => {
        if (isInView) setPlayCount(true);
      }}
    >
     
      <div className={`absolute inset-0 ${stat.gradient} opacity-5 rounded-2xl`} />
      
      {stat.value !== null ? (
        <motion.h2
          className={`relative z-10 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl ${stat.gradient}`}
        >
          {playCount && (
            <CountUp
              start={0}
              end={stat.value}
              duration={2}
              suffix="+"
              redraw={true}
            />
          )}
        </motion.h2>
      ) : (
        <h2
          className={`relative z-10 bg-clip-text text-center text-lg font-semibold text-transparent sm:text-2xl md:text-3xl ${stat.gradient}`}
        >
          {stat.label}
        </h2>
      )}

      {stat.value !== null && (
        <p className="relative z-10 mt-2 text-center text-base text-muted-foreground sm:text-lg">
          {stat.label}
        </p>
      )}
      
   
      <div className={`absolute inset-0 ${stat.gradient} opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`} />
    </motion.div>
  );
};

const StatsPage = () => {
  return (
    <div id="available" className="relative min-h-screen w-full overflow-hidden">
  
     <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url(/tech-bg.jpg)" }}
/>


    
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
     
     <div
  className="absolute right-4 top-8 hidden h-48 w-64 rounded-3xl bg-cover bg-center opacity-20 blur-md sm:right-10 sm:top-10 sm:block sm:h-64 sm:w-96"
  style={{ backgroundImage: "url(/dev-workspace.jpg)" }}
/>

      
      <div className="relative z-10 flex flex-col min-h-screen">
       
        <div className="flex flex-1 items-center px-4 sm:px-8 lg:px-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="mb-4 text-4xl font-bold sm:mb-6 sm:text-5xl lg:text-7xl">
                <span className="bg-gradient-purple-cyan bg-clip-text text-transparent">
                  Software Developer
                </span>
                <br />
               
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
                From concept to click, I handle it all.
Let’s shape your next digital experience together.
              </p>
            </motion.div>
          </div>
        </div>
        
        
        <div className="px-4 pb-12 sm:px-8 sm:pb-16 lg:px-16">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:justify-start">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} delay={idx * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
