/**
 * Testimonials.jsx — Patient Reviews Carousel
 * ==============================================
 * CO1: Component composition — TestimonialCard is composed inside Testimonials.
 *      Declarative rendering with .map().
 *      Unidirectional data flow — data fetched in parent, rendered in children.
 * CO2: async/await, arrow functions, destructuring, spread operator,
 *      closure over activeIndex state.
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { fetchTestimonials } from '../services/doctorService';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // CO2: async data fetch
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // CO2: closure over testimonials.length
  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-advance every 5s
  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, testimonials.length]);

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto h-64 rounded-3xl bg-gray-100 animate-pulse" />
      </section>
    );
  }

  if (testimonials.length === 0) return null;

  const current = testimonials[activeIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 to-[#00C9A7]/5" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            What Our{' '}
            <span className="bg-gradient-to-r from-[#0077B6] to-[#00C9A7] bg-clip-text text-transparent">
              Patients Say
            </span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Real stories from real patients — hear why thousands trust MedBook.
          </p>
        </motion.div>

        {/* ---------- Testimonial Card ---------- */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 sm:p-12 text-center"
            >
              <FaQuoteLeft className="text-4xl text-[#0077B6]/20 mx-auto mb-6" />

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto italic">
                "{current.text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full border-2 border-blue-100 bg-blue-50"
                />
                <div className="text-left">
                  <p className="font-bold text-gray-800">{current.name}</p>
                  <p className="text-sm text-gray-500">{current.role}</p>
                  <div className="flex gap-0.5 mt-1">
                    {/* CO2: Array.from + .map for star rendering */}
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ---------- Navigation Arrows ---------- */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-500 hover:text-[#0077B6] cursor-pointer transition-colors"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-500 hover:text-[#0077B6] cursor-pointer transition-colors"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* ---------- Dots ---------- */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === activeIndex ? 'bg-[#0077B6] w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
