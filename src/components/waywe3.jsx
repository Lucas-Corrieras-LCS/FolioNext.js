"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function WavyText3() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      const { chars } = splitText(containerRef.current.querySelector(".wavy"));
      containerRef.current.style.visibility = "visible";

      const staggerDelay = 0.15;

      animate(
        chars,
        { y: [-20, 20] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(staggerDelay, {
            startDelay: -staggerDelay * chars.length,
          }),
        }
      );
    });
  }, []);

  return (
    <div
      className="container flex justify-center items-center w-full text-center px-4"
      ref={containerRef}
    >
      <h1 className="h1 text-[2.75rem] md:text-6xl">
        Mes Derniers <span className="wavy  text-purple-500 py-3">Projets</span>
      </h1>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        visibility: hidden;
      }

      .split-char {
        will-change: transform, opacity;
        display: inline-block;
        color: #a855f7;
      }
    `}</style>
  );
}
