/**
 * SearchDoctors.jsx — Smart Live Search Section
 * ================================================
 * CO1: Consumes shared state via Context API (unidirectional data flow).
 *      Declarative rendering — filtered list re-renders automatically.
 *      Uses React.memo on DoctorCard for rendering optimisation.
 * CO2: Closures (event handler closes over context values),
 *      destructuring (context + props), arrow functions, template literals.
 */

import React, { useContext, memo } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

/**
 * DoctorCard — a memoised child component.
 * CO1: React.memo prevents re-render when props haven't changed (optimisation).
 *      Component composition — used inside SearchDoctors.
 * CO2: destructuring props directly in the parameter list.
 */
const DoctorCard = memo(({ doctor }) => {
  const { name, speciality, experience, rating, location, available, image, fee } = doctor;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,119,182,0.12)' }}
      className="bg-white/75 backdrop-blur-xl border border-white/40 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg shadow-blue-50/50"
    >
      <div className="relative mb-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-100"
        />
        {/* CO2: template literal for dynamic class */}
        <span
          className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
            available ? 'bg-green-400' : 'bg-gray-300'
          }`}
        />
      </div>

      <h3 className="font-bold text-gray-800 text-base">{name}</h3>
      <p className="text-sm text-[#0077B6] font-medium mt-0.5">{speciality}</p>

      <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-400" /> {rating}
        </span>
        <span className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-gray-400" /> {location}
        </span>
      </div>

      <p className="text-xs text-gray-400 mt-1">{experience} yrs experience</p>

      <div className="mt-auto pt-4 flex items-center justify-between w-full border-t border-gray-100">
        {/* CO2: template literal for fee display */}
        <span className="text-sm font-bold text-gray-700">{`₹${fee}`}</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!available}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer ${
            available
              ? 'gradient-primary text-white shadow-md shadow-blue-100'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {available ? 'Book Now' : 'Unavailable'}
        </motion.button>
      </div>
    </motion.div>
  );
});

DoctorCard.displayName = 'DoctorCard';

/**
 * SearchDoctors — search bar + doctor grid.
 */
const SearchDoctors = () => {
  // CO1: unidirectional data flow — consuming context
  const { filteredDoctors, searchQuery, handleSearch, isLoading, error } = useContext(AppContext);

  return (
    <section id="doctors" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ---------- Section Header ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
          Find Your{' '}
          <span className="bg-gradient-to-r from-[#0077B6] to-[#00C9A7] bg-clip-text text-transparent">
            Perfect Doctor
          </span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Search by name, specialisation, or location — results update instantly.
        </p>
      </motion.div>

      {/* ---------- Search Bar ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-12"
      >
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            value={searchQuery}
            // CO2: arrow function event handler (closure over handleSearch)
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search doctors by name, speciality, or city..."
            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border border-gray-200 shadow-lg shadow-blue-50 focus:outline-none focus:ring-2 focus:ring-[#0077B6]/30 focus:border-[#0077B6] text-gray-700 transition-all"
          />
        </div>
      </motion.div>

      {/* ---------- Loading State ---------- */}
      {isLoading && (
        <div className="flex justify-center py-12">
          <div className="w-10 h-10 border-4 border-blue-200 border-t-[#0077B6] rounded-full animate-spin" />
        </div>
      )}

      {/* ---------- Error Fallback UI ---------- */}
      {error && (
        <div className="text-center py-12">
          <p className="text-red-500 font-medium">⚠️ {error}</p>
          <p className="text-gray-400 text-sm mt-1">Please try refreshing the page.</p>
        </div>
      )}

      {/* ---------- Doctor Grid ---------- */}
      {!isLoading && !error && (
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No doctors found for "{searchQuery}"</p>
            </div>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default SearchDoctors;
