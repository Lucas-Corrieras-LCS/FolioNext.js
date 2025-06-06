"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projets = [
  {
    src: "/VPS.jpg",
    alt: "Image de mon vps",
    label: "Mon VPS",
    href: "/projets/mon-vps",
  },
  {
    src: "/ferrarie.jpg",
    alt: "Image de mon site Ferrari",
    label: "Mon Site Ferrari",
    href: "/projets/site-ferrari",
  },
  {
    src: "/site-eco.png",
    alt: "Image de mon site Eco",
    label: "Site optimisé",
    href: "/projets/site-eco",
  },
];

export default function DerniersProjets() {
  return (
    <section className="flex flex-col items-center justify-center pt-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.18 } },
        }}
        className="flex footer-bg flex-wrap justify-center items-center w-full md:w-auto gap-8 py-8 px-4 md:px-8 bg-neutral-900 rounded-2xl shadow-2xl shadow-purple-500/20"
      >
        {projets.map((proj, i) => (
          <motion.div
            key={proj.label}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="flex flex-col items-center group"
          >
            <a href={proj.href} tabIndex={0}>
              <motion.div
                whileHover={{ scale: 1.07, rotate: -2 }}
                whileTap={{ scale: 0.97, rotate: 1 }}
                className="relative"
              >
                <Image
                  src={proj.src}
                  alt={proj.alt}
                  width={320}
                  height={210}
                  className="w-80 h-52 object-cover rounded-xl shadow-lg shadow-purple-500/30 group-hover:shadow-pink-500/40 transition-all duration-300"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 pointer-events-none"
                />
              </motion.div>
            </a>
            <p className="mt-4 text-center font-semibold text-neutral-200 group-hover:text-pink-400 transition-colors duration-300">
              {proj.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <a href="/projets">
          <button className="footer-bg group w-14 hover:w-64 h-14 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-lg text-neutral-50 font-bold flex flex-row text-center justify-start items-center px-2 pr-6 shadow-lg shadow-purple-500/30 transition-all duration-700 overflow-hidden">
            <svg
              className="w-8 h-8 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" />
            </svg>
            <span className="origin-left inline-flex opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-500 group-hover:delay-200 px-2 whitespace-nowrap">
              Voir tous mes projets
            </span>
          </button>
        </a>
      </motion.div>
    </section>
  );
}
