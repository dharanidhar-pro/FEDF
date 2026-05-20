/**
 * HeroSection.jsx — Hero / Landing Banner
 * ==========================================
 * CO1: Declarative UI — the JSX describes the visual output.
 *      Component composition — HeroSection is composed inside HomePage.
 *      Unidirectional data flow — this component receives no props (self-contained).
 * CO2: Template literals, ES6 modules, arrow functions.
 */

import { motion } from 'framer-motion';
import { FaCalendarCheck, FaVideo } from 'react-icons/fa';

// CO2: arrow function component
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero pt-20"
    >
      {/* ---------- Decorative Blobs ---------- */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ---------- Left: Text Content ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0077B6] text-sm font-semibold mb-6"
            >
              🏥 #1 Doctor Booking Platform
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Book{' '}
              <span className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
                Trusted Doctors
              </span>
              <br />
              Anytime, Anywhere
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Connect with 500+ verified specialists, book instant appointments,
              and experience healthcare reimagined for the digital age.
            </p>

            {/* CO1: declarative CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,119,182,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full gradient-primary text-white font-semibold text-lg shadow-xl shadow-blue-200 flex items-center gap-2 cursor-pointer"
              >
                <FaCalendarCheck /> Book Appointment
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-[#0077B6] font-semibold text-lg shadow-lg border border-blue-100 flex items-center gap-2 cursor-pointer"
              >
                <FaVideo /> Video Consult
              </motion.button>
            </div>

            {/* ---------- Trust Indicators ---------- */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                    alt={`User ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-gray-100"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">10,000+ Patients</p>
                <p className="text-xs text-gray-500">Trust us for their healthcare</p>
              </div>
            </div>
          </motion.div>

          {/* ---------- Right: Illustration ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="hidden md:flex justify-center relative"
          >
            {/* Floating card accents */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute top-10 -left-4 glass-card p-4 flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">✅</div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Appointment Confirmed</p>
                <p className="text-xs text-gray-500">Dr. Priya Sharma · 10:30 AM</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute bottom-16 -right-4 glass-card p-4 flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">⭐</div>
              <div>
                <p className="text-sm font-semibold text-gray-800">4.9 Rating</p>
                <p className="text-xs text-gray-500">500+ Reviews</p>
              </div>
            </motion.div>

            {/* Main illustration area */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl gradient-primary flex items-center justify-center shadow-2xl shadow-blue-300/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10" />
              <div className="text-center text-white relative z-10">
                <div className="text-8xl mb-4">👨‍⚕️</div>
                <p className="text-lg font-semibold">Your Health, Our Priority</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
