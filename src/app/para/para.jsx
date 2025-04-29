"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import styles from "../para/para.css";

const Parallax = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll("[data-parallax-layers]").forEach((trigger) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: "0% 0%",
          end: "100% 0%",
          scrub: true,
        },
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 },
      ];

      layers.forEach((obj, idx) => {
        tl.to(
          trigger.querySelector(`[data-parallax-layer="${obj.layer}"]`),
          {
            yPercent: obj.yPercent,
            ease: "none",
          },
          idx === 0 ? undefined : "<"
        );
      });
    });

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <div className="parallax">
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow" />
          <div data-parallax-layers className="parallax__layers">
            <Image
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp"
              loading="eager"
              alt="Montagne"
              width={800}
              height={800}
              className="parallax__layer-img"
            />
            <Image
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp"
              loading="eager"
              alt="Montagne"
              width={800}
              height={800}
              className="parallax__layer-img"
            />
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title">LCS</h2>
            </div>
            <Image
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp"
              loading="eager"
              alt="Montagne"
              width={800}
              height={800}
              className="parallax__layer-img"
            />
          </div>
          <div className="parallax__fade" />
        </div>
      </section>
    </div>
  );
};

export default Parallax;
