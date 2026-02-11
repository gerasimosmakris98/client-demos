import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { UtensilsCrossed, Wine, ChefHat, Star, Phone, Mail, MapPin, Clock, Calendar, Instagram, ClipboardList, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
// UniversalAdmin removed as per new structure

const translations = {
    en: {
        hero: {
            subtitle: "Fine Dining Experience",
            description: "Authentic gastronomy with fresh, local ingredients in a mesmerizing atmosphere.",
            book: "Book Now",
            menu: "View Menu"
        },
        about: {
            badge: "Our Story",
            title: "Flavors That ",
            titleAccent: "Tell a Story",
            desc: "Since 2012, GM Restaurant serves contemporary Greek cuisine with seasonal ingredients from local producers. Creative cooking, warm atmosphere, unforgettable nights.",
            stats: { years: 'Years', michelin: 'Michelin Rec.', seats: 'Seats' }
        },
        menu: {
            badge: "Menu",
            title: "OUR MENU",
            categories: {
                starters: "Starters",
                mains: "Mains",
                pasta: "Pasta",
                desserts: "Desserts"
            },
            items: {
                octopus: "Grilled Octopus",
                tartar: "Sea Bream Tartare",
                lamb: "Lamb Kleftiko",
                seafood: "Seafood Platter",
                lobster: "Lobster Linguine",
                risotto: "Mushroom Risotto",
                fondant: "Chocolate Fondant",
                icecream: "Pasteli Ice Cream"
            }
        },
        chef: {
            badge: "Head Chef",
            desc: "Studies at Le Cordon Bleu, experience in award-winning European restaurants. Alexandros creates dishes that bring grandmother's memories to a fine dining level."
        },
        gallery: { badge: "Gallery", title: "MOMENTS" },
        reviews: { badge: "Reviews", title: "GUEST REVIEWS" },
        testimonials: [
            { name: 'Eleni M.', text: 'The best culinary experience in Athens!' },
            { name: 'Marco R.', text: 'Incredible flavors. Every dish tells a story.' },
            { name: 'Nikos D.', text: 'Perfect place for business dinners.' }
        ],
        reservation: {
            badge: "Reservation",
            title: "BOOK A TABLE",
            placeholders: { name: "Name", phone: "Phone" },
            cta: "Reserve"
        }
    },
    el: {
        hero: {
            subtitle: "Fine Dining Experience",
            description: "Αυθεντική γαστρονομία με φρέσκα, τοπικά υλικά σε μια ατμόσφαιρα που μαγεύει.",
            book: "Κράτηση",
            menu: "Μενού"
        },
        about: {
            badge: "Η Ιστορία Μας",
            title: "Γεύσεις Που ",
            titleAccent: "Αφηγούνται",
            desc: "Από το 2012, το GM Restaurant σερβίρει σύγχρονη ελληνική κουζίνα με εποχιακά υλικά από τοπικούς παραγωγούς. Δημιουργική μαγειρική, ζεστή ατμόσφαιρα, αξέχαστες βραδιές.",
            stats: { years: 'Χρόνια', michelin: 'Προκρίσεις', seats: 'Θέσεις' }
        },
        menu: {
            badge: "Μενού",
            title: "ΤΟ ΜΕΝΟΥ ΜΑΣ",
            categories: {
                starters: "Ορεκτικά",
                mains: "Κύρια",
                pasta: "Ζυμαρικά",
                desserts: "Γλυκά"
            },
            items: {
                octopus: "Χταπόδι Σχάρας",
                tartar: "Τάρταρ Τσιπούρας",
                lamb: "Ψητό Αρνί",
                seafood: "Θαλασσινά Πιάτο",
                lobster: "Linguine Αστακού",
                risotto: "Ριζότο Μανιταριών",
                fondant: "Fondant Σοκολάτας",
                icecream: "Παστέλι Ice Cream"
            }
        },
        chef: {
            badge: "Head Chef",
            desc: "Σπουδές στο Le Cordon Bleu, εμπειρία σε βραβευμένα εστιατόρια Ευρώπης. Ο Αλέξανδρος δημιουργεί πιάτα που φέρνουν τη μνήμη της γιαγιάς σε fine dining επίπεδο."
        },
        gallery: { badge: "Φωτογραφίες", title: "ΣΤΙΓΜΕΣ" },
        reviews: { badge: "Κριτικές", title: "ΣΧΟΛΙΑ ΠΕΛΑΤΩΝ" },
        testimonials: [
            { name: 'Ελένη Μ.', text: 'Η καλύτερη γαστρονομική εμπειρία στην Αθήνα!' },
            { name: 'Marco R.', text: 'Απίθανες γεύσεις. Κάθε πιάτο διηγείται μια ιστορία.' },
            { name: 'Νίκος Δ.', text: 'Τέλειο μέρος για επαγγελματικά δείπνα.' }
        ],
        reservation: {
            badge: "Κράτηση",
            title: "ΚΡΑΤΗΣΗ ΤΡΑΠΕΖΙΟΥ",
            placeholders: { name: "Όνομα", phone: "Τηλέφωνο" },
            cta: "Κράτηση"
        }
    },
    es: {
        hero: {
            subtitle: "Experiencia Gastronómica",
            description: "Auténtica gastronomía con ingredientes locales frescos en una atmósfera cautivadora.",
            book: "Reservar",
            menu: "Menú"
        },
        about: {
            badge: "Nuestra Historia",
            title: "Sabores Que ",
            titleAccent: "Cuentan Historias",
            desc: "Desde 2012, GM Restaurant sirve cocina griega contemporánea con ingredientes de temporada de productores locales. Cocina creativa, ambiente cálido, noches inolvidables.",
            stats: { years: 'Años', michelin: 'Rec. Michelin', seats: 'Plazas' }
        },
        menu: {
            badge: "Menú",
            title: "NUESTRO MENÚ",
            categories: {
                starters: "Entrantes",
                mains: "Principales",
                pasta: "Pasta",
                desserts: "Postres"
            },
            items: {
                octopus: "Pulpo a la Brasa",
                tartar: "Tartar de Dorada",
                lamb: "Cordero Kleftiko",
                seafood: "Plato de Mariscos",
                lobster: "Linguine de Langosta",
                risotto: "Risotto de Setas",
                fondant: "Fondant de Chocolate",
                icecream: "Helado de Pasteli"
            }
        },
        chef: {
            badge: "Chef Principal",
            desc: "Estudios en Le Cordon Bleu, experiencia en restaurantes europeos premiados. Alexandros crea platos que llevan los recuerdos de la abuela a un nivel gourmet."
        },
        gallery: { badge: "Galería", title: "MOMENTOS" },
        reviews: { badge: "Reseñas", title: "OPINIONES" },
        testimonials: [
            { name: 'Elena M.', text: '¡La mejor experiencia gastronómica en Atenas!' },
            { name: 'Marco R.', text: 'Sabores increíbles. Cada plato cuenta una historia.' },
            { name: 'Nikos D.', text: 'Lugar perfecto para cenas de negocios.' }
        ],
        reservation: {
            badge: "Reserva",
            title: "RESERVAR MESA",
            placeholders: { name: "Nombre", phone: "Teléfono" },
            cta: "Reservar"
        }
    }
};

const Hero = ({ t }) => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a0a0a] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0a] via-[#1a0a0a]/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="text-red-400 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8">{t.hero.subtitle}</div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tight mb-4 md:mb-6 font-serif">GM <span className="text-red-500">RESTAURANT</span></h1>
                <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 italic font-serif px-4">{t.hero.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
                    <button className="bg-red-700 hover:bg-red-600 px-8 py-3 md:px-10 md:py-4 font-bold tracking-widest uppercase text-xs md:text-sm transition-colors border border-red-500/50 flex items-center gap-2 justify-center rounded-sm">
                        <Calendar size={16} /> {t.hero.book}
                    </button>
                    <button className="border border-white/20 px-8 py-3 md:px-10 md:py-4 font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-white/10 transition-colors rounded-sm">
                        {t.hero.menu}
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
);

const About = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#1a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden h-[300px] md:h-[500px]">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Food" />
            </div>
            <div>
                <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">{t.about.badge}</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6">{t.about.title} <span className="text-red-400">{t.about.titleAccent}</span></h2>
                <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">{t.about.desc}</p>
                <div className="grid grid-cols-3 gap-4 md:gap-6">
                    {[{ num: '12+', label: t.about.stats.years }, { num: '⭐', label: t.about.stats.michelin }, { num: '200+', label: t.about.stats.seats }].map((s, i) => (
                        <div key={i} className="text-center border border-red-500/20 p-3 md:p-4 rounded-xl">
                            <div className="text-lg md:text-xl font-bold text-red-400">{s.num}</div>
                            <div className="text-gray-500 text-[10px] md:text-xs mt-1 uppercase">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const Menu = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#150808] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
                <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">{t.menu.badge}</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-4">{t.menu.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {[
                    { cat: t.menu.categories.starters, items: [{ name: t.menu.items.octopus, price: '€16' }, { name: t.menu.items.tartar, price: '€14' }] },
                    { cat: t.menu.categories.mains, items: [{ name: t.menu.items.lamb, price: '€24' }, { name: t.menu.items.seafood, price: '€32' }] },
                    { cat: t.menu.categories.pasta, items: [{ name: t.menu.items.lobster, price: '€28' }, { name: t.menu.items.risotto, price: '€18' }] },
                    { cat: t.menu.categories.desserts, items: [{ name: t.menu.items.fondant, price: '€12' }, { name: t.menu.items.icecream, price: '€10' }] }
                ].map((sec, i) => (
                    <div key={i} className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10">
                        <h3 className="text-red-400 font-bold text-sm uppercase tracking-widest mb-6">{sec.cat}</h3>
                        <div className="space-y-4">{sec.items.map((item, j) => (
                            <div key={j} className="flex justify-between items-center border-b border-white/5 pb-4">
                                <span className="font-serif text-sm md:text-base">{item.name}</span>
                                <span className="text-red-400 font-bold">{item.price}</span>
                            </div>
                        ))}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Chef = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#1a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
                <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">{t.chef.badge}</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-6">Chef Αλέξανδρος Κ.</h2>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">{t.chef.desc}</p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold">Mediterranean</span>
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold">Farm-to-Table</span>
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold">Seasonal</span>
                </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[300px] md:h-[400px] order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2677&auto=format&fit=crop" className="w-full h-full object-cover" alt="Chef" />
            </div>
        </div>
    </section>
);

const Gallery = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#150808] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
                <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">{t.gallery.badge}</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-4">{t.gallery.title}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                {[
                    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop'
                ].map((src, i) => (
                    <div key={i} className="aspect-square rounded-2xl overflow-hidden group">
                        <img src={src} alt={`Food ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#1a0a0a] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
                <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">{t.reviews.badge}</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-4">{t.reviews.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {t.testimonials.map((testimonial, i) => (
                    <div key={i} className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-red-400 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-6 italic font-serif text-sm">"{testimonial.text}"</p>
                        <p className="font-bold text-sm">{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Reservation = ({ t }) => (
    <section className="py-16 md:py-24 bg-[#150808] text-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">{t.reservation.badge}</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-8 md:mb-12">{t.reservation.title}</h2>
            <div className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none placeholder:text-gray-600" placeholder={t.reservation.placeholders.name} />
                    <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none placeholder:text-gray-600" placeholder={t.reservation.placeholders.phone} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="date" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none text-gray-400" />
                    <select className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none text-gray-400 appearance-none">
                        <option>2 Guests</option><option>4 Guests</option><option>6 Guests</option><option>8+ Guests</option>
                    </select>
                </div>
                <button className="w-full bg-red-700 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-red-600 transition-colors shadow-lg shadow-red-900/20">
                    {t.reservation.cta}
                </button>
            </div>
        </div>
    </section>
);

const FooterSection = () => (
    <footer className="bg-[#1a0a0a] py-16 border-t border-red-500/10 text-center">
        <h3 className="text-4xl md:text-5xl font-serif text-[#1a0a0a] tracking-widest mb-4" style={{ WebkitTextStroke: '1px rgba(239,68,68,0.2)' }}>GM RESTAURANT</h3>
        <div className="flex justify-center gap-8 text-gray-600 text-xs md:text-sm mb-6">
            <a href="#" className="hover:text-red-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-red-400 transition-colors">TripAdvisor</a>
            <a href="#" className="hover:text-red-400 transition-colors">Google Maps</a>
        </div>
        <p className="text-gray-700 text-[10px] md:text-xs">© 2026 GM Restaurant. All rights reserved.</p>
    </footer>
);

const RestaurantDemo = () => {
    const { viewMode, language } = useOutletContext() || { language: 'en' };
    const t = translations[language] || translations.en;

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-[#1a0a0a] min-h-screen text-white font-serif">
            <Hero t={t} />
            <About t={t} />
            <Menu t={t} />
            <Chef t={t} />
            <Gallery t={t} />
            <TestimonialsSection t={t} />
            <Reservation t={t} />
            <FooterSection />
            <AIChat
                brandName="GM Restaurant"
                botName="Restaurant Captain AI"
                accentColor="red"
                botIcon={UtensilsCrossed}
                welcomeMessage="Welcome to a world of flavors! 🍷 I'm your Restaurant Captain. Would you like to reserve a table or browse our seasonal tasting menu?"
            />
        </div>
    );
};

export default RestaurantDemo;
