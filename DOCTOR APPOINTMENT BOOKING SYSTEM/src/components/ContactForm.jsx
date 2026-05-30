import React, { useState } from "react";
import { Send, MapPin, Mail, Phone, Clock, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Fetch existing contact array or create
    const localContacts = localStorage.getItem("medbook_contacts");
    const contacts = localContacts ? JSON.parse(localContacts) : [];

    const newSubmission = {
      id: `contact-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString()
    };

    contacts.push(newSubmission);
    localStorage.setItem("medbook_contacts", JSON.stringify(contacts));

    // Reset details and fire Success trigger
    setFormData({ name: "", email: "", message: "" });
    setIsSuccess(true);

    // Auto clear Success pop-up after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-tr from-indigo-50/20 to-white border-t border-gray-100" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Clinical Info */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Get in Touch</h2>
              <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                We're Here to Assist You Always
              </p>
              <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full"></div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Have custom questions regarding our platform features, doctor matching codes, or B.Tech engineering viva presentation files? Reach out to us.
              </p>
            </div>

            {/* Quick Contact Indicators */}
            <div className="space-y-5">
              {[
                { icon: MapPin, title: "Our Location", detail: "MedBook Plaza, Medical Square, NY 10001" },
                { icon: Mail, title: "Email Support", detail: "support@medbook.healthcare.com" },
                { icon: Phone, title: "Emergency Hotline", detail: "+1 (555) 019-9900" },
                { icon: Clock, title: "Clinic Support Hours", detail: "Mon - Sat: 08:00 AM - 08:00 PM" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 shrink-0 shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-xs text-gray-400 font-semibold italic">
              * In case of general health emergencies, please call 911 directly.
            </div>
          </div>

          {/* Right Block: Contact Form fields */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-gray-150 shadow-xl relative overflow-hidden flex flex-col justify-center">
            
            {isSuccess && (
              <div className="mb-6 bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-xl flex items-center gap-3 animate-slide-up">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <div>
                  <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-600/90 mt-0.5">Your inquiry has been stored locally in client submissions.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Your Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-gray-250 focus:border-indigo-500 focus:bg-white rounded-xl py-3 px-4 text-xs text-gray-900 outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Your Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border border-gray-250 focus:border-indigo-500 focus:bg-white rounded-xl py-3 px-4 text-xs text-gray-900 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Detailed Inquiry Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Type your questions or concerns here..."
                  className="w-full bg-slate-50 border border-gray-250 focus:border-indigo-500 focus:bg-white rounded-xl py-3 px-4 text-xs text-gray-900 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-indigo-600 hover:bg-indigo-755 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                Submit Inquiry Details
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
