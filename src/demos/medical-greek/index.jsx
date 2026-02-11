import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Heart, Stethoscope, Phone, Mail, MapPin, Clock, Star, Users, Calendar, Shield, CheckCircle, ChevronDown, Activity, CalendarDays, FileText, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const medicalTabs = [
    {
        id: 'patients', label: 'Patients', icon: Users, columns: ['Patient', 'Status', 'Doctor', 'Visit'],
        rows: [['Maria K.', 'Active', 'Dr. Papadopoulos', 'Follow-up'], ['John D.', 'Active', 'Dr. Alexiou', 'New patient'], ['Elena P.', 'Pending', 'Dr. Georgiou', 'Lab review'], ['George S.', 'Active', 'Dr. Papadopoulos', 'Checkup'], ['Anna M.', 'Completed', 'Dr. Stavrou', 'Referral']]
    },
    {
        id: 'appointments', label: 'Appointments', icon: CalendarDays, columns: ['Patient', 'Status', 'Time', 'Doctor'],
        rows: [['Maria K.', 'Confirmed', '09:00', 'Dr. P.'], ['John D.', 'Confirmed', '09:30', 'Dr. A.'], ['Elena P.', 'Pending', '10:00', 'Dr. G.'], ['George S.', 'Confirmed', '11:00', 'Dr. P.'], ['Anna M.', 'Completed', '08:30', 'Dr. S.']]
    },
    {
        id: 'records', label: 'Records', icon: FileText, columns: ['Patient', 'Status', 'Type', 'Date'],
        rows: [['Maria K.', 'Active', 'Blood work', 'Feb 10'], ['John D.', 'Active', 'X-Ray', 'Feb 9'], ['Elena P.', 'Pending', 'MRI', 'Feb 12'], ['George S.', 'Completed', 'ECG', 'Feb 8']]
    },
    {
        id: 'lab', label: 'Lab', icon: FlaskConical, columns: ['Test', 'Status', 'Patient', 'Results'],
        rows: [['CBC Panel', 'Completed', 'Maria K.', 'Normal'], ['Thyroid', 'In Progress', 'John D.', 'Pending'], ['Cholesterol', 'Completed', 'Elena P.', 'High'], ['Glucose', 'Completed', 'George S.', 'Normal'], ['HbA1c', 'Pending', 'Anna M.', 'Awaiting']]
    },
];

/* ───────── PULSING HEARTBEAT BADGE ───────── */
const HeartbeatBadge = ({ children }) => (
    <div className="inline-flex items-center gap-2 px-4 py-2 border border-teal-500/30 rounded-full bg-teal-500/10 text-teal-400 font-mono text-[10px] md:text-xs tracking-widest uppercase mb-6 md:mb-8">
        <motion.div
            animate={{ scale: [1, 1.3, 1, 1.15, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.6 }}
        >
            <Heart size={14} fill="currentColor" />
        </motion.div>
        {children}
    </div>
);

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-950 via-slate-950 to-cyan-950 text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20,184,166,0.4) 1px, transparent 0)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <HeartbeatBadge>Your Health First</HeartbeatBadge>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 md:mb-6">
                    GM <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">MEDICAL</span>
                </h1>
                <p className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 px-2">
                    Σύγχρονο ιατρικό κέντρο με εξειδικευμένους γιατρούς. Online ραντεβού, προσωπική φροντίδα.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                    <button className="bg-teal-500 text-black px-8 md:px-10 py-3.5 md:py-4 rounded-full font-black uppercase tracking-wider hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20 flex items-center gap-2 justify-center text-sm">
                        <Calendar size={16} /> Κλείστε Ραντεβού
                    </button>
                    <button className="border border-white/20 px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-sm">
                        Ειδικότητες
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
);

/* ───────── ABOUT — Asymmetric Layout ───────── */
const About = () => (
    <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
                <span className="text-teal-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">Σχετικά</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4 md:mb-6">Φροντίδα Με <span className="text-teal-400">Αξιοπιστία</span></h2>
                <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">Το GM Medical λειτουργεί από το 2010 με στόχο την παροχή υψηλού επιπέδου ιατρικών υπηρεσιών. Σύγχρονος εξοπλισμός, ζεστό περιβάλλον, ασθενοκεντρική προσέγγιση.</p>
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                    {[{ num: '12,000+', label: 'Patients/Year' }, { num: '25+', label: 'Doctors' }, { num: '15+', label: 'Specialties' }, { num: '98%', label: 'Satisfaction' }].map((s, i) => (
                        <div key={i} className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-lg md:text-xl font-black text-teal-400">{s.num}</div>
                            <div className="text-gray-500 text-[10px] md:text-xs">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Image extends past section boundary on desktop for asymmetric feel */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden h-[260px] md:h-[400px] md:-mb-12 md:mt-8 relative">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2535&auto=format&fit=crop" className="w-full h-full object-cover" alt="Medical center" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent md:from-transparent" />
            </div>
        </div>
    </section>
);

const Specialties = () => (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-teal-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">Ειδικότητες</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">OUR SPECIALTIES</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {[
                    { icon: Heart, title: 'Καρδιολογία', desc: 'Ηλεκτροκαρδιογράφημα, Holter, Triplex.' },
                    { icon: Activity, title: 'Παθολογία', desc: 'Γενική εξέταση, check-up, χρόνια νοσήματα.' },
                    { icon: Stethoscope, title: 'Παιδιατρική', desc: 'Εμβολιασμοί, ανάπτυξη, παιδικές ασθένειες.' },
                    { icon: Shield, title: 'Δερματολογία', desc: 'Δερματοσκόπηση, αισθητική, αλλεργίες.' },
                    { icon: Users, title: 'Ορθοπεδική', desc: 'Αθλητικές κακώσεις, αρθρώσεις, σπονδυλική.' },
                    { icon: Heart, title: 'Γυναικολογία', desc: 'Υπέρηχοι, PAP test, εγκυμοσύνη.' }
                ].map((s, i) => (
                    <div key={i} className="group p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all hover:-translate-y-1">
                        <div className="mb-4 md:mb-6 p-3 md:p-4 bg-teal-500/10 w-fit rounded-xl md:rounded-2xl text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-colors">
                            <s.icon size={24} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{s.title}</h3>
                        <p className="text-gray-500 text-xs md:text-sm">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Doctors = () => (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-teal-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">Our Team</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">EXPERT DOCTORS</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                {[
                    { name: 'Δρ. Ελένη Κ.', role: 'Καρδιολόγος' },
                    { name: 'Δρ. Νίκος Μ.', role: 'Παθολόγος' },
                    { name: 'Δρ. Μαρία Π.', role: 'Δερματολόγος' },
                    { name: 'Δρ. Γιώργος Α.', role: 'Ορθοπεδικός' }
                ].map((d, i) => (
                    <div key={i} className="text-center p-4 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-colors">
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-teal-500/20 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                            <Stethoscope size={24} className="text-teal-400 md:w-8 md:h-8" />
                        </div>
                        <h3 className="font-bold text-sm md:text-base">{d.name}</h3>
                        <p className="text-teal-400 text-[10px] md:text-sm">{d.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-teal-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">Reviews</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">PATIENT REVIEWS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {[
                    { name: 'Αναστασία Λ.', text: 'Εξαιρετική εξυπηρέτηση και πολύ σύντομος χρόνος αναμονής.' },
                    { name: 'Κώστας Β.', text: 'Ο γιατρός αφιέρωσε χρόνο και μου εξήγησε τα πάντα.' },
                    { name: 'Helen M.', text: 'State of the art equipment, very professional staff.' }
                ].map((t, i) => (
                    <div key={i} className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-teal-400 mb-3 md:mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-4 md:mb-6 italic text-sm md:text-base">"{t.text}"</p>
                        <p className="font-bold text-sm">{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Booking = () => (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <span className="text-teal-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">Online</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-8 md:mb-12">BOOK APPOINTMENT</h2>
            <div className="space-y-3 md:space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none text-sm" placeholder="Ονοματεπώνυμο" />
                    <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none text-sm" placeholder="Τηλέφωνο" />
                </div>
                <select className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none text-gray-400 appearance-none text-sm">
                    <option>Επιλέξτε Ειδικότητα</option><option>Καρδιολογία</option><option>Παθολογία</option><option>Δερματολογία</option>
                </select>
                <input type="date" className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none text-gray-400 text-sm" />
                <button className="w-full bg-teal-500 text-black py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-teal-400 transition-colors text-sm">Κλείστε Ραντεβού</button>
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            {[
                { icon: Phone, title: 'Τηλέφωνο', text: '+30 210 000 0000' },
                { icon: MapPin, title: 'Διεύθυνση', text: 'Μεσογείων 120, Αθήνα' },
                { icon: Clock, title: 'Ωράριο', text: 'Δευ-Παρ: 08:00 - 21:00' }
            ].map((c, i) => (
                <div key={i} className="text-center p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10">
                    <c.icon size={24} className="text-teal-400 mx-auto mb-3 md:mb-4" />
                    <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">{c.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm">{c.text}</p>
                </div>
            ))}
        </div>
    </section>
);

const FooterSection = () => (
    <footer className="bg-slate-950 py-10 md:py-12 border-t border-teal-500/20 text-center px-4">
        <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-3 md:mb-4">GM MEDICAL</h3>
        <p className="text-gray-700 text-[10px] md:text-xs">© 2026 GM Medical. All rights reserved.</p>
    </footer>
);

const MedicalDemo = () => {
    const { viewMode } = useOutletContext() || {};
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-slate-950 min-h-screen text-white font-sans">
            <Hero /><About /><Specialties /><Doctors /><TestimonialsSection /><Booking /><ContactSection /><FooterSection />
            <AIChat brandName="GM Medical" />
        </div>
    );
};

export default MedicalDemo;
