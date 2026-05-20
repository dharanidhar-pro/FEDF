/**
 * doctorService.js — Service Layer (API Simulation)
 * =====================================================
 * CO2: async/await, Promises, try/catch error handling,
 *      closures, pure functions, ES6 modules.
 * CO1: Separation of concerns — data fetching is decoupled from UI.
 *
 * This module simulates a REST API using Promises with artificial delay.
 * In production, these functions would call a real backend via Axios.
 */

import { doctors, specialities, testimonials, statistics, features } from '../data/doctorsData';

// ---------- Helper: simulate network delay (closure over ms) ----------
const delay = (ms = 800) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetch all doctors.
 * CO2: async/await + try/catch error handling.
 * @returns {Promise<Array>} — a new array (immutable — original is never exposed).
 */
export const fetchDoctors = async () => {
  try {
    await delay(600);
    // CO2: spread operator creates a shallow copy → immutability
    return [...doctors];
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw new Error('Failed to fetch doctors. Please try again later.');
  }
};

/**
 * Search doctors by name or speciality.
 * CO2: pure function — same input always yields same output, no side effects.
 *      Uses arrow functions, destructuring, template literals.
 * @param {string} query — the search term.
 * @param {Array}  doctorsList — source list (never mutated).
 * @returns {Array} — filtered copy.
 */
export const searchDoctors = (query, doctorsList) => {
  // CO2: arrow function + destructuring in the filter callback
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [...doctorsList];

  return doctorsList.filter(({ name, speciality, location }) =>
    name.toLowerCase().includes(normalised) ||
    speciality.toLowerCase().includes(normalised) ||
    location.toLowerCase().includes(normalised)
  );
};

/**
 * Filter doctors by speciality.
 * CO2: pure function.
 */
export const filterBySpeciality = (speciality, doctorsList) => {
  if (!speciality || speciality === 'All') return [...doctorsList];
  return doctorsList.filter((doc) => doc.speciality === speciality);
};

/**
 * Fetch specialities list.
 */
export const fetchSpecialities = async () => {
  try {
    await delay(400);
    return [...specialities];
  } catch (error) {
    console.error('Error fetching specialities:', error);
    throw new Error('Failed to load specialities.');
  }
};

/**
 * Fetch testimonials.
 */
export const fetchTestimonials = async () => {
  try {
    await delay(500);
    return [...testimonials];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw new Error('Failed to load testimonials.');
  }
};

/**
 * Fetch site statistics.
 */
export const fetchStatistics = async () => {
  try {
    await delay(300);
    return [...statistics];
  } catch (error) {
    console.error('Error fetching statistics:', error);
    throw new Error('Failed to load statistics.');
  }
};

/**
 * Fetch features.
 */
export const fetchFeatures = async () => {
  try {
    await delay(350);
    return [...features];
  } catch (error) {
    console.error('Error fetching features:', error);
    throw new Error('Failed to load features.');
  }
};
