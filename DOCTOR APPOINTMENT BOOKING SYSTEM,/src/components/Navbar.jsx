/**
 * Navbar.jsx — Sticky Navigation Bar
 * =====================================
 * CO1: Reusable, self-contained component (component-driven architecture).
 *      Declarative UI — describes WHAT to render, not HOW.
 *      Virtual DOM-friendly — React reconciles efficiently.
 * CO2: ES6 destructuring, arrow functions, template literals,
 *      useState for local toggle (closure over isOpen).
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaHeartbeat } from 'react-icons/fa';

// CO2: arrow function component + array destructuring for navigation items
const navLinks = ['Home', 'Doctors', 'Services', 'About', 'Contact'];

const Navbar = () => {
  // CO2: closure — isOpen is captured in the toggle callback
  const [isOpen, setIsOpen] = useState(false);

  // CO2: arrow function, closure over setIsOpen
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 glass"
      style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ---------- Logo ---------- */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white">
              <FaHeartbeat size={22} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
              MedBook
            </span>
          </motion.div>

          {/* ---------- Desktop Links ---------- */}
          <div className="hidden md:flex items-center gap-8">
            {/* CO2: .map with arrow function + destructuring index */}
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-gray-600 hover:text-[#0077B6] transition-colors relative group"
              >
                {link}
                {/* CO1: declarative animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0077B6] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* ---------- CTA Button ---------- */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-2.5 rounded-full gradient-primary text-white text-sm font-semibold shadow-lg shadow-blue-200 cursor-pointer min-w-[100px]"
            >
              Login
            </motion.button>
          </div>

          {/* ---------- Mobile Toggle ---------- */}
          <button onClick={toggleMenu} className="md:hidden text-gray-600 cursor-pointer">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* ---------- Mobile Menu (AnimatePresence for mount/unmount) ---------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 hover:text-[#0077B6] font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
              <button className="w-full mt-2 py-2.5 rounded-full gradient-primary text-white font-semibold cursor-pointer">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
