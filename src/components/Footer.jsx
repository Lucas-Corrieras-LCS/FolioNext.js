"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelopeOpenText,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-bg w-full flex flex-col items-center justify-center py-14 px-4 mt-24 rounded-t-3xl shadow-2xl shadow-purple-900/20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 items-center">
        <div className="flex flex-col items-center md:items-start">
          <div className="footer-section-title">Contact</div>
          <a
            href="mailto:lucascorrieras06@gmail.com"
            aria-label="Envoyer un mail"
            className="group relative flex items-center gap-3 mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
          >
            <FaEnvelopeOpenText className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold text-base text-white tracking-wide">
              lucascorrieras06@gmail.com
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <div className="footer-section-title">Retrouvez-moi</div>
          <div className="flex gap-6 mt-1">
            <a
              href="https://github.com/Lucas-Corrieras-LCS"
              target="_blank"
              rel="noopener noreferrer"
              className="network-link"
              aria-label="GitHub"
              style={{ color: "#a855f7" }}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-corrieras-033320339/"
              target="_blank"
              rel="noopener noreferrer"
              className="network-link"
              aria-label="LinkedIn"
              style={{ color: "#6366f1" }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/lucas.pkfr/"
              target="_blank"
              rel="noopener noreferrer"
              className="network-link"
              aria-label="Instagram"
              style={{ color: "#e1306c" }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <div className="footer-section-title">Portfolio</div>
          <div className="text-neutral-400 text-base">
            Étudiant passionné par le développement web, la création interactive
            et les technologies innovantes.
            <br />
          </div>
        </div>
      </div>
      <div className="footer-baseline mt-10">
        © {new Date().getFullYear()} Lucas Corrieras.
      </div>
    </footer>
  );
}
