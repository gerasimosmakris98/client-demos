import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Star, Phone, Mail, MapPin, Clock, Heart, Flame, Wind, Leaf, Users, Calendar, CheckCircle, Dumbbell, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';

const translations = {
    el: {
        hero: {
            tag: "Body • Mind • Soul",
            title: "GM",
            subtitle: "STUDIO",
            desc: "Yoga, Pilates & Wellness σε έναν χώρο σχεδιασμένο για εσωτερική ηρεμία και σωματική δύναμη.",
            ctaPrimary: "Δοκιμαστικό Μάθημα",
            ctaSecondary: "Πρόγραμμα"
        },
        about: {
            badge: "Η Φιλοσοφία Μας",
            title: "Ισορροπία",
            subtitle: "Σώματος & Πνεύματος",
            desc: "Το GM Studio δημιουργήθηκε το 2018 ως χώρος αφιερωμένος στην ολιστική ευεξία. Πιστοποιημένοι εκπαιδευτές, μικρά τμήματα, εξατομικευμένη προσέγγιση.",
            stats: [
                { num: '6+', label: 'Έτη' },
                { num: '15+', label: 'Τάξεις/Εβδ' },
                { num: '8', label: 'Εκπαιδευτές' },
                { num: '95%', label: 'Διατήρηση' }
            ]
        },
        classes: {
            badge: "Μαθήματα",
            title: "ΤΑ ΜΑΘΗΜΑΤΑ ΜΑΣ",
            items: [
                { icon: Wind, name: 'Vinyasa Yoga', time: 'Δευ-Παρ 07:00', level: 'Όλα τα επίπεδα' },
                { icon: Flame, name: 'Power Pilates', time: 'Τρ-Πεμ 18:00', level: 'Μεσαίο' },
                { icon: Heart, name: 'Meditation', time: 'Καθημερινά 20:00', level: 'Αρχάριοι' },
                { icon: Leaf, name: 'Yin Yoga', time: 'Σαβ 09:00', level: 'Όλα τα επίπεδα' },
                { icon: Flame, name: 'Barre Fitness', time: 'Δευ-Τετ 10:00', level: 'Όλα τα επίπεδα' },
                { icon: Wind, name: 'HIIT Flow', time: 'Παρ 17:00', level: 'Προχωρημένοι' }
            ]
        },
        instructors: {
            badge: "Εκπαιδευτές",
            title: "ΟΙ ΔΑΣΚΑΛΟΙ ΜΑΣ",
            members: [
                { name: 'Σοφία Λ.', role: 'Yoga Teacher (500h RYT)' },
                { name: 'Μαρία Κ.', role: 'Pilates Instructor' },
                { name: 'Δήμητρα Π.', role: 'Barre & HIIT' },
                { name: 'Ελένη Σ.', role: 'Meditation Guide' }
            ]
        },
        gallery: {
            badge: "Χώρος",
            title: "ΤΟ STUDIO"
        },
        testimonials: {
            badge: "Κριτικές",
            title: "ΣΧΟΛΙΑ ΜΕΛΩΝ",
            items: [
                { name: 'Αλεξάνδρα Τ.', text: 'Βρήκα ηρεμία που δεν ήξερα ότι χρειαζόμουν. Εκπληκτικοί δάσκαλοι.' },
                { name: 'Πέτρος Μ.', text: 'Το Power Pilates άλλαξε τη ζωή μου. Το καλύτερο στούντιο στην Αθήνα.' },
                { name: 'Μαριλένα Κ.', text: 'Μικρά τμήματα, προσωπική προσοχή. Αγαπώ αυτόν τον χώρο!' }
            ]
        },
        pricing: {
            badge: "Συνδρομές",
            title: "ΠΑΚΕΤΑ",
            bestValue: "Καλύτερη Τιμή",
            items: [
                { name: 'DROP-IN', price: '15', unit: '/μάθημα', features: ['Πρόσβαση σε Ένα Μάθημα', 'Οποιοδήποτε Τύπος', 'Χωρίς Δέσμευση'] },
                { name: 'UNLIMITED', price: '89', unit: '/μήνα', popular: true, features: ['Απεριόριστα Μαθήματα', 'Guest Pass (1x/μήνα)', 'Προτεραιότητα σε Workshop', 'Αποθήκευση Mat'] },
                { name: 'PRIVATE', price: '199', unit: '/μήνα', features: ['4 Ιδιαίτερα Μαθήματα', 'Εξατομικευμένο Πρόγραμμα', 'Διατροφική Συμβουλευτική', 'Απεριόριστα Ομαδικά'] }
            ],
            join: "Εγγραφή"
        },
        contact: {
            badge: "Επικοινωνία",
            title: "ΒΡΕΙΤΕ ΜΑΣ",
            info: {
                address: "Σκουφά 42, Κολωνάκι",
                hours: "Δευ-Σαβ: 07:00 - 21:00"
            },
            form: {
                name: "Όνομα",
                email: "Email",
                message: "Μήνυμα...",
                button: "Αποστολή Μηνύματος"
            }
        },
        footer: {
            rights: "© 2026 GM Fitness Studio. Όλα τα δικαιώματα διατηρούνται."
        }
    },
    en: {
        hero: {
            tag: "Body • Mind • Soul",
            title: "GM",
            subtitle: "STUDIO",
            desc: "Yoga, Pilates & Wellness in a space designed for inner peace and physical strength.",
            ctaPrimary: "Trial Class",
            ctaSecondary: "Schedule"
        },
        about: {
            badge: "Our Philosophy",
            title: "Balance of",
            subtitle: "Body & Spirit",
            desc: "GM Studio was established in 2018 as a space dedicated to holistic wellness. Certified instructors, small classes, personalized approach.",
            stats: [
                { num: '6+', label: 'Years' },
                { num: '15+', label: 'Classes/Week' },
                { num: '8', label: 'Instructors' },
                { num: '95%', label: 'Retention' }
            ]
        },
        classes: {
            badge: "Classes",
            title: "OUR CLASSES",
            items: [
                { icon: Wind, name: 'Vinyasa Yoga', time: 'Mon-Fri 07:00', level: 'All Levels' },
                { icon: Flame, name: 'Power Pilates', time: 'Tue-Thu 18:00', level: 'Intermediate' },
                { icon: Heart, name: 'Meditation', time: 'Daily 20:00', level: 'Beginner' },
                { icon: Leaf, name: 'Yin Yoga', time: 'Sat 09:00', level: 'All Levels' },
                { icon: Flame, name: 'Barre Fitness', time: 'Mon-Wed 10:00', level: 'All Levels' },
                { icon: Wind, name: 'HIIT Flow', time: 'Fri 17:00', level: 'Advanced' }
            ]
        },
        instructors: {
            badge: "Instructors",
            title: "OUR TEACHERS",
            members: [
                { name: 'Sofia L.', role: 'Yoga Teacher (500h RYT)' },
                { name: 'Maria K.', role: 'Pilates Instructor' },
                { name: 'Dimitra P.', role: 'Barre & HIIT' },
                { name: 'Eleni S.', role: 'Meditation Guide' }
            ]
        },
        gallery: {
            badge: "Space",
            title: "OUR STUDIO"
        },
        testimonials: {
            badge: "Reviews",
            title: "MEMBER REVIEWS",
            items: [
                { name: 'Alexandra T.', text: 'I found peace I didn\'t know I needed. Amazing teachers.' },
                { name: 'Petros M.', text: 'Power Pilates changed my life. Best studio in Athens.' },
                { name: 'Marilena K.', text: 'Small classes, personal attention. I love this place!' }
            ]
        },
        pricing: {
            badge: "Membership",
            title: "PLANS",
            bestValue: "Best Value",
            items: [
                { name: 'DROP-IN', price: '15', unit: '/class', features: ['Single Class Access', 'Any Class Type', 'No Commitment'] },
                { name: 'UNLIMITED', price: '89', unit: '/mo', popular: true, features: ['All Classes', 'Guest Pass (1x/mo)', 'Workshop Priority', 'Mat Storage'] },
                { name: 'PRIVATE', price: '199', unit: '/mo', features: ['4 Private Sessions', 'Personalized Program', 'Nutrition Guidance', 'Unlimited Group'] }
            ],
            join: "Join"
        },
        contact: {
            badge: "Contact",
            title: "FIND US",
            info: {
                address: "Skoufa 42, Kolonaki",
                hours: "Mon-Sat: 07:00 - 21:00"
            },
            form: {
                name: "Name",
                email: "Email",
                message: "Message...",
                button: "Send Message"
            }
        },
        footer: {
            rights: "© 2026 GM Fitness Studio. All rights reserved."
        }
    },
    es: {
        hero: {
            tag: "Cuerpo • Mente • Alma",
            title: "GM",
            subtitle: "STUDIO",
            desc: "Yoga, Pilates y Bienestar en un espacio diseñado para la paz interior y la fuerza física.",
            ctaPrimary: "Clase de Prueba",
            ctaSecondary: "Horario"
        },
        about: {
            badge: "Nuestra Filosofía",
            title: "Equilibrio de",
            subtitle: "Cuerpo y Mente",
            desc: "GM Studio fue fundado en 2018 como un espacio dedicado al bienestar holístico. Instructores certificados, clases pequeñas, enfoque personalizado.",
            stats: [
                { num: '6+', label: 'Años' },
                { num: '15+', label: 'Clases/Semana' },
                { num: '8', label: 'Instructores' },
                { num: '95%', label: 'Retención' }
            ]
        },
        classes: {
            badge: "Clases",
            title: "NUESTRAS CLASES",
            items: [
                { icon: Wind, name: 'Vinyasa Yoga', time: 'Lun-Vie 07:00', level: 'Todos los niveles' },
                { icon: Flame, name: 'Power Pilates', time: 'Mar-Jue 18:00', level: 'Intermedio' },
                { icon: Heart, name: 'Meditación', time: 'Diario 20:00', level: 'Principiantes' },
                { icon: Leaf, name: 'Yin Yoga', time: 'Sáb 09:00', level: 'Todos los niveles' },
                { icon: Flame, name: 'Barre Fitness', time: 'Lun-Mié 10:00', level: 'Todos los niveles' },
                { icon: Wind, name: 'HIIT Flow', time: 'Vie 17:00', level: 'Avanzado' }
            ]
        },
        instructors: {
            badge: "Instructores",
            title: "NUESTROS PROFESORES",
            members: [
                { name: 'Sofia L.', role: 'Profesora de Yoga (500h RYT)' },
                { name: 'Maria K.', role: 'Instructora de Pilates' },
                { name: 'Dimitra P.', role: 'Barre & HIIT' },
                { name: 'Eleni S.', role: 'Guía de Meditación' }
            ]
        },
        gallery: {
            badge: "Espacio",
            title: "NUESTRO ESTUDIO"
        },
        testimonials: {
            badge: "Reseñas",
            title: "OPINIONES DE MIEMBROS",
            items: [
                { name: 'Alexandra T.', text: 'Encontré la paz que no sabía que necesitaba. Profesores increíbles.' },
                { name: 'Petros M.', text: 'Power Pilates cambió mi vida. El mejor estudio en Atenas.' },
                { name: 'Marilena K.', text: 'Clases pequeñas, atención personal. ¡Amo este lugar!' }
            ]
        },
        pricing: {
            badge: "Membresía",
            title: "PLANES",
            bestValue: "Mejor Valor",
            items: [
                { name: 'CLASE SUELTA', price: '15', unit: '/clase', features: ['Acceso a una clase', 'Cualquier tipo', 'Sin compromiso'] },
                { name: 'ILIMITADO', price: '89', unit: '/mes', popular: true, features: ['Todas las clases', 'Pase de invitado (1x/mes)', 'Prioridad en talleres', 'Almacenaje de mat'] },
                { name: 'PRIVADO', price: '199', unit: '/mes', features: ['4 Sesiones Privadas', 'Programa Personalizado', 'Guía Nutricional', 'Grupal Ilimitado'] }
            ],
            join: "Unirse"
        },
        contact: {
            badge: "Contacto",
            title: "ENCUÉNTRANOS",
            info: {
                address: "Skoufa 42, Kolonaki",
                hours: "Lun-Sáb: 07:00 - 21:00"
            },
            form: {
                name: "Nombre",
                email: "Email",
                message: "Mensaje...",
                button: "Enviar Mensaje"
            }
        },
        footer: {
            rights: "© 2026 GM Fitness Studio. Todos los derechos reservados."
        }
    }
};

const Hero = ({ t }) => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0015] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-[#0d0015] to-[#0d0015]" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="text-fuchsia-400 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 md:mb-8">{t.hero.tag}</div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 md:mb-6">{t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">{t.hero.subtitle}</span></h1>
                <p className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 px-2">{t.hero.desc}</p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                    <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow text-sm">{t.hero.ctaPrimary}</button>
                    <button className="border border-white/20 px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-sm">{t.hero.ctaSecondary}</button>
                </div>
            </motion.div>
        </div>
    </section>
);

const About = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#0d0015] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
                <span className="text-fuchsia-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.about.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4 md:mb-6">{t.about.title} <span className="text-fuchsia-400">{t.about.subtitle}</span></h2>
                <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">{t.about.desc}</p>
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                    {t.about.stats.map((s, i) => (
                        <div key={i} className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10"><div className="text-lg md:text-xl font-black text-fuchsia-400">{s.num}</div><div className="text-gray-500 text-[10px] md:text-xs">{s.label}</div></div>
                    ))}
                </div>
            </div>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden h-[260px] md:h-[400px]"><img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2720&auto=format&fit=crop" className="w-full h-full object-cover" alt="Yoga studio" /></div>
        </div>
    </section>
);

const Classes = ({ t }) => (
    <section className="py-16 md:py-24 bg-purple-950/30 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16"><span className="text-fuchsia-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.classes.badge}</span><h2 className="text-3xl md:text-4xl font-black mt-2">{t.classes.title}</h2></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {t.classes.items.map((c, i) => (
                    <div key={i} className="group p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-fuchsia-500/50 transition-all hover:-translate-y-1">
                        <div className="mb-3 md:mb-4 p-2.5 md:p-3 bg-fuchsia-500/10 w-fit rounded-xl text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-white transition-colors"><c.icon size={20} /></div>
                        <h3 className="text-lg md:text-xl font-bold mb-1">{c.name}</h3>
                        <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-4">{c.time}</p>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-[10px] md:text-xs font-bold">{c.level}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Instructors = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#0d0015] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16"><span className="text-fuchsia-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.instructors.badge}</span><h2 className="text-3xl md:text-4xl font-black mt-2">{t.instructors.title}</h2></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {t.instructors.members.map((member, i) => (
                    <div key={i} className="text-center p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-fuchsia-500/30 transition-colors">
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-fuchsia-500/20 mx-auto mb-3 md:mb-4 flex items-center justify-center"><Heart size={20} className="text-fuchsia-400 md:w-7 md:h-7" /></div>
                        <h3 className="font-bold text-sm md:text-base">{member.name}</h3>
                        <p className="text-fuchsia-400 text-xs mt-1">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const GallerySection = ({ t }) => (
    <section className="py-16 md:py-24 bg-purple-950/30 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16"><span className="text-fuchsia-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.gallery.badge}</span><h2 className="text-3xl md:text-4xl font-black mt-2">{t.gallery.title}</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                {[
                    'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop'
                ].map((src, i) => (
                    <div key={i} className="aspect-video rounded-xl md:rounded-2xl overflow-hidden group"><img src={src} alt={`Studio ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#0d0015] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16"><span className="text-fuchsia-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.testimonials.badge}</span><h2 className="text-3xl md:text-4xl font-black mt-2">{t.testimonials.title}</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {t.testimonials.items.map((item, i) => (
                    <div key={i} className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-fuchsia-400 mb-3 md:mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-4 md:mb-6 italic text-sm md:text-base">"{item.text}"</p>
                        <p className="font-bold text-sm">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Pricing = ({ t }) => (
    <section className="py-16 md:py-24 bg-purple-950/30 text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16"><span className="text-fuchsia-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.pricing.badge}</span><h2 className="text-3xl md:text-4xl font-black mt-2">{t.pricing.title}</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {t.pricing.items.map((p, i) => (
                    <div key={i} className={`p-5 md:p-8 rounded-2xl md:rounded-3xl border flex flex-col ${p.popular ? 'bg-fuchsia-500/10 border-fuchsia-500' : 'bg-white/5 border-white/10'}`}>
                        {p.popular && <div className="text-center text-[10px] md:text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-3 md:mb-4">{t.pricing.bestValue}</div>}
                        <h3 className="text-lg md:text-xl font-black mb-2">{p.name}</h3>
                        <div className="mb-6 md:mb-8"><span className="text-3xl md:text-4xl font-black">€{p.price}</span><span className="text-gray-400 text-sm">{p.unit}</span></div>
                        <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-1">{p.features.map((f, j) => <li key={j} className="flex items-center gap-2.5 md:gap-3 text-xs md:text-sm text-gray-300"><CheckCircle size={14} className="text-fuchsia-400 flex-shrink-0" />{f}</li>)}</ul>
                        <button className={`w-full py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-wider transition-all text-sm ${p.popular ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:shadow-lg hover:shadow-purple-500/30' : 'bg-white/10 hover:bg-white/20'}`}>{t.pricing.join}</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#0d0015] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
                <span className="text-fuchsia-400 font-mono text-[10px] md:text-sm uppercase tracking-widest">{t.contact.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6 md:mb-8">{t.contact.title}</h2>
                <div className="space-y-4 md:space-y-6 text-gray-400 text-sm md:text-base">
                    <div className="flex items-center gap-3 md:gap-4"><Phone size={18} className="text-fuchsia-400 flex-shrink-0" /> +30 210 000 0000</div>
                    <div className="flex items-center gap-3 md:gap-4"><Mail size={18} className="text-fuchsia-400 flex-shrink-0" /> info@gmstudio.gr</div>
                    <div className="flex items-center gap-3 md:gap-4"><MapPin size={18} className="text-fuchsia-400 flex-shrink-0" /> {t.contact.info.address}</div>
                    <div className="flex items-center gap-3 md:gap-4"><Clock size={18} className="text-fuchsia-400 flex-shrink-0" /> {t.contact.info.hours}</div>
                </div>
            </div>
            <div className="space-y-3 md:space-y-4">
                <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-500 outline-none text-sm" placeholder={t.contact.form.name} />
                <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-500 outline-none text-sm" placeholder={t.contact.form.email} />
                <textarea className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-500 outline-none h-28 md:h-32 resize-none text-sm" placeholder={t.contact.form.message} />
                <button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-purple-500/30 transition-shadow text-sm">{t.contact.form.button}</button>
            </div>
        </div>
    </section>
);

const FooterSection = ({ t }) => (
    <footer className="bg-[#0d0015] py-10 md:py-12 border-t border-fuchsia-500/10 text-center px-4">
        <h3 className="text-3xl md:text-4xl font-black text-purple-950 mb-3 md:mb-4">GM STUDIO</h3>
        <p className="text-gray-700 text-[10px] md:text-xs">{t.footer.rights}</p>
    </footer>
);

const StudioDemo = () => {
    const { viewMode, language } = useOutletContext() || { language: 'en' };
    const t = translations[language] || translations.en;

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-[#0d0015] min-h-screen text-white font-sans">
            <Hero t={t} />
            <About t={t} />
            <Classes t={t} />
            <Instructors t={t} />
            <GallerySection t={t} />
            <TestimonialsSection t={t} />
            <Pricing t={t} />
            <Contact t={t} />
            <FooterSection t={t} />
            <AIChat brandName="GM Fitness Studio" />
        </div>
    );
};

export default StudioDemo;
