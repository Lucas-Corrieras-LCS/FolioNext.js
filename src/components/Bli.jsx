"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projets } from "../app/data/data";
import WavyText4 from "../components/waywe4";
import { useEffect, useState } from "react";

export default function Bli() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 sm:mb-12">
          <WavyText4 />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {projets.map((projet, index) => (
            <motion.div
              key={projet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0% 0% 0%" }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="transform-gpu"
            >
              <Link
                href={`/projets/${projet.id}`}
                className="group relative block h-64 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                <Image
                  src={projet.image}
                  alt={projet.titre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 90vw, 400px"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    {projet.titre}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 line-clamp-2">
                    {projet.descriptionCourte}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
