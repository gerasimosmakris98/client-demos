import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Calculator, FileText, TrendingUp, Users, Phone, Mail, MapPin, Clock, Star, CheckCircle, BarChart3, PieChart, Shield, Award, Receipt, Landmark, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';

const translations = {
    el: {
        hero: {
            badge: "Πιστοποιημένοι Λογιστές",
            title: "GM",
            subtitle: "ACCOUNTING",
            desc: "Λογιστικές & φοροτεχνικές υπηρεσίες για επιχειρήσεις και ιδιώτες. Αξιοπιστία & εμπειρία.",
            ctaPrimary: "Δωρεάν Συμβουλή",
            ctaSecondary: "Υπηρεσίες"
        },
        about: {
            badge: "Σχετικά",
            title: "Εμπιστοσύνη Από Το",
            year: "2008",
            desc: "Η GM Accounting εξειδικεύεται σε λογιστική παρακολούθηση, φοροτεχνικό σχεδιασμό και σύσταση εταιρειών. 500+ ενεργοί πελάτες, πλήρης ψηφιακή υποδομή.",
            stats: [
                { num: '500+', label: 'Πελάτες' },
                { num: '15+', label: 'Έτη' },
                { num: '€50M+', label: 'Διαχείριση' },
                { num: '100%', label: 'Ακρίβεια' }
            ]
        },
        services: {
            badge: "Υπηρεσίες",
            title: "ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ",
            items: [
                { icon: FileText, title: 'Φορολογικές Δηλώσεις', desc: 'Ε1, Ε2, Ε3, ΦΠΑ, εκκαθαριστικά.' },
                { icon: BarChart3, title: 'Λογιστική Παρακολούθηση', desc: 'Απλογραφικά & διπλογραφικά βιβλία, myDATA.' },
                { icon: Users, title: 'Μισθοδοσία', desc: 'Εργατικά, ΕΡΓΑΝΗ, ατομικές συμβάσεις.' },
                { icon: Shield, title: 'Σύσταση Εταιρείας', desc: 'ΑΕ, ΕΠΕ, ΙΚΕ, ατομική - "one stop shop".' },
                { icon: TrendingUp, title: 'Φοροτεχνικός Σχεδιασμός', desc: 'Βελτιστοποίηση φορολογικών υποχρεώσεων.' },
                { icon: PieChart, title: 'Ελεγκτική', desc: 'Εσωτερικός έλεγχος, due diligence.' }
            ]
        },
        team: {
            badge: "Η Ομάδα",
            title: "ΟΙ ΛΟΓΙΣΤΕΣ ΜΑΣ",
            members: [
                { name: 'Κατερίνα Μ.', role: 'Senior Accountant' },
                { name: 'Θανάσης Κ.', role: 'Tax Advisor' },
                { name: 'Μαρίνα Π.', role: 'Payroll Specialist' },
                { name: 'Δημήτρης Ν.', role: 'Auditor' }
            ]
        },
        testimonials: {
            badge: "Κριτικές",
            title: "ΣΧΟΛΙΑ ΠΕΛΑΤΩΝ",
            items: [
                { name: 'Γιάννης Α.', text: 'Εξαιρετική εξυπηρέτηση. Μου εξοικονόμησαν €5,000 σε φόρους.' },
                { name: 'Ελένη Σ.', text: 'Πολύ οργανωμένοι, δεν χάνω ποτέ deadline πλέον.' },
                { name: 'Startup XYZ', text: 'Μας βοήθησαν στη σύσταση ΙΚΕ μέσα σε 48 ώρες.' }
            ]
        },
        pricing: {
            badge: "Πακέτα",
            title: "ΤΙΜΟΚΑΤΑΛΟΓΟΣ",
            monthly: "/ μήνα",
            popular: "Δημοφιλές",
            select: "Επιλογή",
            items: [
                { name: 'STARTER', price: '99', features: ['Φορολογική Δήλωση', 'Ε1 + Ε2', 'Email Support'] },
                { name: 'BUSINESS', price: '249', popular: true, features: ['Απλογραφικά Βιβλία', 'ΦΠΑ + myDATA', 'Μισθοδοσία (2 εργ.)', 'Monthly Reporting'] },
                { name: 'ENTERPRISE', price: '499', features: ['Διπλογραφικά Βιβλία', 'Full Payroll', 'Tax Planning', 'Dedicated Advisor'] }
            ]
        },
        contact: {
            badge: "Επικοινωνία",
            title: "ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ",
            info: {
                address: "Σταδίου 30, Αθήνα",
                hours: "Δευ-Παρ: 09:00 - 18:00"
            },
            form: {
                name: "Ονοματεπώνυμο",
                email: "Email",
                message: "Πώς μπορούμε να βοηθήσουμε;",
                button: "Αποστολή"
            }
        },
        footer: {
            rights: "© 2026 GM Accounting. Όλα τα δικαιώματα διατηρούνται."
        }
    },
    en: {
        hero: {
            badge: "Certified Public Accountants",
            title: "GM",
            subtitle: "ACCOUNTING",
            desc: "Accounting & tax services for businesses and individuals. Reliability & experience.",
            ctaPrimary: "Free Consultation",
            ctaSecondary: "Services"
        },
        about: {
            badge: "About Us",
            title: "Trusted Since",
            year: "2008",
            desc: "GM Accounting specializes in bookkeeping, tax planning, and company incorporation. 500+ active clients, full digital infrastructure.",
            stats: [
                { num: '500+', label: 'Clients' },
                { num: '15+', label: 'Years' },
                { num: '€50M+', label: 'Managed' },
                { num: '100%', label: 'Accuracy' }
            ]
        },
        services: {
            badge: "Services",
            title: "OUR SERVICES",
            items: [
                { icon: FileText, title: 'Tax Returns', desc: 'Income tax, VAT, annual statements.' },
                { icon: BarChart3, title: 'Bookkeeping', desc: 'Single & double-entry books, myDATA compliance.' },
                { icon: Users, title: 'Payroll', desc: 'Labor law compliance, ERGANI, contracts.' },
                { icon: Shield, title: 'Company Setup', desc: 'SA, Ltd, PC, Sole proprietorship - "one stop shop".' },
                { icon: TrendingUp, title: 'Tax Planning', desc: 'Optimization of tax liabilities.' },
                { icon: PieChart, title: 'Auditing', desc: 'Internal audit, due diligence.' }
            ]
        },
        team: {
            badge: "The Team",
            title: "OUR ACCOUNTANTS",
            members: [
                { name: 'Katerina M.', role: 'Senior Accountant' },
                { name: 'Thanasis K.', role: 'Tax Advisor' },
                { name: 'Marina P.', role: 'Payroll Specialist' },
                { name: 'Dimitris N.', role: 'Auditor' }
            ]
        },
        testimonials: {
            badge: "Reviews",
            title: "CLIENT REVIEWS",
            items: [
                { name: 'Giannis A.', text: 'Excellent service. They saved me €5,000 in taxes.' },
                { name: 'Eleni S.', text: 'Very organized, I never miss a deadline anymore.' },
                { name: 'Startup XYZ', text: 'They helped us set up our PC company within 48 hours.' }
            ]
        },
        pricing: {
            badge: "Pricing",
            title: "PRICING PLANS",
            monthly: "/ mo",
            popular: "Most Popular",
            select: "Select",
            items: [
                { name: 'STARTER', price: '99', features: ['Tax Return', 'E1 + E2', 'Email Support'] },
                { name: 'BUSINESS', price: '249', popular: true, features: ['Single-entry Books', 'VAT + myDATA', 'Payroll (2 emp.)', 'Monthly Reporting'] },
                { name: 'ENTERPRISE', price: '499', features: ['Double-entry Books', 'Full Payroll', 'Tax Planning', 'Dedicated Advisor'] }
            ]
        },
        contact: {
            badge: "Contact",
            title: "CONTACT US",
            info: {
                address: "Stadiou 30, Athens",
                hours: "Mon-Fri: 09:00 - 18:00"
            },
            form: {
                name: "Full Name",
                email: "Email",
                message: "How can we help?",
                button: "Send Message"
            }
        },
        footer: {
            rights: "© 2026 GM Accounting. All rights reserved."
        }
    },
    es: {
        hero: {
            badge: "Contadores Públicos Certificados",
            title: "GM",
            subtitle: "ACCOUNTING",
            desc: "Servicios contables y fiscales para empresas y particulares. Fiabilidad y experiencia.",
            ctaPrimary: "Consulta Gratuita",
            ctaSecondary: "Servicios"
        },
        about: {
            badge: "Nosotros",
            title: "Confianza Desde",
            year: "2008",
            desc: "GM Accounting se especializa en contabilidad, planificación fiscal y constitución de empresas. Más de 500 clientes activos, infraestructura digital completa.",
            stats: [
                { num: '500+', label: 'Clientes' },
                { num: '15+', label: 'Años' },
                { num: '€50M+', label: 'Gestionado' },
                { num: '100%', label: 'Precisión' }
            ]
        },
        services: {
            badge: "Servicios",
            title: "NUESTROS SERVICIOS",
            items: [
                { icon: FileText, title: 'Declaraciones de Impuestos', desc: 'Renta, IVA, declaraciones anuales.' },
                { icon: BarChart3, title: 'Contabilidad', desc: 'Libros de entrada única y doble, cumplimiento myDATA.' },
                { icon: Users, title: 'Nómina', desc: 'Cumplimiento laboral, ERGANI, contratos.' },
                { icon: Shield, title: 'Constitución de Empresas', desc: 'SA, Ltd, PC, Autónomos - "ventanilla única".' },
                { icon: TrendingUp, title: 'Planificación Fiscal', desc: 'Optimización de obligaciones fiscales.' },
                { icon: PieChart, title: 'Auditoría', desc: 'Auditoría interna, diligencia debida.' }
            ]
        },
        team: {
            badge: "El Equipo",
            title: "NUESTROS CONTADORES",
            members: [
                { name: 'Katerina M.', role: 'Contadora Senior' },
                { name: 'Thanasis K.', role: 'Asesor Fiscal' },
                { name: 'Marina P.', role: 'Especialista en Nómina' },
                { name: 'Dimitris N.', role: 'Auditor' }
            ]
        },
        testimonials: {
            badge: "Reseñas",
            title: "OPINIONES DE CLIENTES",
            items: [
                { name: 'Giannis A.', text: 'Servicio excelente. Me ahorraron €5,000 en impuestos.' },
                { name: 'Eleni S.', text: 'Muy organizados, ya no pierdo ninguna fecha límite.' },
                { name: 'Startup XYZ', text: 'Nos ayudaron a constituir nuestra empresa en 48 horas.' }
            ]
        },
        pricing: {
            badge: "Precios",
            title: "PLANES DE PRECIOS",
            monthly: "/ mes",
            popular: "Más Popular",
            select: "Seleccionar",
            items: [
                { name: 'STARTER', price: '99', features: ['Declaración de Impuestos', 'E1 + E2', 'Soporte por Email'] },
                { name: 'BUSINESS', price: '249', popular: true, features: ['Libros Simplificados', 'IVA + myDATA', 'Nómina (2 emp.)', 'Informes Mensuales'] },
                { name: 'ENTERPRISE', price: '499', features: ['Contabilidad Completa', 'Nómina Completa', 'Planificación Fiscal', 'Asesor Dedicado'] }
            ]
        },
        contact: {
            badge: "Contacto",
            title: "CONTÁCTENOS",
            info: {
                address: "Stadiou 30, Atenas",
                hours: "Lun-Vie: 09:00 - 18:00"
            },
            form: {
                name: "Nombre Completo",
                email: "Email",
                message: "¿Cómo podemos ayudar?",
                button: "Enviar Mensaje"
            }
        },
        footer: {
            rights: "© 2026 GM Accounting. Todos los derechos reservados."
        }
    }
};

import Hero from './components/Hero';


const About = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#0c0e1a] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
                <span className="text-indigo-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.about.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4 md:mb-6">{t.about.title} <span className="text-indigo-400">{t.about.year}</span></h2>
                <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">{t.about.desc}</p>
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                    {t.about.stats.map((s, i) => (
                        <div key={i} className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10"><div className="text-lg md:text-xl font-black text-indigo-400">{s.num}</div><div className="text-gray-500 text-[10px] md:text-xs">{s.label}</div></div>
                    ))}
                </div>
            </div>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden h-[260px] md:h-[400px]"><img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" alt="Accounting office" className="w-full h-full object-cover" /></div>
        </div>
    </section>
);

const Services = ({ t }) => (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16"><span className="text-indigo-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.services.badge}</span><h2 className="text-3xl md:text-4xl font-black mt-2">{t.services.title}</h2></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {t.services.items.map((s, i) => (
                    <div key={i} className="group p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all hover:-translate-y-1">
                        <div className="mb-4 md:mb-6 p-3 md:p-4 bg-indigo-500/10 w-fit rounded-xl md:rounded-2xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors"><s.icon size={24} /></div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{s.title}</h3>
                        <p className="text-gray-500 text-xs md:text-sm">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Team = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#0c0e1a] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16"><span className="text-indigo-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.team.badge}</span><h2 className="text-3xl md:text-4xl font-black mt-2">{t.team.title}</h2></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {t.team.members.map((member, i) => (
                    <div key={i} className="text-center p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors">
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-indigo-500/20 mx-auto mb-3 md:mb-4 flex items-center justify-center"><Calculator size={24} className="text-indigo-400 md:w-8 md:h-8" /></div>
                        <h3 className="font-bold text-sm md:text-base">{member.name}</h3>
                        <p className="text-indigo-400 text-xs md:text-sm">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = ({ t }) => (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16"><span className="text-indigo-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.testimonials.badge}</span><h2 className="text-3xl md:text-4xl font-black mt-2">{t.testimonials.title}</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {t.testimonials.items.map((item, i) => (
                    <div key={i} className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-indigo-400 mb-3 md:mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-4 md:mb-6 italic text-sm md:text-base">"{item.text}"</p>
                        <p className="font-bold text-sm">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Pricing = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#0c0e1a] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16"><span className="text-indigo-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.pricing.badge}</span><h2 className="text-3xl md:text-4xl font-black mt-2">{t.pricing.title}</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {t.pricing.items.map((p, i) => (
                    <div key={i} className={`p-5 md:p-8 rounded-2xl md:rounded-3xl border flex flex-col ${p.popular ? 'bg-indigo-500/10 border-indigo-500' : 'bg-white/5 border-white/10'}`}>
                        {p.popular && <div className="text-center text-[10px] md:text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3 md:mb-4">{t.pricing.popular}</div>}
                        <h3 className="text-lg md:text-xl font-black mb-2">{p.name}</h3>
                        <div className="mb-6 md:mb-8"><span className="text-3xl md:text-4xl font-black">€{p.price}</span><span className="text-gray-400 text-sm">{t.pricing.monthly}</span></div>
                        <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-1">{p.features.map((f, j) => <li key={j} className="flex items-center gap-2.5 md:gap-3 text-xs md:text-sm text-gray-300"><CheckCircle size={14} className="text-indigo-400 flex-shrink-0" />{f}</li>)}</ul>
                        <button className={`w-full py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-wider transition-all text-sm ${p.popular ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-white/10 hover:bg-white/20'}`}>{t.pricing.select}</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = ({ t }) => (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
                <span className="text-indigo-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.contact.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6 md:mb-8">{t.contact.title}</h2>
                <div className="space-y-4 md:space-y-6 text-gray-400 text-sm md:text-base">
                    <div className="flex items-center gap-3 md:gap-4"><Phone size={18} className="text-indigo-400 flex-shrink-0" /> +30 210 000 0000</div>
                    <div className="flex items-center gap-3 md:gap-4"><Mail size={18} className="text-indigo-400 flex-shrink-0" /> info@gmaccounting.gr</div>
                    <div className="flex items-center gap-3 md:gap-4"><MapPin size={18} className="text-indigo-400 flex-shrink-0" /> {t.contact.info.address}</div>
                    <div className="flex items-center gap-3 md:gap-4"><Clock size={18} className="text-indigo-400 flex-shrink-0" /> {t.contact.info.hours}</div>
                </div>
            </div>
            <div className="space-y-3 md:space-y-4">
                <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none text-sm" placeholder={t.contact.form.name} />
                <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none text-sm" placeholder={t.contact.form.email} />
                <textarea className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none h-28 md:h-32 resize-none text-sm" placeholder={t.contact.form.message} />
                <button className="w-full bg-indigo-600 py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-indigo-500 transition-colors text-sm">{t.contact.form.button}</button>
            </div>
        </div>
    </section>
);

const FooterSection = ({ t }) => (
    <footer className="bg-[#0c0e1a] py-10 md:py-12 border-t border-indigo-500/20 text-center px-4">
        <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-3 md:mb-4">GM ACCOUNTING</h3>
        <p className="text-gray-700 text-[10px] md:text-xs">{t.footer.rights}</p>
    </footer>
);

const AccountingDemo = () => {
    const { viewMode, language } = useOutletContext() || { language: 'en' };
    const t = translations[language] || translations.en;

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-[#0c0e1a] min-h-screen text-white font-sans">
            <Hero t={t} />
            <About t={t} />
            <Services t={t} />
            <Team t={t} />
            <TestimonialsSection t={t} />
            <Pricing t={t} />
            <Contact t={t} />
            <FooterSection t={t} />
            <AIChat
                brandName="GM Accounting"
                botName="Accounting Assistant AI"
                accentColor="blue"
                botIcon={Calculator}
                welcomeMessage="Precision in every number. 📊 I'm your Accounting Assistant AI. Do you have a question about tax returns or our bookkeeping services?"
            />
        </div>
    );
};

export default AccountingDemo;
