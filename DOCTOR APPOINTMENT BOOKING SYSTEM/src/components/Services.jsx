import React from "react";
import { Search, CalendarCheck, ShieldAlert, HeartHandshake } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      title: "Doctor Search",
      description: "Search specialized clinical professionals by doctor name, specialization scope, or available cities instantly.",
      icon: Search,
      bg: "bg-indigo-50 text-indigo-650",
      accent: "border-indigo-100"
    },
    {
      title: "Appointment Booking",
      description: "Select convenient date slots, choose preferred times, review costs, and generate unique booking ticket systems.",
      icon: CalendarCheck,
      bg: "bg-emerald-50 text-emerald-650",
      accent: "border-emerald-100"
    },
    {
      title: "Appointment Tracking",
      description: "Monitor approval status through active color-coded badges matching pending, confirmed, rejected or cancelled states.",
      icon: ShieldAlert,
      bg: "bg-amber-50 text-amber-650",
      accent: "border-amber-100"
    },
    {
      title: "Online Health Records",
      description: "Store registered information, edit medical bio notes, and download official digital receipts of your bookings.",
      icon: HeartHandshake,
      bg: "bg-blue-50 text-blue-650",
      accent: "border-blue-100"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-gray-50" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Our Medical Services</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Integrated Solutions Offering Quality Patient Care
          </p>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mx-auto"></div>
          <p className="text-gray-500 text-base leading-relaxed">
            MedBook provides a frictionless clinic administrative flow designed specifically to help patients connect with primary health care specialists effortlessly.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between ${service.accent}`}
            >
              <div>
                {/* Icon Container */}
                <div className={`p-3.5 rounded-xl inline-block mb-5 ${service.bg}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group">
                Real-time System <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
