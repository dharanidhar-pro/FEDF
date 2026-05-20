/**
 * Features.jsx — Platform Features Section
 * ===========================================
 * CO1: Reusable FeatureCard composed inside Features.
 *      Declarative .map() rendering.
 *      Props-driven data flow (unidirectional).
 * CO2: async/await data fetching, arrow functions, destructuring,
 *      spread operator for immutable state updates.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchFeatures } from '../services/doctorService';

const Features = () => {
  const [featuresList, setFeaturesList] = useState([]);
  const [loading, setLoading] = useState(true);

  // CO2: async IIFE
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFeatures();
        setFeaturesList(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // CO2: animation variants using object shorthand
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
          Why Choose{' '}
          <span className="bg-gradient-to-r from-[#0077B6] to-[#00C9A7] bg-clip-text text-transparent">
            MedBook
          </span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Everything you need for a seamless healthcare experience — all in one platform.
        </p>
      </motion.div>

      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-52 rounded-2xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* CO1: declarative list rendering */}
          {featuresList.map(({ id, title, description, icon }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 50px rgba(0,119,182,0.12)',
              }}
              className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-8 text-center group cursor-pointer shadow-lg shadow-blue-50/50"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl gradient-primary flex items-center justify-center text-3xl text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Features;
