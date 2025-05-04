"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { projets } from "../../data/data";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ParticlesJS = dynamic(() => import("../../particuleback/particles"), {
  ssr: false,
});

const ArrowLeftIcon = () => (
  <svg
    className="w-5 h-5 transition-transform group-hover:-translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

export default function ProjectPage() {
  const { id } = useParams();
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const projet = projets.find((p) => p.id === id);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <ParticlesJS />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/projets"
          className="flex items-center gap-2 p-3 text-purple-300 transition-all rounded-lg group bg-neutral-800/50 backdrop-blur-sm hover:bg-purple-500/20"
        >
          <ArrowLeftIcon />
          <span className="text-sm font-semibold">Retour aux projets</span>
        </Link>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative min-h-screen"
        >
          <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 py-28">
            <motion.div
              style={{ y: parallax }}
              className="group relative aspect-[2/1] rounded-3xl overflow-hidden border border-purple-500/20 bg-neutral-800"
            >
              <Image
                src={projet.image}
                alt={projet.titre}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            <div className="max-w-3xl mx-auto mt-12 space-y-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text animate-text-gradient"
              >
                {projet.titre}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl leading-relaxed text-neutral-300"
              >
                {projet.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {projet.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-sm font-medium transition-all rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:bg-purple-500/30 hover:shadow-glow"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10"
              >
                <Link
                  href={projet.lien}
                  target="_blank"
                  className="group inline-flex items-center gap-3 px-6 py-4 font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 hover:shadow-xl"
                >
                  <span>Voir le projet</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
