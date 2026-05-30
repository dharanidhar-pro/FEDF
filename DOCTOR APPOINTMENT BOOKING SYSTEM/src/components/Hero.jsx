import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, Calendar, Award, ShieldCheck, ArrowRight, UserPlus, Search } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  const handleFindDoctors = () => {
    const patient = localStorage.getItem("medbook_current_patient");
    if (patient) {
      navigate("/patient-dashboard", { state: { activeTab: "find" } });
    } else {
      navigate("/patient-login");
    }
  };

  const handleRegister = () => {
    navigate("/patient-register");
  };

  return (
    <header className="relative bg-gradient-to-b from-indigo-50/70 via-indigo-50/20 to-white overflow-hidden py-16 md:py-24" id="hero-section">
      {/* Decorative ambient background blur vectors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content Title & Text */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-semibold uppercase tracking-wider">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              Modern Healthcare Platform
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Book Your Doctor <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Appointment Easily</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Find doctors, select available slots, and manage appointments online. Your health is our highest priority with frictionless care workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={handleFindDoctors}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200/85 transition-all hover:-translate-y-0.5 active:translate-y-0 text-base cursor-pointer group"
                id="hero-find-doctors-btn"
              >
                <Search className="w-5 h-5" />
                Find Doctors
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleRegister}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/20 text-gray-700 hover:text-indigo-600 font-semibold rounded-xl shadow-sm transition-all text-base cursor-pointer"
                id="hero-register-btn"
              >
                <UserPlus className="w-5 h-5 text-gray-500 group-hover:text-indigo-500" />
                Register Now
              </button>
            </div>
          </div>

          {/* Visual Presentation Element */}
          <div className="relative flex justify-center">
            {/* Visual Abstract Doctor Grid Mockup */}
            <div className="relative bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-gray-100 shadow-xl max-w-md w-full">
              <div className="absolute -top-4 -right-4 p-3 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-2xl text-white shadow-lg shadow-emerald-200 text-xs font-bold flex items-center gap-1.5 z-10">
                <ShieldCheck className="w-4 h-4" /> Approved Doctors Only
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-50 shadow-sm">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-lg">
                    ST
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-gray-900">Dr. Sarah Taylor</h3>
                    <p className="text-xs text-gray-500">Cardiology • New York</p>
                  </div>
                  <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold">
                    ★ 4.9
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-50 shadow-sm opacity-90">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-lg">
                    JS
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-gray-900">Dr. John Smith</h3>
                    <p className="text-xs text-gray-500">Dermatology • Boston</p>
                  </div>
                  <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold">
                    ★ 4.7
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-50 shadow-sm opacity-70">
                  <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center font-bold text-lg">
                    EV
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-gray-900">Dr. Elizabeth Vance</h3>
                    <p className="text-xs text-gray-500">Neurology • Chicago</p>
                  </div>
                  <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold">
                    ★ 4.8
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Home Statistics Sections */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6" id="stats-section">
          {[
            { value: "50+", label: "Doctors", icon: Users, color: "text-indigo-600 bg-indigo-50" },
            { value: "500+", label: "Patients", icon: Award, color: "text-emerald-600 bg-emerald-50" },
            { value: "1000+", label: "Appointments", icon: Calendar, color: "text-blue-600 bg-blue-50" },
            { value: "24/7", label: "Support", icon: ShieldCheck, color: "text-rose-600 bg-rose-50" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center group"
            >
              <div className={`p-3 rounded-xl mb-3 ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </header>
  );
}
