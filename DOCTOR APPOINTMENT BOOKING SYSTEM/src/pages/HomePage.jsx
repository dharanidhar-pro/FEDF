import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ClipboardList, LogIn, Search, CalendarCheck, ShieldCheck, HeartPulse, Sparkles, Stethoscope, ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Specialties from "../components/Specialties";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Handle smooth scrolls when coming from other pages to designated sections
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Clear state
        window.history.replaceState({}, document.title);
      }
    }
  }, [location.state]);

  const steps = [
    { step: "Step 1", title: "Register", desc: "Create your secure Patient profile with contact info, blood group, and birthday.", icon: ClipboardList, color: "bg-indigo-100/80 text-indigo-700" },
    { step: "Step 2", title: "Login", desc: "Access the dashboard securely utilizing your registered email credentials.", icon: LogIn, color: "bg-teal-100/80 text-teal-750" },
    { step: "Step 3", title: "Search Doctor", desc: "Filter through verified clinical professionals by specialization or search keywords.", icon: Search, color: "bg-amber-100/80 text-amber-700" },
    { step: "Step 4", title: "Book Appointment", desc: "Confirm selectable dates and real-time clinical slots to generate a digital slip.", icon: CalendarCheck, color: "bg-blue-100/80 text-blue-700" },
    { step: "Step 5", title: "Doctor Approval", desc: "Experience live system notifications upon consultant confirmation or adjustments.", icon: ShieldCheck, color: "bg-emerald-100/80 text-emerald-700" },
    { step: "Step 6", title: "Visit Clinic", desc: "Bring your downloaded receipt slip and visit the doctor for your custom exam.", icon: HeartPulse, color: "bg-rose-100/80 text-rose-700" },
  ];

  return (
    <div className="animate-fade-in" id="medbook-homepage">
      {/* 1. Hero Layout Header */}
      <Hero />

      {/* 2. Services Section */}
      <Services />

      {/* 3. Medical Specialties */}
      <Specialties />

      {/* 4. How It Works Section */}
      <section className="py-16 md:py-24 bg-white" id="how-it-works-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Procedural Workflow</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Six Easy Steps to Secure Care
            </p>
            <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mx-auto"></div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our clinical portal automates bookings, approval logs, and patient records securely via optimized processes.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-slate-50 to-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group overflow-hidden"
              >
                {/* Micro Step indicator banner background */}
                <span className="absolute top-0 right-0 py-1.5 px-4 bg-slate-100 font-extrabold text-[10px] uppercase text-slate-400 rounded-bl-xl tracking-wider">
                  {item.step}
                </span>

                <div className="space-y-4">
                  <div className={`p-3.5 rounded-xl inline-block ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. About MedBook Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-gray-100" id="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Context presentation image placeholder card with stats overlays */}
            <div className="relative flex justify-center">
              <div className="relative bg-gradient-to-tr from-indigo-600 to-blue-700 p-8 text-white rounded-3xl shadow-xl max-w-md w-full space-y-6">
                <div className="absolute top-6 right-6 opacity-10">
                  <HeartPulse className="w-48 h-48 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="p-2 bg-white/20 inline-block rounded-xl">
                    <Sparkles className="w-5 h-5 text-amber-300" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight pt-1">B.Tech Engineering Capstone</h3>
                  <p className="text-xs text-white/80">Developed for academic presentation & evaluation.</p>
                </div>
                <div className="space-y-3 font-semibold text-xs border-t border-white/20 pt-4">
                  <div className="flex justify-between">
                    <span className="text-white/70">Topic scope:</span>
                    <span>Clinic Administrative Scheduling</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Local Database:</span>
                    <span>W3C Standard LocalStorage API</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Routing:</span>
                    <span>HTML5 Browser Navigation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content text */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Project Purpose</h3>
                <h2 className="text-3xl font-extrabold text-gray-900">Why MedBook?</h2>
                <div className="h-1 bg-indigo-600 w-12 rounded"></div>
              </div>

              <div className="space-y-4 text-sm text-gray-650 leading-relaxed">
                <p>
                  MedBook is built to bridge the operational gap between busy independent medical consultants and patient client schedules. Standard clinic systems are often slow, hard to manage, or heavily dependent on external hosting setups.
                </p>
                <p>
                  This application simulates a fully functional scheduling service using <strong>React modular components</strong>, synchronized logins, and offline <strong>localStorage caches</strong>. It ensures that data remains persistent across browser sessions while removing system complexities such as paid cloud databases or active API keys.
                </p>
                <p className="font-semibold text-gray-900">
                  Key Benefits & Highlights:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li>Separate secure patient and doctor credentials gates.</li>
                  <li>Dynamic doctor lookup with specialization filters.</li>
                  <li>Real-time automated scheduling sequencing (e.g. APT-001).</li>
                  <li>Receipt printable slips with diagnostic data.</li>
                  <li>Interactive ratings and medical feedback logs.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <FAQ />

      {/* 7. Contact Us Form */}
      <ContactForm />

    </div>
  );
}
