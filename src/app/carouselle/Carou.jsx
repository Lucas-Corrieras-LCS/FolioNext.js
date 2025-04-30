"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import Image from "next/image";

const itemsData = [
  {
    title: "React",
    description:
      "Création d'interfaces dynamiques et réactives avec composants modulaires.",
    image: "/react.jpg",
  },
  {
    title: "Next.js",
    description:
      "Développement fullstack moderne avec rendu côté serveur et performances optimisées.",
    image: "/Next.jpg",
  },
  {
    title: "Tailwind CSS",
    description:
      "Stylisation rapide et responsive via des classes utilitaires efficaces.",
    image: "/tai.jpg",
  },
  {
    title: "HTML",
    description:
      "Structure propre et sémantique pour des pages web accessibles.",
    image: "/html.jpg",
  },
  {
    title: "CSS",
    description:
      "Animations, transitions et responsive design pour un rendu visuel soigné.",
    image: "/css.jpg",
  },
  {
    title: "PHP & MySQL",
    description:
      "Back-end simple et robuste avec gestion de bases de données relationnelles.",
    image: "/php.jpg",
  },
  {
    title: "C++",
    description:
      "Programmation, projets Arduino et logique algorithmique poussée.",
    image: "/C++.jpg",
  },
  {
    title: "WordPress",
    description:
      "Création de sites personnalisés via thèmes, plugins et gestion CMS.",
    image: "/word.jpg",
  },
];

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.5 },
  },
};

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
    transformOrigin: "top",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      when: "beforeChildren",
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.95,
    transformOrigin: "top",
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      when: "afterChildren",
    },
  }),
};

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollPosRef = useRef(0);
  const timeoutRef = useRef(null);

  const saveScrollPosition = () => {
    scrollPosRef.current = window.scrollY || document.documentElement.scrollTop;
  };

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosRef.current);
    });
  }, [activeIndex]);

  useEffect(() => {
    if (isAutoPlaying) {
      timeoutRef.current = setTimeout(() => {
        saveScrollPosition();
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % itemsData.length);
      }, 4000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex, isAutoPlaying]);

  const handleNext = () => {
    saveScrollPosition();
    setDirection(1);
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % itemsData.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrev = () => {
    saveScrollPosition();
    setDirection(-1);
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + itemsData.length) % itemsData.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div
      className="relative max-w-6xl mx-auto px-4 py-12 overflow-x-hidden"
      style={{
        minHeight: "600px",
        maxWidth: "90vw",
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/30"
          style={{
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

          <Image
            src={itemsData[activeIndex]?.image || "/fallback.jpg"}
            alt={itemsData[activeIndex]?.title || "Image non disponible"}
            fill
            className="object-cover"
            priority={activeIndex < 2}
            style={{ position: "absolute", top: 0, left: 0 }}
          />

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute bottom-8 left-8 right-8 text-white z-20"
          >
            <h3 className="text-3xl font-bold mb-4">
              {itemsData[activeIndex]?.title}
            </h3>
            <p className="text-lg max-w-xl mb-6 opacity-90">
              {itemsData[activeIndex]?.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 rounded-lg font-semibold flex items-center gap-2 w-fit"
            >
              En savoir plus
              <IoArrowForwardOutline className="mt-1" />
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <style jsx global>{`
        html {
          overflow-x: hidden;
        }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-between px-4 z-40">
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          className="p-3 bg-black/50 rounded-full backdrop-blur-sm"
          aria-label="Slide précédente"
        >
          <IoArrowBackOutline className="text-3xl text-white" />
        </motion.button>
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          className="p-3 bg-black/50 rounded-full backdrop-blur-sm"
          aria-label="Slide suivante"
        >
          <IoArrowForwardOutline className="text-3xl text-white" />
        </motion.button>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2 z-40">
        {itemsData.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 rounded-full ${
              index === activeIndex ? "bg-purple-500" : "bg-white/30"
            }`}
            animate={{
              width: index === activeIndex ? 32 : 8,
              transition: { duration: 0.3 },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
