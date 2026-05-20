/**
 * HomePage.jsx — Main Landing Page (Page-level Component)
 * =========================================================
 * CO1: Component composition — the page is COMPOSED of smaller, reusable components.
 *      Each section is its own module (component-driven architecture).
 *      Declarative UI — the JSX tree describes the entire page layout.
 *      Unidirectional data flow — all shared state comes from AppContext above.
 * CO2: ES6 module imports, arrow function component.
 */

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SpecialityCards from '../components/SpecialityCards';
import SearchDoctors from '../components/SearchDoctors';
import Statistics from '../components/Statistics';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

// CO1: pure composition — each child is independent and reusable
const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* CO1: Navbar is a self-contained component with its own state */}
      <Navbar />

      {/* CO1: Each section below is a reusable component.
          Data flows DOWN from AppContext → through each component.
          No component directly mutates another's state (unidirectional). */}
      <HeroSection />
      <SpecialityCards />
      <SearchDoctors />
      <Statistics />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
