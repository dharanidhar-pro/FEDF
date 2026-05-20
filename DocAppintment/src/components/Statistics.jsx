/**
 * Statistics.jsx — Animated Counters Section
 * =============================================
 * CO1: Reusable StatCard sub-component (component composition).
 *      Declarative rendering — numbers animate into view.
 * CO2: Closures (counter logic), async data fetching, spread operator,
 *      useEffect + useState, template literals.
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fetchStatistics } from '../services/doctorService';

/**
 * AnimatedCounter — a small component that counts up to `target`.
 * CO2: closure over `count`; setInterval captured in cleanup.
 */
const AnimatedCounter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const step = Math.ceil(target / 60); // ~60 frames
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 25);

    // CO2: cleanup closure
    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent leading-tight">
      {/* CO2: template literal for formatted number */}
      {`${count.toLocaleString()}${suffix}`}
    </span>
  );
};

const Statistics = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchStatistics();
        setStats(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E0F2FE] via-white to-[#E0F7FA]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#0077B6] to-[#00C9A7] bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Our numbers speak for themselves — quality healthcare delivered at scale.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-40 rounded-2xl bg-white/60 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ id, label, value, suffix, icon }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-6 sm:p-8 text-center shadow-lg shadow-blue-50/50"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <AnimatedCounter target={value} suffix={suffix} />
                <p className="mt-3 text-sm font-medium text-gray-500">{label}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Statistics;
