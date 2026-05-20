/**
 * SpecialityCards.jsx — Medical Speciality Categories
 * =====================================================
 * CO1: Reusable card components rendered declaratively via .map().
 *      Unidirectional data flow — speciality data flows down as props.
 *      Context API integration for filter action.
 * CO2: Async data fetching, spread operator (immutable copy),
 *      destructuring, arrow functions, template literals.
 */

import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { fetchSpecialities } from '../services/doctorService';

const SpecialityCards = () => {
  // CO2: local state with closure
  const [specialities, setSpecialities] = useState([]);
  const [loading, setLoading] = useState(true);

  // CO1: consuming context for filter action
  const { selectedSpeciality, handleSpecialityFilter } = useContext(AppContext);

  // CO2: async/await inside useEffect
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchSpecialities();
        setSpecialities(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // CO2: animation config using object shorthand
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ---------- Header ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
          Browse by{' '}
          <span className="bg-gradient-to-r from-[#0077B6] to-[#00C9A7] bg-clip-text text-transparent">
            Speciality
          </span>
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Choose a medical speciality to find the right doctor for your needs.
        </p>
      </motion.div>

      {/* ---------- Loading skeleton ---------- */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-36 rounded-2xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      )}

      {/* ---------- Cards Grid ---------- */}
      {!loading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {/* "All" filter card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0,119,182,0.15)' }}
            onClick={() => handleSpecialityFilter('All')}
            className={`glass-card p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${
              selectedSpeciality === 'All' ? 'ring-2 ring-[#0077B6] shadow-lg' : ''
            }`}
          >
            <span className="text-3xl">🏥</span>
            <span className="text-sm font-semibold text-gray-700">All</span>
          </motion.div>

          {/* CO1: declarative rendering with .map() */}
          {specialities.map(({ id, name, icon, color }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: `0 16px 40px ${color}25` }}
              onClick={() => handleSpecialityFilter(name)}
              className={`glass-card p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${
                selectedSpeciality === name ? 'ring-2 shadow-lg' : ''
              }`}
              style={selectedSpeciality === name ? { borderColor: color, boxShadow: `0 0 0 2px ${color}` } : {}}
            >
              <span className="text-3xl">{icon}</span>
              <span className="text-sm font-semibold text-gray-700">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default SpecialityCards;
