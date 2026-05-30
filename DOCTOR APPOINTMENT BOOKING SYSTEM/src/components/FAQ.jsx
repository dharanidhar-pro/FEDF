import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "First, click the 'Register' button and create a Patient Account. Once registered, login, go to the 'Find Doctors' section on your dashboard, search doctors by name or specialty, edit your details if needed, and press 'Book Appointment'. Select an available date and time slot, check the consultation fee, and confirm!"
    },
    {
      question: "Can I cancel appointments?",
      answer: "Yes, absolutely! On your Patient Dashboard, you will see your entire Appointment History under the first tab. Locate the booking you wish to cancel and click the red 'Cancel' button. Note that canceling an appointment will immediately notify the doctor and alter the appointment status code."
    },
    {
      question: "How does doctor approval work?",
      answer: "When you book, the system assigns a 'Pending' status badge to your appointment slot. The consultant doctor will receive a notification alert in their custom portal. They can review your name, profile card, and booking details to either 'Accept' (creates a 'Confirmed' badge) or 'Reject' (creates a 'Rejected' badge) the request."
    },
    {
      question: "Is there support available if I face login problems?",
      answer: "Yes! MedBook provides 24/7 technical customer assistance. You can fill out the contact form below or reach our support email address directly. Your queries are synced directly in our client records database."
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Frequently Asked Questions</h2>
          <p className="text-3xl font-extrabold text-gray-900 tracking-tight">Got Questions? We Have Answers</p>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-gray-150 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:text-indigo-600 hover:bg-slate-50 gap-4 transition-colors bg-white cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-indigo-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {/* Animated content box */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-40 border-t border-gray-100 bg-slate-50/50" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-sm text-gray-650 leading-relaxed">
                    {faq.answer}
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
