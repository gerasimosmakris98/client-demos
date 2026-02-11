import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Shield, Star, Award, Zap, CheckCircle2, ArrowRight, Facebook, Instagram, Linkedin, Wrench, FileText, Truck, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../components/common/SEO';
import AIChat from '../../components/common/AIChat';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

import { useLanguage } from '@/context/LanguageContext';

const translations = {
    en: {
        hero: {
            badge: "24/7 Emergency Service",
            desc: "Certified electricians with 20+ years experience. Residential & commercial installations.",
            cta_call: "Call Now",
            cta_services: "Services"
        },
        about: {
            label: "Who We Are",
            title_prefix: "20+ Years",
            title_highlight: "Experience",
            desc: "GM Electric provides reliable electrical services in Attica and islands. We specialize in residential, commercial and industrial installations with full certification.",
            stats: ['Projects', 'Satisfaction', 'Support', 'Technicians']
        },
        services: {
            label: "Services",
            title: "OUR SERVICES",
            items: [
                { title: 'Electrical Installations', desc: 'New installations, panel upgrades, wiring.' },
                { title: 'Certifications & Checks', desc: 'Electrical safety checks, official certification.' },
                { title: 'Repairs & Maintenance', desc: 'Fault finding, replacements, preventive maintenance.' },
                { title: 'Photovoltaics', desc: 'Installation & connection of PV systems.' },
                { title: 'Smart Home', desc: 'Home automation, LED lighting, intercoms.' },
                { title: 'Industrial', desc: 'Industrial installations & automation panels.' }
            ]
        },
        team: {
            label: "The Team",
            title: "OUR TEAM",
            role: "Certified Electrician"
        },
        gallery: {
            label: "Portfolio",
            title: "OUR WORK"
        },
        testimonials: {
            label: "Reviews",
            title: "CLIENT SAY",
            reviews: [
                { text: "Excellent work! They came the same day and solved the problem immediately." },
                { text: "Very professional, clean work and reasonable prices." },
                { text: "I trust them completely. We have been cooperating for 5 years." }
            ]
        },
        pricing: {
            label: "Pricing",
            title: "RATES",
            unit_visit: "/visit",
            unit_project: "/project",
            popular: "POPULAR",
            cta: "SELECT",
            items: [
                { name: 'BASIC', features: ['Diagnostic Check', 'Minor Repairs', 'Safety Check'] },
                { name: 'STANDARD', features: ['Full Installation', 'Panel Change', 'Certification', 'Warranty'] },
                { name: 'PREMIUM', features: ['Smart Home Setup', 'Wiring', 'Photovoltaics', '24/7 Support'] }
            ]
        },
        contact: {
            label: "Contact",
            title: "CONTACT US",
            address: "Kifisias Ave 120, Athens",
            hours: "Mon-Sat: 07:00 - 22:00",
            form: { name: "Name", phone: "Phone", message: "Fault description...", submit: "SEND" }
        },
        footer: {
            rights: "© 2026 GM Electric. All rights reserved."
        }
    },
    el: {
        hero: {
            badge: "24/7 Εξυπηρέτηση",
            desc: "Πιστοποιημένοι ηλεκτρολόγοι με εμπειρία 20+ ετών. Οικιακές & εμπορικές εγκαταστάσεις.",
            cta_call: "Κλήση Τώρα",
            cta_services: "Υπηρεσίες"
        },
        about: {
            label: "Ποιοι Είμαστε",
            title_prefix: "20+ Χρόνια",
            title_highlight: "Εμπειρίας",
            desc: "Η GM Electric παρέχει αξιόπιστες ηλεκτρολογικές υπηρεσίες σε Αττική και νησιά. Εξειδικευόμαστε σε οικιακές, εμπορικές και βιομηχανικές εγκαταστάσεις με πλήρη πιστοποίηση.",
            stats: ['Έργα', 'Ικανοποίηση', 'Υποστήριξη', 'Τεχνικοί']
        },
        services: {
            label: "Υπηρεσίες",
            title: "ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ",
            items: [
                { title: 'Ηλεκτρολογικές Εγκαταστάσεις', desc: 'Νέες εγκαταστάσεις, αναβαθμίσεις πίνακα, καλωδιώσεις.' },
                { title: 'Πιστοποιήσεις & Έλεγχοι', desc: 'Ηλεκτρολογικός έλεγχος, πιστοποίηση ΔΕΗ.' },
                { title: 'Επισκευές & Συντήρηση', desc: 'Βλάβες, αντικαταστάσεις, προληπτική συντήρηση.' },
                { title: 'Φωτοβολταϊκά', desc: 'Εγκατάσταση & σύνδεση φωτοβολταϊκών συστημάτων.' },
                { title: 'Smart Home', desc: 'Αυτοματισμοί σπιτιού, φωτισμός LED, θυροτηλεόραση.' },
                { title: 'Βιομηχανικά', desc: 'Βιομηχανικές εγκαταστάσεις & πίνακες αυτοματισμού.' }
            ]
        },
        team: {
            label: "Η Ομάδα",
            title: "Η ΟΜΑΔΑ ΜΑΣ",
            role: "Αδειούχος Ηλεκτρολόγος"
        },
        gallery: {
            label: "Portfolio",
            title: "ΤΑ ΕΡΓΑ ΜΑΣ"
        },
        testimonials: {
            label: "Reviews",
            title: "ΤΙ ΛΕΝΕ ΟΙ ΠΕΛΑΤΕΣ",
            reviews: [
                { text: "Εξαιρετική δουλειά! Ήρθαν ίδια ημέρα και έλυσαν το πρόβλημα αμέσως." },
                { text: "Πολύ επαγγελματίες, καθαρή δουλειά και λογικές τιμές." },
                { text: "Τους εμπιστεύομαι πλήρως. Συνεργαζόμαστε εδώ και 5 χρόνια." }
            ]
        },
        pricing: {
            label: "Τιμοκατάλογος",
            title: "ΧΡΕΩΣΕΙΣ",
            unit_visit: "/επίσκεψη",
            unit_project: "/έργο",
            popular: "ΔΗΜΟΦΙΛΕΣ",
            cta: "ΕΠΙΛΟΓΗ",
            items: [
                { name: 'BASIC', features: ['Διαγνωστικός Έλεγχος', 'Μικροεπισκευές', 'Έλεγχος Ασφαλείας'] },
                { name: 'STANDARD', features: ['Πλήρης Εγκατάσταση', 'Αλλαγή Πίνακα', 'Πιστοποίηση', 'Εγγύηση'] },
                { name: 'PREMIUM', features: ['Smart Home Setup', 'Καλωδίωση', 'Φωτοβολταϊκά', '24/7 Υποστήριξη'] }
            ]
        },
        contact: {
            label: "Επικοινωνία",
            title: "ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ",
            address: "Λ. Κηφισίας 120, Αθήνα",
            hours: "Δευ-Σαβ: 07:00 - 22:00",
            form: { name: "Ονοματεπώνυμο", phone: "Τηλέφωνο", message: "Περιγραφή βλάβης...", submit: "ΑΠΟΣΤΟΛΗ" }
        },
        footer: {
            rights: "© 2026 GM Electric. Με επιφύλαξη παντός δικαιώματος."
        }
    },
    es: {
        hero: {
            badge: "Servicio de Emergencia 24/7",
            desc: "Electricistas certificados con más de 20 años de experiencia. Instalaciones residenciales y comerciales.",
            cta_call: "Llamar Ahora",
            cta_services: "Servicios"
        },
        about: {
            label: "Quiénes Somos",
            title_prefix: "20+ Años",
            title_highlight: "Experiencia",
            desc: "GM Electric ofrece servicios eléctricos confiables en Ática e islas. Nos especializamos en instalaciones residenciales, comerciales e industriales con certificación completa.",
            stats: ['Proyectos', 'Satisfacción', 'Soporte', 'Técnicos']
        },
        services: {
            label: "Servicios",
            title: "NUESTROS SERVICIOS",
            items: [
                { title: 'Instalaciones Eléctricas', desc: 'Nuevas instalaciones, actualizaciones de paneles, cableado.' },
                { title: 'Certificaciones y Controles', desc: 'Controles de seguridad eléctrica, certificación oficial.' },
                { title: 'Reparaciones y Mantenimiento', desc: 'Detección de fallos, reemplazos, mantenimiento preventivo.' },
                { title: 'Fotovoltaica', desc: 'Instalación y conexión de sistemas fotovoltaicos.' },
                { title: 'Casa Inteligente', desc: 'Domótica, iluminación LED, interfonos.' },
                { title: 'Industrial', desc: 'Instalaciones industriales y paneles de automatización.' }
            ]
        },
        team: {
            label: "El Equipo",
            title: "NUESTRO EQUIPO",
            role: "Electricista Certificado"
        },
        gallery: {
            label: "Portafolio",
            title: "NUESTROS TRABAJOS"
        },
        testimonials: {
            label: "Reseñas",
            title: "LO QUE DICEN LOS CLIENTES",
            reviews: [
                { text: "¡Excelente trabajo! Vinieron el mismo día y resolvieron el problema de inmediato." },
                { text: "Muy profesionales, trabajo limpio y precios razonables." },
                { text: "Confío en ellos completamente. Llevamos cooperando 5 años." }
            ]
        },
        pricing: {
            label: "Precios",
            title: "TARIFAS",
            unit_visit: "/visita",
            unit_project: "/proyecto",
            popular: "POPULAR",
            cta: "SELECCIONAR",
            items: [
                { name: 'BÁSICO', features: ['Control de Diagnóstico', 'Reparaciones Menores', 'Control de Seguridad'] },
                { name: 'ESTÁNDAR', features: ['Instalación Completa', 'Cambio de Panel', 'Certificación', 'Garantía'] },
                { name: 'PREMIUM', features: ['Configuración Smart Home', 'Cableado', 'Fotovoltaica', 'Soporte 24/7'] }
            ]
        },
        contact: {
            label: "Contacto",
            title: "CONTÁCTENOS",
            address: "Av. Kifisias 120, Atenas",
            hours: "Lun-Sab: 07:00 - 22:00",
            form: { name: "Nombre Completo", phone: "Teléfono", message: "Descripción del fallo...", submit: "ENVIAR" }
        },
        footer: {
            rights: "© 2026 GM Electric. Todos los derechos reservados."
        }
    }
};

const useElectricianT = () => {
    const { language } = useLanguage();
    return translations[language] || translations['en'];
};

/* ───────── HERO ───────── */
const Hero = () => {
    const t = useElectricianT();
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(251,146,60,0.15),transparent_50%)]" />
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500/30 rounded-full bg-orange-500/10 text-orange-400 font-mono text-[10px] md:text-xs tracking-widest uppercase mb-6 md:mb-8">
                        <motion.div animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><Zap size={14} /></motion.div> {t.hero.badge}
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 md:mb-6">
                        GM <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">ELECTRIC</span>
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 px-2">{t.hero.desc}</p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                        <button className="bg-orange-500 text-black px-8 md:px-10 py-3.5 md:py-4 rounded-full font-black uppercase tracking-wider hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/30 flex items-center gap-2 justify-center text-sm"><Phone size={18} /> {t.hero.cta_call}</button>
                        <button className="border border-white/20 px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-sm">{t.hero.cta_services}</button>
                    </div>
                </motion.div>
            </div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 text-white/30"><ChevronDown size={28} /></motion.div>
        </section>
    );
};

/* ───────── ABOUT ───────── */
const About = () => {
    const t = useElectricianT();
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div>
                    <span className="text-orange-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.about.label}</span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4 md:mb-6">{t.about.title_prefix} <span className="text-orange-400">{t.about.title_highlight}</span></h2>
                    <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">{t.about.desc}</p>
                    <div className="grid grid-cols-2 gap-3 md:gap-6">
                        {[
                            { num: '2,500+', label: t.about.stats[0] },
                            { num: '99%', label: t.about.stats[1] },
                            { num: '24/7', label: t.about.stats[2] },
                            { num: '15+', label: t.about.stats[3] }
                        ].map((s, i) => (
                            <div key={i} className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10"><div className="text-lg md:text-2xl font-black text-orange-400">{s.num}</div><div className="text-gray-500 text-[10px] md:text-sm">{s.label}</div></div>
                        ))}
                    </div>
                </div>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden h-[260px] md:h-[400px]">
                    <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2669&auto=format&fit=crop" className="w-full h-full object-cover" alt="Electrician at work" />
                </div>
            </div>
        </section>
    );
};

/* ───────── SERVICES ───────── */
const Services = () => {
    const t = useElectricianT();
    return (
        <section className="py-16 md:py-24 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-orange-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.services.label}</span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2">{t.services.title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {[
                        { icon: Zap, title: t.services.items[0].title, desc: t.services.items[0].desc },
                        { icon: Shield, title: t.services.items[1].title, desc: t.services.items[1].desc },
                        { icon: Wrench, title: t.services.items[2].title, desc: t.services.items[2].desc },
                        { icon: Zap, title: t.services.items[3].title, desc: t.services.items[3].desc },
                        { icon: Shield, title: t.services.items[4].title, desc: t.services.items[4].desc },
                        { icon: Wrench, title: t.services.items[5].title, desc: t.services.items[5].desc }
                    ].map((s, i) => (
                        <div key={i} className="group p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all hover:-translate-y-1">
                            <div className="mb-4 md:mb-6 p-3 md:p-4 bg-orange-500/10 w-fit rounded-xl md:rounded-2xl text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition-colors"><s.icon size={24} /></div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{s.title}</h3>
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ───────── TEAM ───────── */
const Team = () => {
    const t = useElectricianT();
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-orange-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.team.label}</span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2">{t.team.title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { name: 'Νίκος Κ.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop' },
                        { name: 'Γιώργος Μ.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop' },
                        { name: 'Δημήτρης Π.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop' },
                        { name: 'Αλέξης Τ.', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop' }
                    ].map((member, i) => (
                        <div key={i} className="group relative h-[240px] md:h-[300px] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-800">
                            <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-110 duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                                <h3 className="text-base md:text-lg font-bold">{member.name}</h3>
                                <p className="text-orange-400 text-xs md:text-sm">{t.team.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ───────── GALLERY ───────── */
const Gallery = () => {
    const t = useElectricianT();
    return (
        <section className="py-16 md:py-24 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-orange-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.gallery.label}</span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2">{t.gallery.title}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                    {[
                        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?q=80&w=800&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1565608444338-39712a2aa774?q=80&w=800&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=800&auto=format&fit=crop'
                    ].map((img, i) => (
                        <div key={i} className="group aspect-square rounded-xl md:rounded-2xl bg-slate-800 border border-white/5 hover:border-orange-500/30 transition-colors overflow-hidden relative">
                            <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-orange-500 text-black p-2 md:p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <Zap size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ───────── TESTIMONIALS ───────── */
const Testimonials = () => {
    const t = useElectricianT();
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-orange-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.testimonials.label}</span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2">{t.testimonials.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {[
                        { name: 'Μαρία Κ.', text: t.testimonials.reviews[0].text },
                        { name: 'Πέτρος Λ.', text: t.testimonials.reviews[1].text },
                        { name: 'Ελένη Δ.', text: t.testimonials.reviews[2].text }
                    ].map((tn, i) => (
                        <div key={i} className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10">
                            <div className="flex gap-1 text-orange-400 mb-3 md:mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}</div>
                            <p className="text-gray-300 mb-4 md:mb-6 italic text-sm md:text-base">"{tn.text}"</p>
                            <p className="font-bold text-sm">{tn.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ───────── PRICING ───────── */
const Pricing = () => {
    const t = useElectricianT();
    return (
        <section className="py-16 md:py-24 bg-slate-950 text-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-orange-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.pricing.label}</span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2">{t.pricing.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {[
                        { name: t.pricing.items[0].name, price: '80', unit: t.pricing.unit_visit, features: t.pricing.items[0].features },
                        { name: t.pricing.items[1].name, price: '150', unit: t.pricing.unit_project, popular: true, features: t.pricing.items[1].features },
                        { name: t.pricing.items[2].name, price: '300', unit: t.pricing.unit_project, features: t.pricing.items[2].features }
                    ].map((p, i) => (
                        <div key={i} className={`p-5 md:p-8 rounded-2xl md:rounded-3xl border flex flex-col ${p.popular ? 'bg-orange-500/10 border-orange-500' : 'bg-white/5 border-white/10'}`}>
                            {p.popular && <div className="text-center text-[10px] md:text-xs font-bold text-orange-400 uppercase tracking-widest mb-3 md:mb-4">{t.pricing.popular}</div>}
                            <h3 className="text-lg md:text-xl font-black mb-2">{p.name}</h3>
                            <div className="mb-6 md:mb-8"><span className="text-3xl md:text-4xl font-black">€{p.price}</span><span className="text-gray-400 text-sm">{p.unit}</span></div>
                            <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-1">
                                {p.features.map((f, j) => <li key={j} className="flex items-center gap-2.5 md:gap-3 text-xs md:text-sm text-gray-300"><CheckCircle2 size={14} className="text-orange-400 flex-shrink-0" />{f}</li>)}
                            </ul>
                            <button className={`w-full py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-wider transition-all text-sm ${p.popular ? 'bg-orange-500 text-black hover:bg-orange-400' : 'bg-white/10 hover:bg-white/20'}`}>{t.pricing.cta}</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ───────── CONTACT ───────── */
const Contact = () => {
    const t = useElectricianT();
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div>
                    <span className="text-orange-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.contact.label}</span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6 md:mb-8">{t.contact.title}</h2>
                    <div className="space-y-4 md:space-y-6 text-gray-400 text-sm md:text-base">
                        <div className="flex items-center gap-3 md:gap-4"><Phone size={18} className="text-orange-400 flex-shrink-0" /> +30 210 000 0000</div>
                        <div className="flex items-center gap-3 md:gap-4"><Mail size={18} className="text-orange-400 flex-shrink-0" /> info@gmelectric.gr</div>
                        <div className="flex items-center gap-3 md:gap-4"><MapPin size={18} className="text-orange-400 flex-shrink-0" /> {t.contact.address}</div>
                        <div className="flex items-center gap-3 md:gap-4"><Clock size={18} className="text-orange-400 flex-shrink-0" /> {t.contact.hours}</div>
                    </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                    <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 outline-none transition-colors text-sm" placeholder={t.contact.form.name} />
                    <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 outline-none transition-colors text-sm" placeholder={t.contact.form.phone} />
                    <textarea className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 outline-none transition-colors h-28 md:h-32 resize-none text-sm" placeholder={t.contact.form.message} />
                    <button className="w-full bg-orange-500 text-black py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors text-sm">{t.contact.form.submit}</button>
                </div>
            </div>
        </section>
    );
};

/* ───────── FOOTER ───────── */
const Footer = () => {
    const t = useElectricianT();
    return (
        <footer className="bg-black py-10 md:py-12 border-t border-white/10 text-center px-4">
            <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-3 md:mb-4">GM ELECTRIC</h3>
            <div className="flex justify-center gap-6 md:gap-8 text-gray-600 text-xs md:text-sm mb-4 md:mb-6">
                <a href="#" className="hover:text-orange-400 transition-colors">Facebook</a>
                <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a>
            </div>
            <p className="text-gray-700 text-[10px] md:text-xs">{t.footer.rights}</p>
        </footer>
    );
};

/* ───────── MAIN ───────── */
const ElectricianDemo = () => {
    const { viewMode } = useOutletContext() || {};
    useEffect(() => { window.scrollTo(0, 0); }, []);

    // Admin view removed - consolidated to Universal Admin demo

    return (
        <div className="bg-slate-950 min-h-screen text-white font-sans">
            <Hero /><About /><Services /><Team /><Gallery /><Testimonials /><Pricing /><Contact /><Footer />
            <AIChat brandName="GM Electric" />
        </div>
    );
};

export default ElectricianDemo;
