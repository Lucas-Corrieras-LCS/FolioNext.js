"use client";

import Image from "next/image";
import ParticlesJS from "../app/particuleback/particles";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto"
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          <WavyText4 />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet, index) => (
            <motion.div
              key={projet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/projets/${projet.id}`}
                className="group relative block h-80 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                <Image
                  src={projet.image}
                  alt={projet.titre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {projet.titre}
                  </h3>
                  <p className="text-neutral-300 line-clamp-2">
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
