/**
 * doctorsData.js — Mock Data Module
 * ===================================
 * CO1: Data is decoupled from UI (component-driven architecture).
 * CO2: ES6+ module export, array of immutable objects, template literals.
 *
 * This data layer simulates a backend database.
 * Components never mutate this array — they only consume copies (immutability).
 */

// ---------- Specialities (pure data, exported as a frozen array) ----------
export const specialities = Object.freeze([
  { id: 1, name: 'Dentist', icon: '🦷', color: '#00B4D8', description: 'Oral health & dental care' },
  { id: 2, name: 'Cardiologist', icon: '❤️', color: '#E63946', description: 'Heart & cardiovascular care' },
  { id: 3, name: 'Neurologist', icon: '🧠', color: '#6C63FF', description: 'Brain & nervous system' },
  { id: 4, name: 'Pediatrician', icon: '👶', color: '#00C9A7', description: 'Child health & development' },
  { id: 5, name: 'Dermatologist', icon: '🧴', color: '#F4A261', description: 'Skin care & treatment' },
  { id: 6, name: 'Orthopedic', icon: '🦴', color: '#2A9D8F', description: 'Bone & joint specialist' },
]);

// ---------- Doctors List ----------
export const doctors = Object.freeze([
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    speciality: 'Cardiologist',
    experience: 12,
    rating: 4.9,
    patients: 1500,
    location: 'Mumbai',
    available: true,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    fee: 800,
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    speciality: 'Neurologist',
    experience: 15,
    rating: 4.8,
    patients: 2100,
    location: 'Delhi',
    available: true,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
    fee: 1000,
  },
  {
    id: 3,
    name: 'Dr. Ananya Patel',
    speciality: 'Dentist',
    experience: 8,
    rating: 4.7,
    patients: 980,
    location: 'Bangalore',
    available: false,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya',
    fee: 600,
  },
  {
    id: 4,
    name: 'Dr. Vikram Singh',
    speciality: 'Pediatrician',
    experience: 10,
    rating: 4.9,
    patients: 1800,
    location: 'Chennai',
    available: true,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
    fee: 700,
  },
  {
    id: 5,
    name: 'Dr. Sneha Reddy',
    speciality: 'Dermatologist',
    experience: 6,
    rating: 4.6,
    patients: 750,
    location: 'Hyderabad',
    available: true,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
    fee: 900,
  },
  {
    id: 6,
    name: 'Dr. Arjun Mehta',
    speciality: 'Orthopedic',
    experience: 14,
    rating: 4.8,
    patients: 1600,
    location: 'Pune',
    available: true,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    fee: 850,
  },
  {
    id: 7,
    name: 'Dr. Kavitha Nair',
    speciality: 'Cardiologist',
    experience: 11,
    rating: 4.7,
    patients: 1300,
    location: 'Kochi',
    available: true,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavitha',
    fee: 750,
  },
  {
    id: 8,
    name: 'Dr. Rohan Das',
    speciality: 'Neurologist',
    experience: 9,
    rating: 4.5,
    patients: 900,
    location: 'Kolkata',
    available: false,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
    fee: 950,
  },
]);

// ---------- Testimonials ----------
export const testimonials = Object.freeze([
  {
    id: 1,
    name: 'Aisha Bano',
    role: 'Patient',
    text: 'Booking a doctor has never been this easy! I found a specialist within minutes and the video consultation was seamless.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha',
  },
  {
    id: 2,
    name: 'Mohammed Rizwan',
    role: 'Patient',
    text: 'The appointment reminders saved me from missing my follow-up. The whole platform feels very professional and trustworthy.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed',
  },
  {
    id: 3,
    name: 'Deepika Joshi',
    role: 'Patient',
    text: 'I was able to compare doctors, read reviews, and book instantly. This is how healthcare should work in the digital age!',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Deepika',
  },
]);

// ---------- Statistics ----------
export const statistics = Object.freeze([
  { id: 1, label: 'Expert Doctors', value: 500, suffix: '+', icon: '👨‍⚕️' },
  { id: 2, label: 'Happy Patients', value: 10000, suffix: '+', icon: '😊' },
  { id: 3, label: 'Appointments', value: 25000, suffix: '+', icon: '📅' },
  { id: 4, label: '24/7 Support', value: 24, suffix: '/7', icon: '🛡️' },
]);

// ---------- Features ----------
export const features = Object.freeze([
  {
    id: 1,
    title: 'Instant Booking',
    description: 'Book appointments with top doctors in just a few clicks — no waiting, no hassle.',
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Video Consultation',
    description: 'Consult doctors from the comfort of your home with HD video calls.',
    icon: '📹',
  },
  {
    id: 3,
    title: 'Appointment Reminders',
    description: 'Never miss an appointment with smart SMS and email reminders.',
    icon: '🔔',
  },
  {
    id: 4,
    title: 'Secure Records',
    description: 'Your medical records are encrypted and safely stored in the cloud.',
    icon: '🔒',
  },
]);
