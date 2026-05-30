import React from "react";
import { Link } from "react-router-dom";
import { Stethoscope, Mail, Phone, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8 border-b border-slate-800 pb-8">
          
          {/* Logo Brand Info block */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="p-1.5 bg-indigo-650 rounded-lg text-white">
                <Stethoscope className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white">
                Med<span className="text-indigo-400">Book</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing modern, frictionless, and premium medical appointment planning tools for clinics, consultants, and proactive patients everywhere.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Legal & Resources</h4>
            <ul className="text-xs space-y-2">
              <li>Patient privacy agreements, Terms of service and clinic guidelines.</li>
              <li className="flex items-center gap-2 text-indigo-450 hover:underline">
                <ExternalLink className="w-3 h-3" /> B.Tech Viva Project Guidelines (2026)
              </li>
            </ul>
          </div>

          {/* Final Contacts details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Contact Information</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>support@medbook.healthcare.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <span>+1 (555) 019-9900</span>
              </div>
            </div>
          </div>

        </div>

        {/* Closing details */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs gap-4">
          <p>© {currentYear} MedBook Doctor Appointment Booking System. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Tailwind & <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> for Frontend Engineering
          </p>
        </div>

      </div>
    </footer>
  );
}
