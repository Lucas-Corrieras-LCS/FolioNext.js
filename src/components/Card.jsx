"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <footer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative grid md:grid-cols-2 gap-8 p-8 max-w-6xl mx-5 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow duration-300"
      >
        <div className="absolute inset-0 rounded-3xl border border-purple-500/30 pointer-events-none" />

        <div className="relative overflow-hidden rounded-2xl group h-80 md:h-auto">
          <Image
            src="/link.jpg"
            alt="Photo de moi"
            fill
            className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            style={{ position: "absolute", top: 0, left: 0 }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <motion.h1
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            À Propos
          </motion.h1>

          <div className="space-y-4 text-neutral-300">
            <p className="leading-relaxed hover:bg-neutral-800/50 transition-colors duration-300 p-4 rounded-xl">
              <span className="text-purple-400 font-semibold">
                Lucas Corrieras
              </span>
              , étudiant en BUT
              <span className="text-blue-400">
                {" "}
                Métiers du Multimédia et de l’Internet (MMI)
              </span>
              . Passionné par le développement web full-stack avec une
              orientation front-end.
            </p>

            <div className="flex items-start space-x-4 p-4 hover:bg-neutral-800/50 rounded-xl transition-colors duration-300">
              <div className="text-purple-400 mt-1">✦</div>
              <p>
                Mon parcours pluridisciplinaire couvre le{" "}
                <span className="text-blue-400">marketing digital</span>, le{" "}
                <span className="text-purple-400">design graphique</span> et la{" "}
                <span className="text-blue-400">production audiovisuelle</span>,
                me permettant d'aborder les projets sous tous leurs angles.
              </p>
            </div>

            <div className="flex items-start space-x-4 p-4 hover:bg-neutral-800/50 rounded-xl transition-colors duration-300">
              <div className="text-blue-400 mt-1">➤</div>
              <p>
                Explorez mon portfolio pour découvrir mes réalisations et suivre
                mon évolution dans la création d'expériences digitales{" "}
                <span className="text-purple-400">innovantes</span> et{" "}
                <span className="text-blue-400">impactantes</span>.
              </p>
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <a
              href="/cv.pdf"
              download="Lucas_Corrieras_CV.pdf"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <span className="mr-2">📁</span>
              Télécharger CV
            </a>
            <button className="flex items-center px-6 py-3 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-500/10 transition-colors duration-300">
              <a
                href="mailto:lucascorrieras06@gmail.com"
                aria-label="Envoyer un mail"
              >
                <span className="mr-2">💬</span>
                Me contacter
              </a>
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
