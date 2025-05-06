"use client";

import Image from "next/image";
import Link from "next/link";
import ParticlesJS from "../particuleback/particles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useSpring, useScroll } from "motion/react";
import About from "../../components/About";

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          transformOrigin: "0%",
          background:
            "linear-gradient(90deg, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.3) 50%, rgba(168,85,247,0.1) 100%)",
          zIndex: 1000,
        }}
        className="backdrop-blur-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </motion.div>
      <Content />
    </>
  );
}

function Content() {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticlesJS />
      <Header />
      <div className="z-10">
        <div>
          <About />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
