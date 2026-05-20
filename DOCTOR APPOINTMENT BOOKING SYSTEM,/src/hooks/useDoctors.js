/**
 * useDoctors.js — Custom Hook
 * ==============================
 * CO1: Encapsulates data-fetching logic — reusable across any component.
 *      Demonstrates custom hook pattern (composition over inheritance).
 * CO2: Closures (state is closed over inside the hook),
 *      async/await, try/catch, ES6 destructuring.
 *
 * This hook provides a self-contained way to fetch & manage doctor data
 * independently of the global context (useful for isolated widgets).
 */

import { useState, useEffect, useCallback } from 'react';
import { fetchDoctors, searchDoctors, filterBySpeciality } from '../services/doctorService';

const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // CO2: async IIFE inside useEffect
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchDoctors();
        setDoctors(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // CO2: closure — search captures `doctors` from enclosing scope
  const search = useCallback(
    (query) => {
      const results = searchDoctors(query, doctors);
      setFiltered(results);
    },
    [doctors]
  );

  // CO2: pure function composition
  const filterSpeciality = useCallback(
    (speciality) => {
      const results = filterBySpeciality(speciality, doctors);
      setFiltered(results);
    },
    [doctors]
  );

  // CO2: object shorthand export
  return { doctors, filtered, loading, error, search, filterSpeciality };
};

export default useDoctors;
