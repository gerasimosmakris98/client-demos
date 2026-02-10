import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Zap, Shield, Phone, Clock, Star, Wrench, CheckCircle, MapPin, Mail, ArrowRight, ChevronDown, Users, Award, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
import AdminMock from '../../components/demos/AdminMock';

/* ───────── HERO ───────── */
const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(251,146,60,0.15),transparent_50%)]" />
        <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500/30 rounded-full bg-orange-500/10 text-orange-400 font-mono text-xs tracking-widest uppercase mb-8">
                    <Zap size={14} /> 24/7 Emergency Service
                </div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6">
                    GM <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">ELECTRIC</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">Πιστοποιημένοι ηλεκτρολόγοι με εμπειρία 20+ ετών. Οικιακές & εμπορικές εγκαταστάσεις.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-orange-500 text-black px-10 py-4 rounded-full font-black uppercase tracking-wider hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/30 flex items-center gap-2 justify-center"><Phone size={18} /> Κλήση Τώρα</button>
                    <button className="border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">Υπηρεσίες</button>
                </div>
            </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"><ChevronDown size={32} /></motion.div>
    </section>
);

/* ───────── ABOUT ───────── */
const About = () => (
    <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <span className="text-orange-400 font-mono text-sm uppercase tracking-widest">Ποιοι Είμαστε</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2 mb-6">20+ Χρόνια <span className="text-orange-400">Εμπειρίας</span></h2>
                <p className="text-gray-400 leading-relaxed mb-8">Η GM Electric παρέχει αξιόπιστες ηλεκτρολογικές υπηρεσίες σε Αττική και νησιά. Εξειδικευόμαστε σε οικιακές, εμπορικές και βιομηχανικές εγκαταστάσεις με πλήρη πιστοποίηση.</p>
                <div className="grid grid-cols-2 gap-6">
                    {[{ num: '2,500+', label: 'Projects' }, { num: '99%', label: 'Satisfaction' }, { num: '24/7', label: 'Support' }, { num: '15+', label: 'Technicians' }].map((s, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10"><div className="text-2xl font-black text-orange-400">{s.num}</div><div className="text-gray-500 text-sm">{s.label}</div></div>
                    ))}
                </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[400px]">
                <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2669&auto=format&fit=crop" className="w-full h-full object-cover" alt="Electrician at work" />
            </div>
        </div>
    </section>
);

/* ───────── SERVICES ───────── */
const Services = () => (
    <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-orange-400 font-mono text-sm uppercase tracking-widest">Υπηρεσίες</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2">OUR SERVICES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Zap, title: 'Ηλεκτρολογικές Εγκαταστάσεις', desc: 'Νέες εγκαταστάσεις, αναβαθμίσεις πίνακα, καλωδιώσεις.' },
                    { icon: Shield, title: 'Πιστοποιήσεις & Έλεγχοι', desc: 'Ηλεκτρολογικός έλεγχος, πιστοποίηση ΔΕΗ.' },
                    { icon: Wrench, title: 'Επισκευές & Συντήρηση', desc: 'Βλάβες, αντικαταστάσεις, προληπτική συντήρηση.' },
                    { icon: Zap, title: 'Φωτοβολταϊκά', desc: 'Εγκατάσταση & σύνδεση φωτοβολταϊκών συστημάτων.' },
                    { icon: Shield, title: 'Smart Home', desc: 'Αυτοματισμοί σπιτιού, φωτισμός LED, θυροτηλεόραση.' },
                    { icon: Wrench, title: 'Βιομηχανικά', desc: 'Βιομηχανικές εγκαταστάσεις & πίνακες αυτοματισμού.' }
                ].map((s, i) => (
                    <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all hover:-translate-y-1">
                        <div className="mb-6 p-4 bg-orange-500/10 w-fit rounded-2xl text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition-colors"><s.icon size={28} /></div>
                        <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ───────── TEAM ───────── */
const Team = () => (
    <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-orange-400 font-mono text-sm uppercase tracking-widest">Η Ομάδα</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2">CERTIFIED EXPERTS</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Νίκος Κ.', 'Γιώργος Μ.', 'Δημήτρης Π.', 'Αλέξης Τ.'].map((name, i) => (
                    <div key={i} className="group relative h-[300px] rounded-3xl overflow-hidden bg-slate-800">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-lg font-bold">{name}</h3>
                            <p className="text-orange-400 text-sm">Master Electrician</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ───────── GALLERY ───────── */
const Gallery = () => (
    <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-orange-400 font-mono text-sm uppercase tracking-widest">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2">OUR WORK</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="aspect-square rounded-2xl bg-slate-800 border border-white/5 hover:border-orange-500/30 transition-colors overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-gray-600"><Zap size={40} /></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ───────── TESTIMONIALS ───────── */
const Testimonials = () => (
    <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-orange-400 font-mono text-sm uppercase tracking-widest">Reviews</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2">WHAT CLIENTS SAY</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Μαρία Κ.', text: 'Εξαιρετική δουλειά! Ήρθαν ίδια ημέρα και έλυσαν το πρόβλημα αμέσως.' },
                    { name: 'Πέτρος Λ.', text: 'Πολύ επαγγελματίες, καθαρή δουλειά και λογικές τιμές.' },
                    { name: 'Ελένη Δ.', text: 'Τους εμπιστεύομαι πλήρως. Συνεργαζόμαστε εδώ και 5 χρόνια.' }
                ].map((t, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-orange-400 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-6 italic">"{t.text}"</p>
                        <p className="font-bold text-sm">{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ───────── PRICING ───────── */
const Pricing = () => (
    <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-orange-400 font-mono text-sm uppercase tracking-widest">Τιμοκατάλογος</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2">PRICING</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'BASIC', price: '80', unit: '/visit', features: ['Diagnostic Check', 'Minor Repairs', 'Safety Inspection'] },
                    { name: 'STANDARD', price: '150', unit: '/project', popular: true, features: ['Full Installation', 'Panel Upgrade', 'Certification', 'Warranty'] },
                    { name: 'PREMIUM', price: '300', unit: '/project', features: ['Smart Home Setup', 'Full Rewiring', 'Solar Integration', '24/7 Support'] }
                ].map((p, i) => (
                    <div key={i} className={`p-8 rounded-3xl border flex flex-col ${p.popular ? 'bg-orange-500/10 border-orange-500' : 'bg-white/5 border-white/10'}`}>
                        {p.popular && <div className="text-center text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">Most Popular</div>}
                        <h3 className="text-xl font-black mb-2">{p.name}</h3>
                        <div className="mb-8"><span className="text-4xl font-black">€{p.price}</span><span className="text-gray-400">{p.unit}</span></div>
                        <ul className="space-y-3 mb-8 flex-1">
                            {p.features.map((f, j) => <li key={j} className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle size={14} className="text-orange-400" />{f}</li>)}
                        </ul>
                        <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all ${p.popular ? 'bg-orange-500 text-black hover:bg-orange-400' : 'bg-white/10 hover:bg-white/20'}`}>Select</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ───────── CONTACT ───────── */
const Contact = () => (
    <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <span className="text-orange-400 font-mono text-sm uppercase tracking-widest">Επικοινωνία</span>
                <h2 className="text-4xl font-black mt-2 mb-8">GET IN TOUCH</h2>
                <div className="space-y-6 text-gray-400">
                    <div className="flex items-center gap-4"><Phone size={20} className="text-orange-400" /> +30 210 000 0000</div>
                    <div className="flex items-center gap-4"><Mail size={20} className="text-orange-400" /> info@gmelectric.gr</div>
                    <div className="flex items-center gap-4"><MapPin size={20} className="text-orange-400" /> Λ. Κηφισίας 120, Αθήνα</div>
                    <div className="flex items-center gap-4"><Clock size={20} className="text-orange-400" /> Δευ-Σαβ: 07:00 - 22:00</div>
                </div>
            </div>
            <div className="space-y-4">
                <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 outline-none transition-colors" placeholder="Ονοματεπώνυμο" />
                <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 outline-none transition-colors" placeholder="Τηλέφωνο" />
                <textarea className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 outline-none transition-colors h-32 resize-none" placeholder="Περιγραφή βλάβης..." />
                <button className="w-full bg-orange-500 text-black py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">Αποστολή</button>
            </div>
        </div>
    </section>
);

/* ───────── FOOTER ───────── */
const Footer = () => (
    <footer className="bg-black py-12 border-t border-white/10 text-center">
        <h3 className="text-4xl font-black text-slate-800 mb-4">GM ELECTRIC</h3>
        <div className="flex justify-center gap-8 text-gray-600 text-sm mb-6">
            <a href="#" className="hover:text-orange-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a>
        </div>
        <p className="text-gray-700 text-xs">© 2026 GM Electric. All rights reserved.</p>
    </footer>
);

/* ───────── MAIN ───────── */
const ElectricianDemo = () => {
    const { viewMode } = useOutletContext() || {};
    useEffect(() => { window.scrollTo(0, 0); }, []);

    if (viewMode === 'admin') {
        return <AdminMock title="GM Electric" stats={[
            { label: 'Jobs Today', value: '8', trend: 10 },
            { label: 'Revenue', value: '€2.4k', trend: 12 },
            { label: 'Pending Quotes', value: '14', trend: -3 },
            { label: 'Avg Rating', value: '4.9', trend: 2 }
        ]} />;
    }

    return (
        <div className="bg-slate-950 min-h-screen text-white font-sans">
            <Hero /><About /><Services /><Team /><Gallery /><Testimonials /><Pricing /><Contact /><Footer />
            <AIChat brandName="GM Electric" />
        </div>
    );
};

export default ElectricianDemo;
