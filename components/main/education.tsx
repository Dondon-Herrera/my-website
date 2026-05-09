// "use client";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25, // delay between children
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: -40 }, // come out of the line
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { type: "spring", stiffness: 80, damping: 12 },
//   },
// };

// export const Education = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center py-12 sm:py-20 overflow-hidden bg-transparent">
//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, type: "spring" }}
//         viewport={{ once: false, amount: 0.3 }}
//         className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent 
//                    bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 
//                    mb-14 z-10 text-center"
//       >
//          Education & Certifications
//       </motion.h2>

//       {/* Education Section */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.3 }}
//         className="relative w-full max-w-4xl px-4 sm:px-6 md:px-10 mb-16"
//       >
//         <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4 tracking-wide">
//            Education
//         </h3>
//         <motion.div
//           className="pl-4 border-l-2 border-cyan-400/40 space-y-2"
//           variants={containerVariants}
//         >
//           <motion.p variants={itemVariants} className="text-xl text-white font-semibold">
//             Uttaranchal University
//           </motion.p>
//           <motion.p variants={itemVariants} className="text-sm text-gray-400">
//             Dehradun, Uttarakhand
//           </motion.p>
//           <motion.p variants={itemVariants} className="text-sm text-gray-400">
//             Sep 2021 – May 2025
//           </motion.p>
//           <motion.p variants={itemVariants} className="mt-2 text-gray-200 text-base">
//             B.Tech in Computer Science and Engineering
//           </motion.p>
//           <motion.p variants={itemVariants} className="text-gray-300 text-sm">
//             CGPA: 9.36
//           </motion.p>
//         </motion.div>
//       </motion.div>

//       {/* Certifications Section */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.3 }}
//         className="relative w-full max-w-4xl px-4 sm:px-6 md:px-10"
//       >
//         <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-4 tracking-wide">
//            Certifications
//         </h3>
//         <motion.ul
//           className="pl-4 border-l-2 border-purple-400/40 space-y-3 text-gray-300 text-sm md:text-base"
//           variants={containerVariants}
//         >
//           <motion.li variants={itemVariants} className="hover:text-white transition">
//             Full Stack Web Development • 8 Weeks • Internshala
//           </motion.li>
//           <motion.li variants={itemVariants} className="hover:text-white transition">
//             Web Development • 8 Weeks • Brillica Services
//           </motion.li>
//           <motion.li variants={itemVariants} className="hover:text-white transition">
//             Introduction to JavaScript • 3 Hours • Great Learning
//           </motion.li>
//           <motion.li variants={itemVariants} className="hover:text-white transition">
//             Automated Feature Extraction from High-Resolution Images • 7.5 Hours • IIRS
//           </motion.li>
//         </motion.ul>
//       </motion.div>

//       {/* Futuristic Grid Background */}
//       <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.3),transparent_70%)]" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
//       </div>
//     </section>
//   );
// };
"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

// Diamond bullet
const DiamondBullet = ({ color = "from-purple-400 to-cyan-400" }) => (
  <span
    className={`inline-block w-3 h-3 sm:w-4 sm:h-4 rotate-45 bg-gradient-to-r ${color} 
                shadow-[0_0_10px_rgba(147,51,234,0.8)] animate-pulse mr-2`}
  />
);

export const Education = () => {
  return (
    <section
      id="education"
      className="relative flex flex-col items-center justify-center py-12 sm:py-20 overflow-hidden bg-transparent"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent 
                   bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 
                   mb-14 z-10 text-center"
      >
         Education & Certifications
      </motion.h2>

      {/* Education Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-full max-w-4xl px-4 sm:px-6 md:px-10 mb-16"
      >
        <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold tracking-wide text-cyan-300 md:text-3xl">
          <DiamondBullet color="from-cyan-400 to-blue-400" />
             Education
        </h3>
        <motion.div
          className="pl-4 border-l-2 border-cyan-400/40 space-y-2"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="text-xl text-white font-semibold">
            Uttaranchal University
          </motion.p>
          <motion.p variants={itemVariants} className="text-sm text-gray-400">
            Dehradun, Uttarakhand
          </motion.p>
          <motion.p variants={itemVariants} className="text-sm text-gray-400">
            Sep 2021 – May 2025
          </motion.p>
          <motion.p variants={itemVariants} className="mt-2 text-gray-200 text-base">
            B.Tech in Computer Science and Engineering
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-300 text-sm">
            CGPA: 9.36
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-full max-w-4xl px-4 sm:px-6 md:px-10"
      >
        <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold tracking-wide text-purple-300 md:text-3xl">
          <DiamondBullet color="from-purple-400 to-pink-400" />
          Certifications
        </h3>
        <motion.ul
          className="pl-4 border-l-2 border-purple-400/40 space-y-3 text-gray-300 text-sm md:text-base"
          variants={containerVariants}
        >
          <motion.li variants={itemVariants} className="hover:text-white transition">
            Full Stack Web Development • 8 Weeks • Internshala
          </motion.li>
          <motion.li variants={itemVariants} className="hover:text-white transition">
            Web Development • 8 Weeks • Brillica Services
          </motion.li>
          <motion.li variants={itemVariants} className="hover:text-white transition">
            Introduction to JavaScript • 3 Hours • Great Learning
          </motion.li>
          <motion.li variants={itemVariants} className="hover:text-white transition">
            Automated Feature Extraction from High-Resolution Images • 7.5 Hours • IIRS
          </motion.li>
        </motion.ul>
      </motion.div>

      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.3),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </section>
  );
};
