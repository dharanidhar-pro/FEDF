import React from "react";
import * as Icons from "lucide-react";
import { specialtiesData } from "../data/specialtiesData";

export default function Specialties() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50/20" id="specialties-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Medical Divisions</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Consult Specialists Across Specialties
          </p>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mx-auto"></div>
          <p className="text-gray-500 text-base leading-relaxed">
            MedBook supports quick matching filtered lookups. Explore qualified clinical practitioners across diverse fields of medicine.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtiesData.map((spec) => {
            // Dynamically resolve icon from Lucide
            const ResolvedIcon = Icons[spec.iconName] || Icons.Activity;

            return (
              <div
                key={spec.id}
                className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
              >
                <div className={`p-4 rounded-xl shrink-0 ${spec.color} group-hover:scale-105 transition-transform`}>
                  <ResolvedIcon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
