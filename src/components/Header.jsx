"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiFolder, FiUser } from "react-icons/fi";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Accueil", icon: <FiHome />, href: "/" },
    { label: "Projets", icon: <FiFolder />, href: "/projets" },
    { label: "À Propos de moi", icon: <FiUser />, href: "/about" },
  ];

  const listVariants = {
    open: { transition: { staggerChildren: 0.13, delayChildren: 0.18 } },
    closed: { transition: { staggerChildren: 0, staggerDirection: 1 } },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { x: { type: "spring", stiffness: 400, damping: 30 } },
    },
    closed: { opacity: 0, x: -20, transition: { duration: 0.13 } },
  };

  const sidebarVariants = {
    closed: { x: "-100%" },
    open: { x: 0, transition: { type: "spring", stiffness: 200, damping: 25 } },
  };

  return (
    <>
      <motion.button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-6 left-6 z-50 p-3 text-white rounded-full bg-black/60 backdrop-blur-md shadow-lg hover:bg-black/80 transition-colors duration-300"
        aria-label={sidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {sidebarOpen ? (
          <FiX className="w-7 h-7" />
        ) : (
          <FiMenu className="w-7 h-7" />
        )}
      </motion.button>

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            <motion.aside
              ref={sidebarRef}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 left-0 z-50 w-72 h-screen bg-gradient-to-b from-neutral-900 via-neutral-950 to-black shadow-2xl border-r border-purple-900/30"
            >
              <div className="flex flex-col h-full p-8">
                <div className="mb-12 mt-8 flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-purple-400 tracking-tight">
                    LCS
                  </span>
                  <span className="text-lg font-semibold text-white">
                    Portfolio
                  </span>
                </div>
                <motion.ul
                  variants={listVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="space-y-6"
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item.label}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.06,
                        backgroundColor: "rgba(168,85,247,0.08)",
                      }}
                      className="rounded-xl transition-all duration-300"
                    >
                      <a
                        href={item.href}
                        className="flex items-center gap-4 p-4 text-lg font-medium text-gray-200 rounded-xl hover:bg-purple-800/20 hover:text-purple-300 transition-all duration-300"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-auto pt-10 border-t border-gray-800">
                  <p className="text-gray-500 text-center text-sm mt-6">
                    © {new Date().getFullYear()} Lucas Corrieras
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
