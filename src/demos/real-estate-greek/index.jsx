import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Home, Key, MapPin, Phone, Mail, Clock, Star, Users, TrendingUp, Building, CheckCircle, ChevronDown, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
import AdminMock from '../../components/demos/AdminMock';

/* ───────── HERO ───────── */
const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="text-amber-500 font-mono text-xs tracking-[0.4em] uppercase mb-8">Luxury Real Estate</div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6">
                    GM <span className="text-amber-500">ESTATES</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">Ανακαλύψτε πολυτελή ακίνητα σε Αθήνα, νησιά και Ευρώπη.</p>
                <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2 flex-1 bg-white/5 rounded-xl px-4"><Search size={16} className="text-gray-400" /><input className="bg-transparent w-full py-3 outline-none text-sm" placeholder="Location, type, or keyword..." /></div>
                    <button className="bg-amber-600 text-black px-8 py-3 rounded-xl font-bold hover:bg-amber-500 transition-colors">Search</button>
                </div>
            </motion.div>
        </div>
    </section>
);

/* ───────── ABOUT ───────── */
const About = () => (
    <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <span className="text-amber-500 font-mono text-sm uppercase tracking-widest">Η Εταιρεία</span>
                <h2 className="text-4xl font-black mt-2 mb-6">Αξιοπιστία Από Το <span className="text-amber-500">2005</span></h2>
                <p className="text-gray-400 leading-relaxed mb-8">Η GM Estates εξειδικεύεται σε πολυτελή ακίνητα, εμπορικά κτήρια και επενδύσεις real estate. Προσωπική εξυπηρέτηση, πλήρης νομική κάλυψη, και πρόσβαση σε αποκλειστικές αγορές.</p>
                <div className="grid grid-cols-3 gap-6">
                    {[{ num: '€250M+', label: 'Portfolio Value' }, { num: '800+', label: 'Properties Sold' }, { num: '18', label: 'Years Active' }].map((s, i) => (
                        <div key={i} className="text-center"><div className="text-2xl font-black text-amber-500">{s.num}</div><div className="text-gray-500 text-xs mt-1">{s.label}</div></div>
                    ))}
                </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[400px]"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Luxury property" /></div>
        </div>
    </section>
);

/* ───────── LISTINGS ───────── */
const Listings = () => (
    <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-amber-500 font-mono text-sm uppercase tracking-widest">Featured</span><h2 className="text-4xl font-black mt-2">EXCLUSIVE LISTINGS</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { loc: 'Κολωνάκι, Αθήνα', price: '€1,200,000', beds: 4, sqm: 220 },
                    { loc: 'Σαντορίνη, Οία', price: '€2,500,000', beds: 5, sqm: 350 },
                    { loc: 'Γλυφάδα, Αττική', price: '€850,000', beds: 3, sqm: 180 }
                ].map((p, i) => (
                    <div key={i} className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all">
                        <div className="h-64 bg-neutral-800 relative"><div className="absolute top-4 left-4 bg-amber-600 text-black px-3 py-1 rounded-full text-xs font-bold">{p.price}</div></div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2">{p.loc}</h3>
                            <div className="flex gap-4 text-sm text-gray-400"><span>{p.beds} Beds</span><span>{p.sqm} m²</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ───────── AGENTS ───────── */
const Agents = () => (
    <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-amber-500 font-mono text-sm uppercase tracking-widest">Our Team</span><h2 className="text-4xl font-black mt-2">TOP AGENTS</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Sophia L.', 'Andreas M.', 'Christina K.', 'Michalis D.'].map((name, i) => (
                    <div key={i} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
                        <div className="w-20 h-20 rounded-full bg-amber-500/20 mx-auto mb-4 flex items-center justify-center"><Users size={32} className="text-amber-500" /></div>
                        <h3 className="font-bold text-lg">{name}</h3>
                        <p className="text-amber-400 text-sm">Senior Agent</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ───────── TESTIMONIALS ───────── */
const Testimonials = () => (
    <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-amber-500 font-mono text-sm uppercase tracking-widest">Reviews</span><h2 className="text-4xl font-black mt-2">CLIENT STORIES</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Αντώνης Γ.', text: 'Βρήκαν το τέλειο ακίνητο σε χρόνο ρεκόρ. 100% αφοσίωση.' },
                    { name: 'Κατερίνα Σ.', text: 'Η πιο ομαλή αγορά σπιτιού που έχω κάνει ποτέ.' },
                    { name: 'John W.', text: 'Professional, transparent, and incredibly responsive.' }
                ].map((t, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-amber-500 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-6 italic">"{t.text}"</p>
                        <p className="font-bold text-sm">{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ───────── SERVICES ───────── */
const OurServices = () => (
    <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-amber-500 font-mono text-sm uppercase tracking-widest">What We Do</span><h2 className="text-4xl font-black mt-2">OUR SERVICES</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Key, title: 'Buy & Sell', desc: 'Αγοραπωλησίες ακινήτων με πλήρη νομική κάλυψη.' },
                    { icon: Building, title: 'Property Management', desc: 'Διαχείριση ακινήτων, ενοικιάσεις, Airbnb.' },
                    { icon: TrendingUp, title: 'Investment Advisory', desc: 'Επενδυτικός σχεδιασμός και χαρτοφυλάκια ακινήτων.' }
                ].map((s, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all">
                        <div className="mb-6 p-4 bg-amber-500/10 w-fit rounded-2xl text-amber-500"><s.icon size={28} /></div>
                        <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                        <p className="text-gray-500 text-sm">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ───────── CONTACT ───────── */
const Contact = () => (
    <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <span className="text-amber-500 font-mono text-sm uppercase tracking-widest">Contact</span>
                <h2 className="text-4xl font-black mt-2 mb-8">SCHEDULE A VIEWING</h2>
                <div className="space-y-6 text-gray-400">
                    <div className="flex items-center gap-4"><Phone size={20} className="text-amber-500" /> +30 210 000 0000</div>
                    <div className="flex items-center gap-4"><Mail size={20} className="text-amber-500" /> info@gmestates.gr</div>
                    <div className="flex items-center gap-4"><MapPin size={20} className="text-amber-500" /> Βουκουρεστίου 8, Κολωνάκι</div>
                </div>
            </div>
            <div className="space-y-4">
                <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 outline-none transition-colors" placeholder="Full Name" />
                <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 outline-none transition-colors" placeholder="Email" />
                <textarea className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 outline-none transition-colors h-32 resize-none" placeholder="I'm interested in..." />
                <button className="w-full bg-amber-600 text-black py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-amber-500 transition-colors">Request Viewing</button>
            </div>
        </div>
    </section>
);

/* ───────── FOOTER ───────── */
const FooterSection = () => (
    <footer className="bg-black py-12 border-t border-amber-500/20 text-center">
        <h3 className="text-4xl font-black text-neutral-800 tracking-widest mb-4">GM ESTATES</h3>
        <p className="text-gray-700 text-xs">© 2026 GM Estates. All rights reserved.</p>
    </footer>
);

/* ───────── MAIN ───────── */
const RealEstateDemo = () => {
    const { viewMode } = useOutletContext() || {};
    useEffect(() => { window.scrollTo(0, 0); }, []);

    if (viewMode === 'admin') {
        return <AdminMock title="GM Estates" stats={[
            { label: 'Active Listings', value: '64', trend: 8 },
            { label: 'Viewings (Week)', value: '23', trend: 15 },
            { label: 'Offers Pending', value: '7', trend: 5 },
            { label: 'Revenue', value: '€48k', trend: 20 }
        ]} />;
    }

    return (
        <div className="bg-black min-h-screen text-white font-sans">
            <Hero /><About /><Listings /><OurServices /><Agents /><Testimonials /><Contact /><FooterSection />
            <AIChat brandName="GM Estates" />
        </div>
    );
};

export default RealEstateDemo;
