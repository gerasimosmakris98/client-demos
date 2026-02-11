import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Star, ArrowRight, Building2, Key, TrendingUp, Users, CalendarDays, FileText, Handshake, Search, ChevronDown, Bath, BedDouble, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
import Hero from './components/Hero';
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

const translations = {
    en: {
        hero: {
            badge: "Premium Real Estate",
            title: "Dream Homes",
            subtitle: "Exclusively for You",
            desc: "Find your dream home. Luxury properties in the best areas of Athens.",
            searchLoc: "Find by Location...",
            searchType: "Property Type",
            ctaPrimary: "View Listings",
            ctaSecondary: "Contact Agent"
        },
        about: {
            badge: "About Us",
            title: "Trusted",
            subtitle: "Since 2005",
            desc: "GM Estates is one of the leading real estate companies in Attica. We specialize in luxury properties and provide full legal support.",
            stats: { properties: "Properties", years: "Years", success: "Success" }
        },
        listings: {
            badge: "Portfolio",
            title: "FEATURED LISTINGS",
            items: [
                { title: 'Villa Kifisia', price: '€1,200,000', beds: 5, baths: 3, size: '320m²', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop', tag: 'For Sale' },
                { title: 'Penthouse Glyfada', price: '€1,500/mo', beds: 3, baths: 2, size: '180m²', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop', tag: 'For Rent' },
                { title: 'Studio Kolonaki', price: '€350,000', beds: 1, baths: 1, size: '55m²', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', tag: 'For Sale' }
            ]
        },
        services: {
            badge: "Services",
            title: "WHAT WE OFFER",
            items: [
                { icon: Key, title: 'Sales', desc: 'Full property sales management.' },
                { icon: Building2, title: 'Rentals', desc: 'Residential & commercial leasing.' },
                { icon: TrendingUp, title: 'Investment', desc: 'Investment opportunities & portfolio management.' }
            ]
        },
        team: {
            badge: "Team",
            title: "OUR AGENTS",
            list: [
                { name: "Dimitris P.", role: "Senior Agent" },
                { name: "Katerina M.", role: "Luxury Specialist" },
                { name: "Alexandros K.", role: "Investment Advisor" }
            ]
        },
        reviews: {
            badge: "Reviews",
            title: "CLIENT STORIES",
            items: [
                { name: "Nikos A.", text: "Found the perfect house in 2 weeks!" },
                { name: "Maria E.", text: "Extremely professional service." },
                { name: "Alex B.", text: "Best real estate experience in Athens, hands down." }
            ]
        },
        contact: {
            badge: "Contact",
            title: "LET'S TALK",
            name: "Full Name",
            contact: "Phone / Email",
            message: "Your Message",
            cta: "Send Message"
        },
        footer: { rights: "© 2026 GM Estates. All rights reserved." }
    },
    el: {
        hero: {
            badge: "Premium Real Estate",
            title: "Το Σπίτι Των",
            subtitle: "Ονείρων Σας",
            desc: "Βρείτε το σπίτι των ονείρων σας. Πολυτελή ακίνητα στις καλύτερες περιοχές της Αθήνας.",
            searchLoc: "Περιοχή...",
            searchType: "Τύπος Ακινήτου",
            ctaPrimary: "Δείτε Ακίνητα",
            ctaSecondary: "Επικοινωνία"
        },
        about: {
            badge: "Σχετικά",
            title: "Εμπιστοσύνη",
            subtitle: "Από το 2005",
            desc: "Η GM Estates είναι μία από τις κορυφαίες μεσιτικές εταιρείες στην Αττική. Εξειδικευόμαστε σε πολυτελή ακίνητα και παρέχουμε πλήρη νομική υποστήριξη.",
            stats: { properties: "Ακίνητα", years: "Χρόνια", success: "Επιτυχία" }
        },
        listings: {
            badge: "Χαρτοφυλάκιο",
            title: "ΠΡΟΤΕΙΝΟΜΕΝΑ ΑΚΙΝΗΤΑ",
            items: [
                { title: 'Villa Κηφισιά', price: '€1,200,000', beds: 5, baths: 3, size: '320m²', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop', tag: 'Πώληση' },
                { title: 'Penthouse Γλυφάδα', price: '€1,500/μήνα', beds: 3, baths: 2, size: '180m²', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop', tag: 'Ενοικίαση' },
                { title: 'Studio Κολωνάκι', price: '€350,000', beds: 1, baths: 1, size: '55m²', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', tag: 'Πώληση' }
            ]
        },
        services: {
            badge: "Υπηρεσίες",
            title: "ΤΙ ΠΡΟΣΦΕΡΟΥΜΕ",
            items: [
                { icon: Key, title: 'Πωλήσεις', desc: 'Πλήρης διαχείριση πώλησης ακινήτου.' },
                { icon: Building2, title: 'Ενοικιάσεις', desc: 'Ενοικίαση κατοικιών & επαγγελματικών χώρων.' },
                { icon: TrendingUp, title: 'Επενδύσεις', desc: 'Επενδυτικές ευκαιρίες & portfolio management.' }
            ]
        },
        team: {
            badge: "Ομάδα",
            title: "ΟΙ ΣΥΝΕΡΓΑΤΕΣ ΜΑΣ",
            list: [
                { name: "Δημήτρης Π.", role: "Senior Agent" },
                { name: "Κατερίνα Μ.", role: "Luxury Specialist" },
                { name: "Αλέξανδρος Κ.", role: "Investment Advisor" }
            ]
        },
        reviews: {
            badge: "Κριτικές",
            title: "ΙΣΤΟΡΙΕΣ ΠΕΛΑΤΩΝ",
            items: [
                { name: "Νίκος Α.", text: "Βρήκαν το ιδανικό σπίτι μέσα σε 2 εβδομάδες!" },
                { name: "Μαρία Ε.", text: "Εξαιρετικά επαγγελματική εξυπηρέτηση." },
                { name: "Alex B.", text: "Best real estate experience in Athens, hands down." }
            ]
        },
        contact: {
            badge: "Επικοινωνία",
            title: "ΑΣ ΜΙΛΗΣΟΥΜΕ",
            name: "Ονοματεπώνυμο",
            contact: "Τηλέφωνο / Email",
            message: "Το Μήνυμά σας",
            cta: "Αποστολή"
        },
        footer: { rights: "© 2026 GM Estates. Όλα τα δικαιώματα διατηρούνται." }
    },
    es: {
        hero: {
            badge: "Inmobiliaria Premium",
            title: "Casas De En Sueño",
            subtitle: "Solo Para Usted",
            desc: "Encuentre la casa de sus sueños. Propiedades de lujo en las mejores zonas de Atenas.",
            searchLoc: "Zona...",
            searchType: "Tipo de Propiedad",
            ctaPrimary: "Ver Listados",
            ctaSecondary: "Contactar Agente"
        },
        about: {
            badge: "Nosotros",
            title: "Confianza",
            subtitle: "Desde 2005",
            desc: "GM Estates es una de las empresas inmobiliarias líderes en Ática. Nos especializamos en propiedades de lujo y brindamos apoyo legal completo.",
            stats: { properties: "Propiedades", years: "Años", success: "Éxito" }
        },
        listings: {
            badge: "Portafolio",
            title: "PROPIEDADES DESTACADAS",
            items: [
                { title: 'Villa Kifisia', price: '€1,200,000', beds: 5, baths: 3, size: '320m²', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop', tag: 'Venta' },
                { title: 'Penthouse Glyfada', price: '€1,500/mes', beds: 3, baths: 2, size: '180m²', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop', tag: 'Alquiler' },
                { title: 'Studio Kolonaki', price: '€350,000', beds: 1, baths: 1, size: '55m²', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', tag: 'Venta' }
            ]
        },
        services: {
            badge: "Servicios",
            title: "LO QUE OFRECEMOS",
            items: [
                { icon: Key, title: 'Ventas', desc: 'Gestión integral de venta de inmuebles.' },
                { icon: Building2, title: 'Alquileres', desc: 'Arrendamiento residencial y comercial.' },
                { icon: TrendingUp, title: 'Inversión', desc: 'Oportunidades de inversión y gestión de carteras.' }
            ]
        },
        team: {
            badge: "Equipo",
            title: "NUESTROS AGENTES",
            list: [
                { name: "Dimitris P.", role: "Agente Senior" },
                { name: "Katerina M.", role: "Especialista Lujo" },
                { name: "Alexandros K.", role: "Asesor Inversión" }
            ]
        },
        reviews: {
            badge: "Opiniones",
            title: "HISTORIAS DE CLIENTES",
            items: [
                { name: "Nikos A.", text: "¡Encontraron la casa perfecta en 2 semanas!" },
                { name: "Maria E.", text: "Servicio extremadamente profesional." },
                { name: "Alex B.", text: "La mejor experiencia inmobiliaria en Atenas, sin duda." }
            ]
        },
        contact: {
            badge: "Contacto",
            title: "HABLEMOS",
            name: "Nombre Completo",
            contact: "Teléfono / Email",
            message: "Su Mensaje",
            cta: "Enviar Mensaje"
        },
        footer: { rights: "© 2026 GM Estates. Todos los derechos reservados." }
    }
}


const AboutSection = ({ t }) => (
    <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
                <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.about.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4 md:mb-6">{t.about.title} <span className="text-amber-400">{t.about.subtitle}</span></h2>
                <p className="text-gray-400 leading-relaxed mb-5 md:mb-8 text-sm md:text-base">{t.about.desc}</p>
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                    {[{ num: '500+', label: t.about.stats.properties }, { num: '18', label: t.about.stats.years }, { num: '95%', label: t.about.stats.success }].map((s, i) => (
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

const Listings = ({ t }) => (
    <section className="py-16 md:py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.listings.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">{t.listings.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {t.listings.items.map((p, i) => (
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

const OurServices = ({ t }) => (
    <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.services.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">{t.services.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {t.services.items.map((s, i) => (
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

const Agents = ({ t }) => (
    <section className="py-16 md:py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.team.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">{t.team.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {t.team.list.map((a, i) => (
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

const Testimonials = ({ t }) => (
    <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.reviews.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">{t.reviews.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {t.reviews.items.map((item, i) => (
                    <div key={i} className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-amber-400 mb-3 md:mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-4 md:mb-6 italic text-sm md:text-base">"{item.text}"</p>
                        <p className="font-bold text-sm">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = ({ t }) => (
    <section className="py-16 md:py-24 bg-neutral-950 text-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <span className="text-amber-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.contact.badge}</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-8 md:mb-12">{t.contact.title}</h2>
            <div className="space-y-3 md:space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 outline-none text-sm" placeholder={t.contact.name} />
                    <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 outline-none text-sm" placeholder={t.contact.contact} />
                </div>
                <textarea className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 outline-none h-28 md:h-32 text-sm" placeholder={t.contact.message} />
                <button className="w-full bg-amber-500 text-black py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors text-sm">{t.contact.cta}</button>
            </div>
        </div>
    </section>
);

const FooterSection = ({ t }) => (
    <footer className="bg-black py-10 md:py-12 border-t border-amber-500/20 text-center px-4">
        <h3 className="text-3xl md:text-4xl font-black text-neutral-800 mb-3 md:mb-4">GM ESTATES</h3>
        <p className="text-gray-700 text-[10px] md:text-xs">{t.footer.rights}</p>
    </footer>
);

const RealEstateDemo = () => {
    const { viewMode, language } = useOutletContext() || { language: 'en' };
    const t = translations[language] || translations.en;

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-black min-h-screen text-white font-sans">
            <Hero t={t} /><AboutSection t={t} /><Listings t={t} /><OurServices t={t} /><Agents t={t} /><Testimonials t={t} /><Contact t={t} /><FooterSection t={t} />
            <AIChat
                brandName="GM Estates"
                botName="Estate Agent AI"
                accentColor="amber"
                botIcon={Home}
                welcomeMessage="Welcome to luxury living! 🏠 I'm your Estate Agent AI. Looking for a villa in Kifisia or a penthouse in Glyfada? I'm here to guide you."
            />
        </div>
    );
};

export default RealEstateDemo;
