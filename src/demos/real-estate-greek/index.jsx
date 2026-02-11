import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Star, ArrowRight, Building2, Key, TrendingUp, Users, CalendarDays, FileText, Handshake, Search, ChevronDown, Bath, BedDouble, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const reTabs = [
    {
        id: 'listings', label: 'Listings', icon: Building2, columns: ['Property', 'Status', 'Price', 'Type'],
        rows: [['Kifisia Villa', 'Active', '€1,200,000', 'Sale'], ['Glyfada Apt', 'Active', '€1,500/mo', 'Rent'], ['Kolonaki Studio', 'Pending', '€350,000', 'Sale'], ['Maroussi Penthouse', 'Active', '€780,000', 'Sale'], ['Vouliagmeni House', 'Sold', '€2,100,000', 'Sale']]
    },
    {
        id: 'leads', label: 'Leads', icon: Users, columns: ['Contact', 'Status', 'Interest', 'Budget'],
        rows: [['Maria K.', 'Hot', 'Villa Kifisia', '€1.2M'], ['John D.', 'Warm', 'Glyfada area', '€1,800/mo'], ['Elena P.', 'New', 'Central Athens', '€400K'], ['George S.', 'Hot', 'Seaside', '€2M']]
    },
    {
        id: 'showings', label: 'Showings', icon: CalendarDays, columns: ['Property', 'Status', 'Client', 'Date'],
        rows: [['Kifisia Villa', 'Confirmed', 'Maria K.', 'Feb 12'], ['Glyfada Apt', 'Confirmed', 'John D.', 'Feb 13'], ['Kolonaki Studio', 'Pending', 'Elena P.', 'Feb 14'], ['Maroussi Penthouse', 'Confirmed', 'George S.', 'Feb 15']]
    },
    {
        id: 'contracts', label: 'Contracts', icon: FileText, columns: ['Property', 'Status', 'Buyer', 'Value'],
        rows: [['Vouliagmeni House', 'Completed', 'Nikos A.', '€2.1M'], ['Kifisia Villa', 'In Progress', 'Maria K.', '€1.2M'], ['Palaio Faliro', 'Completed', 'Anna P.', '€560K']]
    },
];

/* ───────── HERO with search pills ───────── */
const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-amber-500/30 rounded-full bg-amber-500/10 text-amber-400 font-mono text-[10px] md:text-xs tracking-widest uppercase mb-6 md:mb-8">
                    <Home size={14} /> Premium Real Estate
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 md:mb-6">
                    GM <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">ESTATES</span>
                </h1>
                <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-6 md:mb-8 px-2">
                    Βρείτε το σπίτι των ονείρων σας. Πολυτελή ακίνητα στις καλύτερες περιοχές της Αθήνας.
                </p>

                {/* Property filter pills */}
                <div className="flex flex-wrap gap-2 justify-center mb-6 md:mb-10 px-4">
                    {['All', 'Villa', 'Apartment', 'Penthouse', 'Commercial'].map((p, i) => (
                        <button key={i} className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${i === 0 ? 'bg-amber-500 text-black' : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'}`}>
                            {p}
                        </button>
                    ))}
                </div>

                {/* Search bar — stacks vertically on mobile */}
                <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-full p-3 md:p-2 flex flex-col md:flex-row gap-2 md:gap-0">
                    <div className="flex items-center gap-2 flex-1 px-3 md:px-4 py-2">
                        <MapPin size={16} className="text-amber-400 flex-shrink-0" />
                        <input className="bg-transparent outline-none flex-1 text-sm placeholder-gray-500 min-w-0" placeholder="Περιοχή..." />
                    </div>
                    <div className="hidden md:block w-px bg-white/10" />
                    <div className="flex items-center gap-2 flex-1 px-3 md:px-4 py-2">
                        <Building2 size={16} className="text-amber-400 flex-shrink-0" />
                        <select className="bg-transparent outline-none flex-1 text-sm text-gray-400 appearance-none">
                            <option>Type</option><option>Villa</option><option>Apartment</option>
                        </select>
                    </div>
                    <button className="bg-amber-500 text-black px-6 py-2.5 md:py-3 rounded-xl md:rounded-full font-bold flex items-center justify-center gap-2 text-sm hover:bg-amber-400 transition-colors">
                        <Search size={16} /> Search
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
);

const AboutSection = () => (
    <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
                <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">About Us</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4 md:mb-6">Trusted <span className="text-amber-400">Since 2005</span></h2>
                <p className="text-gray-400 leading-relaxed mb-5 md:mb-8 text-sm md:text-base">Η GM Estates είναι μία από τις κορυφαίες μεσιτικές εταιρείες στην Αττική. Εξειδικευόμαστε σε πολυτελή ακίνητα και παρέχουμε πλήρη νομική υποστήριξη.</p>
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                    {[{ num: '500+', label: 'Properties' }, { num: '18', label: 'Years' }, { num: '95%', label: 'Success' }].map((s, i) => (
                        <div key={i} className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                            <div className="text-lg md:text-xl font-black text-amber-400">{s.num}</div>
                            <div className="text-gray-500 text-[10px] md:text-xs">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden h-[260px] md:h-[400px]">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop" className="w-full h-full object-cover" alt="Real estate" />
            </div>
        </div>
    </section>
);

/* ───────── LISTINGS — staggered layout on desktop ───────── */
const Listings = () => (
    <section className="py-16 md:py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">FEATURED LISTINGS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {[
                    { title: 'Villa Κηφισιά', price: '€1,200,000', beds: 5, baths: 3, size: '320m²', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop', tag: 'For Sale' },
                    { title: 'Penthouse Γλυφάδα', price: '€1,500/μήνα', beds: 3, baths: 2, size: '180m²', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop', tag: 'For Rent' },
                    { title: 'Studio Κολωνάκι', price: '€350,000', beds: 1, baths: 1, size: '55m²', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', tag: 'For Sale' },
                ].map((p, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                        className={`group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all ${i === 1 ? 'md:translate-y-6' : ''}`}>
                        <div className="h-48 md:h-56 relative overflow-hidden">
                            <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">{p.tag}</div>
                        </div>
                        <div className="p-4 md:p-6">
                            <h3 className="text-base md:text-lg font-bold mb-2">{p.title}</h3>
                            <p className="text-amber-400 font-black text-lg md:text-xl mb-3">{p.price}</p>
                            <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
                                <span className="flex items-center gap-1"><BedDouble size={14} /> {p.beds}</span>
                                <span className="flex items-center gap-1"><Bath size={14} /> {p.baths}</span>
                                <span className="flex items-center gap-1"><Maximize size={14} /> {p.size}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const OurServices = () => (
    <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">Services</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">WHAT WE OFFER</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {[
                    { icon: Key, title: 'Sales', desc: 'Πλήρης διαχείριση πώλησης ακινήτου.' },
                    { icon: Building2, title: 'Rentals', desc: 'Ενοικίαση κατοικιών & επαγγελματικών χώρων.' },
                    { icon: TrendingUp, title: 'Investment', desc: 'Επενδυτικές ευκαιρίες & portfolio management.' }
                ].map((s, i) => (
                    <div key={i} className="group p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all hover:-translate-y-1">
                        <div className="mb-4 md:mb-6 p-3 md:p-4 bg-amber-500/10 w-fit rounded-xl md:rounded-2xl text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors">
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

const Agents = () => (
    <section className="py-16 md:py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">Team</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">OUR AGENTS</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {[
                    { name: 'Δημήτρης Π.', role: 'Senior Agent' },
                    { name: 'Κατερίνα Μ.', role: 'Luxury Specialist' },
                    { name: 'Αλέξανδρος Κ.', role: 'Investment Advisor' }
                ].map((a, i) => (
                    <div key={i} className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-500/20 mx-auto mb-4 flex items-center justify-center">
                            <Users size={28} className="text-amber-400 md:w-8 md:h-8" />
                        </div>
                        <h3 className="font-bold text-sm md:text-base">{a.name}</h3>
                        <p className="text-amber-400 text-xs md:text-sm">{a.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Testimonials = () => (
    <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">Reviews</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">CLIENT STORIES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {[
                    { name: 'Νίκος Α.', text: 'Βρήκαν το ιδανικό σπίτι μέσα σε 2 εβδομάδες!' },
                    { name: 'Μαρία Ε.', text: 'Εξαιρετικά επαγγελματική εξυπηρέτηση.' },
                    { name: 'Alex B.', text: 'Best real estate experience in Athens, hands down.' }
                ].map((t, i) => (
                    <div key={i} className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-amber-400 mb-3 md:mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-4 md:mb-6 italic text-sm md:text-base">"{t.text}"</p>
                        <p className="font-bold text-sm">{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section className="py-16 md:py-24 bg-neutral-950 text-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">Contact</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-8 md:mb-12">LET'S TALK</h2>
            <div className="space-y-3 md:space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 outline-none text-sm" placeholder="Full Name" />
                    <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 outline-none text-sm" placeholder="Phone / Email" />
                </div>
                <textarea className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 outline-none h-28 md:h-32 text-sm" placeholder="Your Message" />
                <button className="w-full bg-amber-500 text-black py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors text-sm">Send Message</button>
            </div>
        </div>
    </section>
);

const FooterSection = () => (
    <footer className="bg-black py-10 md:py-12 border-t border-amber-500/20 text-center px-4">
        <h3 className="text-3xl md:text-4xl font-black text-neutral-800 mb-3 md:mb-4">GM ESTATES</h3>
        <p className="text-gray-700 text-[10px] md:text-xs">© 2026 GM Estates. All rights reserved.</p>
    </footer>
);

const RealEstateDemo = () => {
    const { viewMode } = useOutletContext() || {};
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-black min-h-screen text-white font-sans">
            <Hero /><AboutSection /><Listings /><OurServices /><Agents /><Testimonials /><Contact /><FooterSection />
            <AIChat brandName="GM Estates" />
        </div>
    );
};

export default RealEstateDemo;
