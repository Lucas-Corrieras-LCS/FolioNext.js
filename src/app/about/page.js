"use client";

import Image from "next/image";
import Link from "next/link";
import ParticlesJS from "../particuleback/particles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticlesJS />
      <Header />
      <div className="z-10">
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
