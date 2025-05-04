"use client";

import Link from "next/link";
import Image from "next/image";
import ParticlesJS from "../particuleback/particles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Bli from "../../components/Bli";
import { motion } from "framer-motion";
import generateStaticParams from "./[id]/page";

export default function Projets() {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticlesJS />
      <Header />
      <div className="z-10">
        <Bli />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
