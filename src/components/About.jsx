"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import WavyText5 from "../components/waywe5";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        <WavyText5 />
      </motion.h1>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-col lg:flex-row gap-8 items-center"
      >
        <motion.div variants={fadeIn} className="lg:w-1/2">
          <Image
            src="/moi.jpg"
            alt="Lucas Corrieras"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl hover:-rotate-2 transition-transform duration-300 object-cover"
          />
        </motion.div>

        <motion.div variants={fadeIn} className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Parcours
          </h2>
          <p className="text-gray-300 text-l leading-relaxed hover:bg-white/10 p-4 rounded-xl transition-all">
            Passionné par les technologies depuis mon adolescence, j’ai suivi
            une formation en STI2D, où j’ai développé de solides compétences en
            modélisation 3D, électricité et gestion de l’énergie. C’est au cours
            de cette période que j’ai découvert le langage C++ à travers divers
            projets techniques. Cette immersion dans la programmation m’a
            véritablement passionné et m’a naturellement orienté vers le BUT
            MMI, afin de poursuivre dans le développement et enrichir mes
            compétences en programmation.
          </p>
          <p className="text-gray-300 text-l leading-relaxed hover:bg-white/10 p-4 rounded-xl transition-all">
            En BUT MMI, j’ai fortement élargi mes compétences, notamment en
            développement web avec HTML, CSS, JavaScript, PHP et MySQL. Cette
            formation m’a également permis d’explorer des domaines variés tels
            que le marketing digital, la communication, le design graphique, la
            vidéo, le montage, l’écriture de scénarios et l’UI/UX design. Grâce
            à ce parcours pluridisciplinaire, j’ai acquis une vision globale de
            la création numérique, tout en renforçant mes bases en
            programmation. J’ai notamment participé à la création d’une
            application de gestion de projets en équipe, en suivant une
            méthodologie Agile et Scrum.
          </p>
          <p className="text-gray-300 text-l leading-relaxed hover:bg-white/10 p-4 rounded-xl transition-all">
            En parallèle de mes études, je consacre beaucoup de temps au
            développement de projets personnels qui me permettent d’approfondir
            mes compétences techniques. J’ai notamment appris Tailwind CSS,
            Next.js et React afin de me spécialiser dans le développement
            front-end moderne. Ces technologies me permettent de concevoir des
            interfaces utilisateur à la fois performantes, accessibles et
            esthétiques.
          </p>
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-16"
      />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row-reverse gap-8 items-center"
      >
        <motion.div variants={fadeIn} className="lg:w-1/2">
          <Image
            src="/avion.JPG"
            alt="Compétences"
            width={600}
            height={300}
            className="rounded-2xl shadow-2xl hover:rotate-2 transition-transform duration-300 object-cover"
          />
        </motion.div>

        <motion.div variants={fadeIn} className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Compétences
          </h2>
          <div className="grid text-l grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "HTML5/CSS3 - Sites responsives modernes",
              "JavaScript - Applications complexes",
              "React/Next.js - Applications fullstack",
              "PHP - Développement back-end",
              "MySQL - Bases de données",
              "Figma - Prototypage professionnel",
              "Adobe Suite - Créations graphiques",
              "SolidWorks - Modélisation 3D précise",
              "WordPress (CMS) - Création et gestion de sites",
              "Docker - Conteneurisation et déploiement",
              "SSH/VPS - Gestion de serveurs à distance",
              "Git/GitHub - Gestion de version",
            ].map((skill, i) => (
              <div
                key={i}
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <p className="text-gray-300 before:content-['•'] before:text-purple-400 before:mr-2 group-hover:before:text-blue-400 transition-colors">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-16"
      />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-8 items-center"
      >
        <motion.div variants={fadeIn} className="lg:w-1/3">
          <Image
            src="/snato.jpg"
            alt="Diplômes"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl hover:-rotate-2 transition-transform duration-300 object-cover"
          />
        </motion.div>

        <motion.div variants={fadeIn} className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Diplômes
          </h2>
          <div className="space-y-4 text-xl">
            {[
              "Brevet des collèges - Mention Très Bien",
              "Baccalauréat STI2D - Mention Bien",
              "Permis de conduire B",
              "Certification Responsive Web Design",
              "Licence de port d'arme - Catégories B et C",
              "Juge Tumbling - Niveau 1 et 2",
            ].map((diploma, i) => (
              <div
                key={i}
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <p className="text-gray-300">• {diploma}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
