import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Stethoscope, LogOut, User, Menu, X, LayoutDashboard } from "lucide-react";
import NotificationBell from "./NotificationBell";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ patient: null, doctor: null });

  const loadUser = () => {
    const patientStr = localStorage.getItem("medbook_current_patient");
    const doctorStr = localStorage.getItem("medbook_current_doctor");
    setCurrentUser({
      patient: patientStr ? JSON.parse(patientStr) : null,
      doctor: doctorStr ? JSON.parse(doctorStr) : null
    });
  };

  useEffect(() => {
    loadUser();

    // Listen to custom logins/logouts
    const handleAuthChange = () => {
      loadUser();
    };

    window.addEventListener("medbook_auth_changed", handleAuthChange);
    // Also update on location change to keep robust
    loadUser();

    return () => {
      window.removeEventListener("medbook_auth_changed", handleAuthChange);
    };
  }, [location.pathname]);

  const handleLogout = (role) => {
    if (role === "patient") {
      localStorage.removeItem("medbook_current_patient");
    } else if (role === "doctor") {
      localStorage.removeItem("medbook_current_doctor");
    }
    // Dispatch event
    window.dispatchEvent(new Event("medbook_auth_changed"));
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const handleSmoothScroll = (elementId) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: elementId } });
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40" id="main-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group cursor-pointer" id="navbar-logo">
              <div className="p-2 bg-gradient-to-tr from-indigo-500 to-blue-600 rounded-xl text-white shadow-lg shadow-indigo-150 group-hover:scale-105 transition-all">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                Med<span className="text-indigo-600 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text">Book</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors cursor-pointer">
              Home
            </Link>
            <button
              onClick={() => handleSmoothScroll("about-section")}
              className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors cursor-pointer bg-transparent border-none"
            >
              About
            </button>
            <button
              onClick={() => handleSmoothScroll("faq-section")}
              className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors cursor-pointer bg-transparent border-none"
            >
              FAQ
            </button>
            <button
              onClick={() => handleSmoothScroll("contact-section")}
              className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors cursor-pointer bg-transparent border-none"
            >
              Contact
            </button>

            {/* Separator line */}
            <span className="h-4 w-px bg-gray-200"></span>

            {/* Dynamic Sessions */}
            {currentUser.patient ? (
              <div className="flex items-center gap-4">
                <NotificationBell />
                <Link
                  to="/patient-dashboard"
                  className="flex items-center gap-1.5 text-gray-700 hover:text-indigo-600 text-sm font-medium transition-colors px-2.5 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center gap-1.5 text-gray-700 hover:text-indigo-600 text-sm font-medium transition-colors px-2.5 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer"
                  title="Patient Profile"
                >
                  <User className="w-4 h-4" />
                  Profile
                </Link>
                <button
                  onClick={() => handleLogout("patient")}
                  className="flex items-center gap-1 text-rose-600 hover:text-rose-700 hover:bg-rose-50 text-sm font-semibold transition-colors px-3.5 py-1.5 rounded-lg cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : currentUser.doctor ? (
              <div className="flex items-center gap-4">
                <NotificationBell />
                <Link
                  to="/doctor-dashboard"
                  className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 text-sm font-bold transition-colors px-3 py-1.5 rounded-lg bg-indigo-50/80 cursor-pointer"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Doctor Panel
                </Link>
                <button
                  onClick={() => handleLogout("doctor")}
                  className="flex items-center gap-1 text-rose-600 hover:text-rose-700 hover:bg-rose-50 text-sm font-semibold transition-colors px-3.5 py-1.5 rounded-lg cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/patient-login"
                  className="text-gray-700 hover:text-indigo-600 text-sm font-semibold px-4 py-2 hover:bg-slate-50 rounded-lg transition-all cursor-pointer"
                >
                  Patient Portal
                </Link>
                <Link
                  to="/doctor-login"
                  className="text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-100 text-sm font-semibold px-4.5 py-2 rounded-lg transition-all cursor-pointer"
                >
                  Doctor Login
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center md:hidden gap-2">
            <NotificationBell />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-500 hover:text-indigo-600 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md py-4 px-4 shadow-xl space-y-3">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-indigo-600 hover:bg-slate-50 font-medium py-2 px-3 rounded-lg transition-colors"
          >
            Home
          </Link>
          <button
            onClick={() => handleSmoothScroll("about-section")}
            className="block w-full text-left text-gray-700 hover:text-indigo-600 hover:bg-slate-50 font-medium py-2 px-3 rounded-lg transition-colors border-none bg-transparent"
          >
            About
          </button>
          <button
            onClick={() => handleSmoothScroll("faq-section")}
            className="block w-full text-left text-gray-700 hover:text-indigo-600 hover:bg-slate-50 font-medium py-2 px-3 rounded-lg transition-colors border-none bg-transparent"
          >
            FAQ
          </button>
          <button
            onClick={() => handleSmoothScroll("contact-section")}
            className="block w-full text-left text-gray-700 hover:text-indigo-600 hover:bg-slate-50 font-medium py-2 px-3 rounded-lg transition-colors border-none bg-transparent"
          >
            Contact
          </button>

          <div className="h-px bg-gray-150 my-2"></div>

          {currentUser.patient ? (
            <div className="space-y-2">
              <div className="px-3 py-1 font-bold text-xs text-indigo-500 uppercase tracking-wider">
                👤 Patient: {currentUser.patient.name}
              </div>
              <Link
                to="/patient-dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-indigo-600 hover:bg-slate-50 font-medium py-2 px-3 rounded-lg transition-colors"
              >
                Patient Dashboard
              </Link>
              <Link
                to="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-indigo-600 hover:bg-slate-50 font-medium py-2 px-3 rounded-lg transition-colors"
              >
                My Account Profile
              </Link>
              <button
                onClick={() => handleLogout("patient")}
                className="block w-full text-left text-rose-600 hover:text-rose-700 hover:bg-rose-50 font-bold py-2 px-3 rounded-lg transition-colors border-none bg-transparent"
              >
                Logout
              </button>
            </div>
          ) : currentUser.doctor ? (
            <div className="space-y-2">
              <div className="px-3 py-1 font-bold text-xs text-indigo-500 uppercase tracking-wider">
                🩺 Doctor: {currentUser.doctor.name}
              </div>
              <Link
                to="/doctor-dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-indigo-600 hover:bg-slate-50 font-medium py-2 px-3 rounded-lg transition-colors font-semibold text-indigo-600"
              >
                Doctor Control Panel
              </Link>
              <button
                onClick={() => handleLogout("doctor")}
                className="block w-full text-left text-rose-600 hover:text-rose-700 hover:bg-rose-50 font-bold py-2 px-3 rounded-lg transition-colors border-none bg-transparent"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-2 pt-2">
              <Link
                to="/patient-login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center text-gray-700 bg-slate-50 hover:bg-slate-100 font-semibold py-2.5 px-3 rounded-lg transition-colors"
              >
                Patient Portal Login
              </Link>
              <Link
                to="/doctor-login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center text-white bg-indigo-600 hover:bg-indigo-700 font-semibold py-2.5 px-3 rounded-lg transition-colors shadow-sm"
              >
                Doctor Portal Login
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
