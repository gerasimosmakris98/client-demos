import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Heart, Stethoscope, Phone, Mail, MapPin, Clock, Star, Users, Calendar, Shield, CheckCircle, ChevronDown, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-950 via-slate-950 to-cyan-950 text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20,184,166,0.4) 1px, transparent 0)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-teal-500/30 rounded-full bg-teal-500/10 text-teal-400 font-mono text-xs tracking-widest uppercase mb-8">
                    <Heart size={14} /> Your Health First
                </div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6">GM <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">MEDICAL</span></h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">Σύγχρονο ιατρικό κέντρο με εξειδικευμένους γιατρούς. Online ραντεβού, προσωπική φροντίδα.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-teal-500 text-black px-10 py-4 rounded-full font-black uppercase tracking-wider hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20 flex items-center gap-2 justify-center"><Calendar size={18} /> Κλείστε Ραντεβού</button>
                    <button className="border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">Ειδικότητες</button>
                </div>
            </motion.div>
        </div>
    </section>
);

const About = () => (
    <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <span className="text-teal-400 font-mono text-sm uppercase tracking-widest">Σχετικά</span>
                <h2 className="text-4xl font-black mt-2 mb-6">Φροντίδα Με <span className="text-teal-400">Αξιοπιστία</span></h2>
                <p className="text-gray-400 leading-relaxed mb-8">Το GM Medical λειτουργεί από το 2010 με στόχο την παροχή υψηλού επιπέδου ιατρικών υπηρεσιών. Σύγχρονος εξοπλισμός, ζεστό περιβάλλον, ασθενοκεντρική προσέγγιση.</p>
                <div className="grid grid-cols-2 gap-6">
                    {[{ num: '12,000+', label: 'Patients/Year' }, { num: '25+', label: 'Doctors' }, { num: '15+', label: 'Specialties' }, { num: '98%', label: 'Satisfaction' }].map((s, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10"><div className="text-xl font-black text-teal-400">{s.num}</div><div className="text-gray-500 text-xs">{s.label}</div></div>
                    ))}
                </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[400px]"><img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2535&auto=format&fit=crop" className="w-full h-full object-cover" alt="Medical center" /></div>
        </div>
    </section>
);

const Specialties = () => (
    <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-teal-400 font-mono text-sm uppercase tracking-widest">Ειδικότητες</span><h2 className="text-4xl font-black mt-2">OUR SPECIALTIES</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Heart, title: 'Καρδιολογία', desc: 'Ηλεκτροκαρδιογράφημα, Holter, Triplex.' },
                    { icon: Activity, title: 'Παθολογία', desc: 'Γενική εξέταση, check-up, χρόνια νοσήματα.' },
                    { icon: Stethoscope, title: 'Παιδιατρική', desc: 'Εμβολιασμοί, ανάπτυξη, παιδικές ασθένειες.' },
                    { icon: Shield, title: 'Δερματολογία', desc: 'Δερματοσκόπηση, αισθητική, αλλεργίες.' },
                    { icon: Users, title: 'Ορθοπεδική', desc: 'Αθλητικές κακώσεις, αρθρώσεις, σπονδυλική.' },
                    { icon: Heart, title: 'Γυναικολογία', desc: 'Υπέρηχοι, PAP test, εγκυμοσύνη.' }
                ].map((s, i) => (
                    <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all hover:-translate-y-1">
                        <div className="mb-6 p-4 bg-teal-500/10 w-fit rounded-2xl text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-colors"><s.icon size={28} /></div>
                        <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                        <p className="text-gray-500 text-sm">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Doctors = () => (
    <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-teal-400 font-mono text-sm uppercase tracking-widest">Our Team</span><h2 className="text-4xl font-black mt-2">EXPERT DOCTORS</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { name: 'Δρ. Ελένη Κ.', role: 'Καρδιολόγος' },
                    { name: 'Δρ. Νίκος Μ.', role: 'Παθολόγος' },
                    { name: 'Δρ. Μαρία Π.', role: 'Δερματολόγος' },
                    { name: 'Δρ. Γιώργος Α.', role: 'Ορθοπεδικός' }
                ].map((d, i) => (
                    <div key={i} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-colors">
                        <div className="w-20 h-20 rounded-full bg-teal-500/20 mx-auto mb-4 flex items-center justify-center"><Stethoscope size={32} className="text-teal-400" /></div>
                        <h3 className="font-bold">{d.name}</h3>
                        <p className="text-teal-400 text-sm">{d.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-teal-400 font-mono text-sm uppercase tracking-widest">Reviews</span><h2 className="text-4xl font-black mt-2">PATIENT REVIEWS</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Αναστασία Λ.', text: 'Εξαιρετική εξυπηρέτηση και πολύ σύντομος χρόνος αναμονής.' },
                    { name: 'Κώστας Β.', text: 'Ο γιατρός αφιέρωσε χρόνο και μου εξήγησε τα πάντα.' },
                    { name: 'Helen M.', text: 'State of the art equipment, very professional staff.' }
                ].map((t, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-teal-400 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-6 italic">"{t.text}"</p>
                        <p className="font-bold text-sm">{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Booking = () => (
    <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="text-teal-400 font-mono text-sm uppercase tracking-widest">Online</span>
            <h2 className="text-4xl font-black mt-2 mb-12">BOOK APPOINTMENT</h2>
            <div className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none" placeholder="Ονοματεπώνυμο" />
                    <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none" placeholder="Τηλέφωνο" />
                </div>
                <select className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none text-gray-400 appearance-none">
                    <option>Επιλέξτε Ειδικότητα</option><option>Καρδιολογία</option><option>Παθολογία</option><option>Δερματολογία</option>
                </select>
                <input type="date" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none text-gray-400" />
                <button className="w-full bg-teal-500 text-black py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-teal-400 transition-colors">Κλείστε Ραντεβού</button>
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: Phone, title: 'Τηλέφωνο', text: '+30 210 000 0000' },
                { icon: MapPin, title: 'Διεύθυνση', text: 'Μεσογείων 120, Αθήνα' },
                { icon: Clock, title: 'Ωράριο', text: 'Δευ-Παρ: 08:00 - 21:00' }
            ].map((c, i) => (
                <div key={i} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10">
                    <c.icon size={28} className="text-teal-400 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{c.title}</h3>
                    <p className="text-gray-400 text-sm">{c.text}</p>
                </div>
            ))}
        </div>
    </section>
);

const FooterSection = () => (
    <footer className="bg-slate-950 py-12 border-t border-teal-500/20 text-center">
        <h3 className="text-4xl font-black text-slate-800 mb-4">GM MEDICAL</h3>
        <p className="text-gray-700 text-xs">© 2026 GM Medical. All rights reserved.</p>
    </footer>
);

const MedicalDemo = () => {
    const { viewMode } = useOutletContext() || {};
    useEffect(() => { window.scrollTo(0, 0); }, []);

    if (viewMode === 'admin') {
        return <UniversalAdmin config={{
            brandName: 'GM Medical',
            brandLogo: '🏥',
            accentColor: 'teal',
            roles: [{ id: 'admin', label: 'Director' }, { id: 'staff', label: 'Doctor' }, { id: 'user', label: 'Nurse' }],
            stats: [
                { label: 'Appointments Today', value: '42', trend: 8 },
                { label: 'Patients (Month)', value: '1,200', trend: 12 },
                { label: 'Doctors Active', value: '18/25', trend: 0 },
                { label: 'Revenue', value: '€28k', trend: 15 }
            ],
            kpis: [
                { label: 'Patient Satisfaction', value: '96%', progress: 96 },
                { label: 'Wait Time (Avg)', value: '12 min', progress: 40 },
                { label: 'Bed Occupancy', value: '78%', progress: 78 }
            ]
        }} />;
    }

    return (
        <div className="bg-slate-950 min-h-screen text-white font-sans">
            <Hero /><About /><Specialties /><Doctors /><TestimonialsSection /><Booking /><ContactSection /><FooterSection />
            <AIChat brandName="GM Medical" />
        </div>
    );
};

export default MedicalDemo;
