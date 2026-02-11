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

const translations = {
    en: {
        hero: {
            badge: "Your Health First",
            title: "GM MEDICAL",
            desc: "Modern medical center with specialized doctors. Online appointments, personal care.",
            ctaPrimary: "Book Appointment",
            ctaSecondary: "Specialties"
        },
        about: {
            badge: "About",
            title: "Care With",
            subtitle: "Reliability",
            desc: "GM Medical has been operating since 2010 with the aim of providing high-level medical services. Modern equipment, warm environment, patient-centered approach.",
            stats: {
                patients: "Patients/Year",
                doctors: "Doctors",
                specialties: "Specialties",
                satisfaction: "Satisfaction"
            }
        },
        specialties: {
            badge: "Specialties",
            title: "OUR SPECIALTIES",
            items: [
                { icon: Heart, title: 'Cardiology', desc: 'ECG, Holter, Triplex.' },
                { icon: Activity, title: 'Internal Medicine', desc: 'General exam, check-up, chronic diseases.' },
                { icon: Stethoscope, title: 'Pediatrics', desc: 'Vaccinations, development, childhood diseases.' },
                { icon: Shield, title: 'Dermatology', desc: 'Dermatoscopy, aesthetics, allergies.' },
                { icon: Users, title: 'Orthopedics', desc: 'Sports injuries, joints, spinal.' },
                { icon: Heart, title: 'Gynecology', desc: 'Ultrasounds, PAP test, pregnancy.' }
            ]
        },
        doctors: {
            badge: "Our Team",
            title: "EXPERT DOCTORS",
            list: [
                { name: "Dr. Elena K.", role: "Cardiologist" },
                { name: "Dr. Nikos M.", role: "Internist" },
                { name: "Dr. Maria P.", role: "Dermatologist" },
                { name: "Dr. George A.", role: "Orthopedic" }
            ]
        },
        reviews: {
            badge: "Reviews",
            title: "PATIENT REVIEWS",
            items: [
                { name: "Anastasia L.", text: "Excellent service and very short waiting time." },
                { name: "Kostas V.", text: "The doctor took the time and explained everything to me." },
                { name: "Helen M.", text: "State of the art equipment, very professional staff." }
            ]
        },
        booking: {
            badge: "Online",
            title: "BOOK APPOINTMENT",
            name: "Full Name",
            phone: "Phone",
            selectSpecialty: "Select Specialty",
            date: "Select Date",
            cta: "Book Appointment"
        },
        contact: {
            phone: { title: "Phone", value: "+30 210 000 0000" },
            address: { title: "Address", value: "Mesogeion 120, Athens" },
            hours: { title: "Hours", value: "Mon-Fri: 08:00 - 21:00" }
        },
        footer: {
            rights: "© 2026 GM Medical. All rights reserved."
        }
    },
    el: {
        hero: {
            badge: "Η Υγεία Σας Πρώτα",
            title: "GM MEDICAL",
            desc: "Σύγχρονο ιατρικό κέντρο με εξειδικευμένους γιατρούς. Online ραντεβού, προσωπική φροντίδα.",
            ctaPrimary: "Κλείστε Ραντεβού",
            ctaSecondary: "Ειδικότητες"
        },
        about: {
            badge: "Σχετικά",
            title: "Φροντίδα Με",
            subtitle: "Αξιοπιστία",
            desc: "Το GM Medical λειτουργεί από το 2010 με στόχο την παροχή υψηλού επιπέδου ιατρικών υπηρεσιών. Σύγχρονος εξοπλισμός, ζεστό περιβάλλον, ασθενοκεντρική προσέγγιση.",
            stats: {
                patients: "Ασθενείς/Έτος",
                doctors: "Γιατροί",
                specialties: "Ειδικότητες",
                satisfaction: "Ικανοποίηση"
            }
        },
        specialties: {
            badge: "Ειδικότητες",
            title: "ΟΙ ΕΙΔΙΚΟΤΗΤΕΣ ΜΑΣ",
            items: [
                { icon: Heart, title: 'Καρδιολογία', desc: 'Ηλεκτροκαρδιογράφημα, Holter, Triplex.' },
                { icon: Activity, title: 'Παθολογία', desc: 'Γενική εξέταση, check-up, χρόνια νοσήματα.' },
                { icon: Stethoscope, title: 'Παιδιατρική', desc: 'Εμβολιασμοί, ανάπτυξη, παιδικές ασθένειες.' },
                { icon: Shield, title: 'Δερματολογία', desc: 'Δερματοσκόπηση, αισθητική, αλλεργίες.' },
                { icon: Users, title: 'Ορθοπεδική', desc: 'Αθλητικές κακώσεις, αρθρώσεις, σπονδυλική.' },
                { icon: Heart, title: 'Γυναικολογία', desc: 'Υπέρηχοι, PAP test, εγκυμοσύνη.' }
            ]
        },
        doctors: {
            badge: "Η Ομάδα Μας",
            title: "ΕΞΕΙΔΙΚΕΥΜΕΝΟΙ ΓΙΑΤΡΟΙ",
            list: [
                { name: "Δρ. Ελένη Κ.", role: "Καρδιολόγος" },
                { name: "Δρ. Νίκος Μ.", role: "Παθολόγος" },
                { name: "Δρ. Μαρία Π.", role: "Δερματολόγος" },
                { name: "Δρ. Γιώργος Α.", role: "Ορθοπεδικός" }
            ]
        },
        reviews: {
            badge: "Κριτικές",
            title: "ΚΡΙΤΙΚΕΣ ΑΣΘΕΝΩΝ",
            items: [
                { name: "Αναστασία Λ.", text: "Εξαιρετική εξυπηρέτηση και πολύ σύντομος χρόνος αναμονής." },
                { name: "Κώστας Β.", text: "Ο γιατρός αφιέρωσε χρόνο και μου εξήγησε τα πάντα." },
                { name: "Helen M.", text: "State of the art equipment, very professional staff." }
            ]
        },
        booking: {
            badge: "Online",
            title: "ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ",
            name: "Ονοματεπώνυμο",
            phone: "Τηλέφωνο",
            selectSpecialty: "Επιλέξτε Ειδικότητα",
            date: "Επιλέξτε Ημερομηνία",
            cta: "Κλείστε Ραντεβού"
        },
        contact: {
            phone: { title: "Τηλέφωνο", value: "+30 210 000 0000" },
            address: { title: "Διεύθυνση", value: "Μεσογείων 120, Αθήνα" },
            hours: { title: "Ωράριο", value: "Δευ-Παρ: 08:00 - 21:00" }
        },
        footer: {
            rights: "© 2026 GM Medical. Όλα τα δικαιώματα διατηρούνται."
        }
    },
    es: {
        hero: {
            badge: "Su Salud Primero",
            title: "GM MEDICAL",
            desc: "Centro médico moderno con médicos especialistas. Citas online, atención personal.",
            ctaPrimary: "Reservar Cita",
            ctaSecondary: "Especialidades"
        },
        about: {
            badge: "Sobre Nosotros",
            title: "Cuidado Con",
            subtitle: "Fiabilidad",
            desc: "GM Medical opera desde 2010 con el objetivo de proporcionar servicios médicos de alto nivel. Equipamiento moderno, ambiente cálido, enfoque centrado en el paciente.",
            stats: {
                patients: "Pacientes/Año",
                doctors: "Médicos",
                specialties: "Especialidades",
                satisfaction: "Satisfacción"
            }
        },
        specialties: {
            badge: "Especialidades",
            title: "NUESTRAS ESPECIALIDADES",
            items: [
                { icon: Heart, title: 'Cardiología', desc: 'ECG, Holter, Triplex.' },
                { icon: Activity, title: 'Medicina Interna', desc: 'Examen general, chequeo, enfermedades crónicas.' },
                { icon: Stethoscope, title: 'Pediatría', desc: 'Vacunas, desarrollo, enfermedades infantiles.' },
                { icon: Shield, title: 'Dermatología', desc: 'Dermatoscopia, estética, alergias.' },
                { icon: Users, title: 'Ortopedia', desc: 'Lesiones deportivas, articulaciones, espinal.' },
                { icon: Heart, title: 'Ginecología', desc: 'Ecografías, test PAP, embarazo.' }
            ]
        },
        doctors: {
            badge: "Nuestro Equipo",
            title: "MÉDICOS EXPERTOS",
            list: [
                { name: "Dra. Elena K.", role: "Cardióloga" },
                { name: "Dr. Nikos M.", role: "Internista" },
                { name: "Dra. Maria P.", role: "Dermatóloga" },
                { name: "Dr. George A.", role: "Ortopedista" }
            ]
        },
        reviews: {
            badge: "Opiniones",
            title: "OPINIONES DE PACIENTES",
            items: [
                { name: "Anastasia L.", text: "Excelente servicio y tiempo de espera muy corto." },
                { name: "Kostas V.", text: "El médico se tomó el tiempo y me explicó todo." },
                { name: "Helen M.", text: "Equipamiento de última generación, personal muy profesional." }
            ]
        },
        booking: {
            badge: "Online",
            title: "RESERVAR CITA",
            name: "Nombre Completo",
            phone: "Teléfono",
            selectSpecialty: "Seleccionar Especialidad",
            date: "Seleccionar Fecha",
            cta: "Reservar Cita"
        },
        contact: {
            phone: { title: "Teléfono", value: "+30 210 000 0000" },
            address: { title: "Dirección", value: "Mesogeion 120, Atenas" },
            hours: { title: "Horario", value: "Lun-Vie: 08:00 - 21:00" }
        },
        footer: {
            rights: "© 2026 GM Medical. Todos los derechos reservados."
        }
    }
}

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

const Hero = ({ t }) => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-950 via-slate-950 to-cyan-950 text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20,184,166,0.4) 1px, transparent 0)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <HeartbeatBadge>{t.hero.badge}</HeartbeatBadge>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 md:mb-6">
                    {t.hero.title}
                </h1>
                <p className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 px-2">
                    {t.hero.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                    <button className="bg-teal-500 text-black px-8 md:px-10 py-3.5 md:py-4 rounded-full font-black uppercase tracking-wider hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20 flex items-center gap-2 justify-center text-sm">
                        <Calendar size={16} /> {t.hero.ctaPrimary}
                    </button>
                    <button className="border border-white/20 px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-sm">
                        {t.hero.ctaSecondary}
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
);

/* ───────── ABOUT — Asymmetric Layout ───────── */
const About = ({ t }) => (
    <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
                <span className="text-teal-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.about.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4 md:mb-6">{t.about.title} <span className="text-teal-400">{t.about.subtitle}</span></h2>
                <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">{t.about.desc}</p>
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                    {[
                        { num: '12,000+', label: t.about.stats.patients },
                        { num: '25+', label: t.about.stats.doctors },
                        { num: '15+', label: t.about.stats.specialties },
                        { num: '98%', label: t.about.stats.satisfaction }
                    ].map((s, i) => (
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

const Specialties = ({ t }) => (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-teal-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.specialties.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">{t.specialties.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {t.specialties.items.map((s, i) => (
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

const Doctors = ({ t }) => (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-teal-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.doctors.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">{t.doctors.title}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                {t.doctors.list.map((d, i) => (
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

const TestimonialsSection = ({ t }) => (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-teal-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.reviews.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2">{t.reviews.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {t.reviews.items.map((t, i) => (
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

const Booking = ({ t }) => (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <span className="text-teal-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.booking.badge}</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-8 md:mb-12">{t.booking.title}</h2>
            <div className="space-y-3 md:space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none text-sm" placeholder={t.booking.name} />
                    <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none text-sm" placeholder={t.booking.phone} />
                </div>
                <select className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none text-gray-400 appearance-none text-sm">
                    <option>{t.booking.selectSpecialty}</option>
                    {t.specialties.items.map((s, i) => <option key={i}>{s.title}</option>)}
                </select>
                <input type="date" className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-500 outline-none text-gray-400 text-sm" />
                <button className="w-full bg-teal-500 text-black py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-teal-400 transition-colors text-sm">{t.booking.cta}</button>
            </div>
        </div>
    </section>
);

const ContactSection = ({ t }) => (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            {[
                { icon: Phone, title: t.contact.phone.title, text: t.contact.phone.value },
                { icon: MapPin, title: t.contact.address.title, text: t.contact.address.value },
                { icon: Clock, title: t.contact.hours.title, text: t.contact.hours.value }
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

const FooterSection = ({ t }) => (
    <footer className="bg-slate-950 py-10 md:py-12 border-t border-teal-500/20 text-center px-4">
        <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-3 md:mb-4">GM MEDICAL</h3>
        <p className="text-gray-700 text-[10px] md:text-xs">{t.footer.rights}</p>
    </footer>
);

const MedicalDemo = () => {
    const { viewMode, language } = useOutletContext() || { language: 'en' };
    const t = translations[language] || translations.en;

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-slate-950 min-h-screen text-white font-sans">
            <Hero t={t} /><About t={t} /><Specialties t={t} /><Doctors t={t} /><TestimonialsSection t={t} /><Booking t={t} /><ContactSection t={t} /><FooterSection t={t} />
            <AIChat brandName="GM Medical" />
        </div>
    );
};

export default MedicalDemo;
