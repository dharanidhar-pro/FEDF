/**
 * AppContext.jsx — Global State using Context API
 * ==================================================
 * CO1: Unidirectional data flow — state lives here and flows DOWN via props / context.
 *      Immutable state updates using spread operator and functional setState.
 *      Component composition — Provider wraps the entire app.
 * CO2: ES6 modules, destructuring, closures (the reducer-like updaters form closures
 *      over the state), async/await for data loading.
 */

import { createContext, useState, useCallback, useEffect } from 'react';
import { fetchDoctors, searchDoctors, filterBySpeciality } from '../services/doctorService';

// Create context object (exported so consumers can useContext)
export const AppContext = createContext(null);

/**
 * AppProvider — wraps children with global state.
 * CO1: Component composition pattern — any child tree can consume this context.
 */
export const AppProvider = ({ children }) => {
  // ---------- State (always updated immutably) ----------
  const [doctors, setDoctors] = useState([]);           // full doctor list
  const [filteredDoctors, setFilteredDoctors] = useState([]); // search / filter result
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ---------- Load initial data ----------
  // CO2: async/await + try/catch inside useEffect via IIFE
  useEffect(() => {
    const loadDoctors = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchDoctors();
        // CO1: immutable update — replace state entirely with new array
        setDoctors(data);
        setFilteredDoctors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadDoctors();
  }, []);

  // ---------- Search handler (closure + pure function) ----------
  // CO2: useCallback + closure captures latest doctors state.
  const handleSearch = useCallback(
    (query) => {
      setSearchQuery(query);
      // CO2: pure function from service layer
      const results = searchDoctors(query, doctors);
      // Further filter by selected speciality
      const finalResults = filterBySpeciality(selectedSpeciality, results);
      setFilteredDoctors(finalResults);
    },
    [doctors, selectedSpeciality]
  );

  // ---------- Speciality filter handler ----------
  const handleSpecialityFilter = useCallback(
    (speciality) => {
      setSelectedSpeciality(speciality);
      const searched = searchDoctors(searchQuery, doctors);
      const results = filterBySpeciality(speciality, searched);
      setFilteredDoctors(results);
    },
    [doctors, searchQuery]
  );

  // ---------- Context value (spread into a new object each render) ----------
  // CO1: Unidirectional data flow — consumers read; only dispatchers mutate.
  const contextValue = {
    doctors,
    filteredDoctors,
    searchQuery,
    selectedSpeciality,
    isLoading,
    error,
    handleSearch,
    handleSpecialityFilter,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
