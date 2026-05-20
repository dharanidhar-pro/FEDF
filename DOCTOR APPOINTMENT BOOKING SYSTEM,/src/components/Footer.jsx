/**
 * Footer.jsx — Site Footer
 * ==========================
 * CO1: Self-contained reusable component (component-driven architecture).
 *      Declarative rendering of link groups via .map().
 * CO2: ES6 modules, arrow functions, array destructuring, template literals.
 */

import { FaHeartbeat, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

// CO2: data as array of objects — declarative link groups
const footerLinks = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Blog'],
  },
  {
    title: 'Services',
    links: ['Find Doctors', 'Video Consult', 'Appointments', 'Health Records'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
  },
];

const socialIcons = [
  { Icon: FaFacebookF, href: '#' },
  { Icon: FaTwitter, href: '#' },
  { Icon: FaInstagram, href: '#' },
  { Icon: FaLinkedinIn, href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* ---------- Brand ---------- */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center text-white">
                <FaHeartbeat size={18} />
              </div>
              <span className="text-xl font-bold text-white">MedBook</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Making quality healthcare accessible to everyone through technology.
              Book trusted doctors anytime, anywhere.
            </p>
            {/* CO1: declarative social icon rendering */}
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#0077B6] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* CO1: declarative link group rendering with .map() */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-[#00B4D8] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ---------- Divider & Copyright ---------- */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            {/* CO2: template literal */}
            {`© ${new Date().getFullYear()} MedBook. All rights reserved.`}
          </p>
          <p className="text-xs text-gray-500">
            Built with ❤️ using React.js — Doctor Appointment Booking System
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
