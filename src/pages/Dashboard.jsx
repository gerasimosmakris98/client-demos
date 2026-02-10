import React, { useState, useMemo } from 'react';
import { Info, Globe, ChevronLeft, ChevronRight, Sparkles, Layers, ArrowRight } from 'lucide-react';
import FilterBar from '../components/dashboard/FilterBar';
import TemplateCard from '../components/dashboard/TemplateCard';

const translations = {
    en: {
        heroTitle: 'GM Client Templates',
        heroBadge: 'Live Preview',
        heroDesc: 'A curated collection of',
        heroHighlight: '13 production-ready templates',
        heroDesc2: ', showcasing modern web design, industry-specific branding, and mobile-first architecture.',
        heroCta: 'Browse Templates',
        heroStats: [{ num: '13', label: 'Templates' }, { num: '8-9', label: 'Sections Each' }, { num: '100%', label: 'Responsive' }],
        pageInfo: (start, end, total) => `Showing ${start}-${end} of ${total} templates`,
    },
    el: {
        heroTitle: 'GM Πρότυπα Πελατών',
        heroBadge: 'Ζωντανή Προεπισκόπηση',
        heroDesc: 'Μια επιλεγμένη συλλογή από',
        heroHighlight: '13 έτοιμα πρότυπα',
        heroDesc2: ', με σύγχρονο web design, δυναμικό branding ανά κλάδο και mobile-first αρχιτεκτονική.',
        heroCta: 'Δείτε Πρότυπα',
        heroStats: [{ num: '13', label: 'Πρότυπα' }, { num: '8-9', label: 'Ενότητες' }, { num: '100%', label: 'Responsive' }],
        pageInfo: (start, end, total) => `Εμφάνιση ${start}-${end} από ${total} πρότυπα`,
    },
    es: {
        heroTitle: 'Plantillas GM',
        heroBadge: 'Vista Previa',
        heroDesc: 'Una colección curada de',
        heroHighlight: '13 plantillas listas',
        heroDesc2: ', con diseño web moderno, branding por industria y arquitectura mobile-first.',
        heroCta: 'Ver Plantillas',
        heroStats: [{ num: '13', label: 'Plantillas' }, { num: '8-9', label: 'Secciones' }, { num: '100%', label: 'Responsive' }],
        pageInfo: (start, end, total) => `Mostrando ${start}-${end} de ${total} plantillas`,
    }
};

const demos = [
    {
        id: 'premium-template', shortName: 'Premium', title: 'GM Premium SaaS',
        description: 'Dark-themed, high-conversion landing page with glassmorphism effects. Perfect for startups and modern software products.',
        category: 'SaaS', tags: ['React', 'Framer Motion', 'Glassmorphism'],
        gradient: 'from-blue-900 to-indigo-950', path: '/demos/premium-template', date: '2 months ago',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'cafe-greek', shortName: 'Cafe', title: 'GM Cafe',
        description: 'Modern coffee shop landing page with interactive menu, gallery, testimonials, location map and booking CTA.',
        category: 'Hospitality', tags: ['Hospitality', 'Menu', 'Gallery'],
        gradient: 'from-amber-900 to-orange-950', path: '/demos/cafe-greek', date: '1 month ago',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'hair-salon-greek', shortName: 'Salon', title: 'GM Salon',
        description: 'Elegant salon booking page with services, testimonials, booking flow and footer. Rose/blush color scheme.',
        category: 'Beauty', tags: ['Beauty', 'Services', 'Booking'],
        gradient: 'from-rose-900 to-pink-950', path: '/demos/hair-salon-greek', date: '3 weeks ago',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'law-office-greek', shortName: 'Law', title: 'GM Law Partners',
        description: 'Professional law office template with practice areas, attorneys, case studies, testimonials and contact form.',
        category: 'Business', tags: ['Legal', 'Corporate', 'Trust'],
        gradient: 'from-slate-800 to-slate-950', path: '/demos/law-office-greek', date: '2 weeks ago',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'tutoring-greek', shortName: 'Edu', title: 'GM Tutoring',
        description: 'Full education platform with multi-role dashboard (Admin/Teacher/Student), programs, pricing and AI chat.',
        category: 'Education', tags: ['Education', 'Portal', 'LMS'],
        gradient: 'from-emerald-900 to-teal-950', path: '/demos/tutoring-greek', date: '1 week ago',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'gym-greek', shortName: 'Gym', title: 'GM Gym',
        description: 'High-energy fitness center with dark/neon aesthetic. Programs, trainers, membership pricing and FAQ.',
        category: 'Fitness', tags: ['Fitness', 'Membership', 'Dark Mode'],
        gradient: 'from-lime-900 to-emerald-950', path: '/demos/gym-greek', date: '3 days ago',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'electrician-greek', shortName: 'Electric', title: 'GM Electric',
        description: 'Bold electrician/trades landing page with service highlights, emergency CTA, pricing and team.',
        category: 'Trades', tags: ['Trades', 'Services', 'Emergency'],
        gradient: 'from-orange-900 to-amber-950', path: '/demos/electrician-greek', date: '2 days ago',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'real-estate-greek', shortName: 'Estates', title: 'GM Estates',
        description: 'Luxury real estate agency showcase. Property listings, agent profiles and premium gold-on-black design.',
        category: 'Real Estate', tags: ['Real Estate', 'Luxury', 'Listings'],
        gradient: 'from-yellow-900 to-amber-950', path: '/demos/real-estate-greek', date: '2 days ago',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'medical-greek', shortName: 'Medical', title: 'GM Medical',
        description: 'Modern medical clinic with doctor profiles, specialties, appointment booking and patient-first design.',
        category: 'Healthcare', tags: ['Healthcare', 'Appointments', 'Trust'],
        gradient: 'from-teal-900 to-cyan-950', path: '/demos/medical-greek', date: '2 days ago',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'hotel-greek', shortName: 'Hotel', title: 'GM Hotel',
        description: 'Boutique hotel experience page with warm minimalist design, room showcase and reservation system.',
        category: 'Hospitality', tags: ['Hospitality', 'Luxury', 'Booking'],
        gradient: 'from-stone-800 to-stone-950', path: '/demos/hotel-greek', date: '2 days ago',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'accounting-greek', shortName: 'Accounting', title: 'GM Accounting',
        description: 'Professional accounting firm template with service packages, team, testimonials and consultation booking.',
        category: 'Business', tags: ['Finance', 'Accounting', 'Corporate'],
        gradient: 'from-indigo-900 to-violet-950', path: '/demos/accounting-greek', date: 'Today',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'restaurant-greek', shortName: 'Restaurant', title: 'GM Restaurant',
        description: 'Fine dining restaurant with chef profiles, seasonal menu, reservation system and ambient dark theme.',
        category: 'Hospitality', tags: ['Hospitality', 'Fine Dining', 'Menu'],
        gradient: 'from-red-900 to-rose-950', path: '/demos/restaurant-greek', date: 'Today',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 'studio-greek', shortName: 'Studio', title: 'GM Fitness Studio',
        description: 'Boutique fitness studio with class schedules, instructor profiles and membership plans.',
        category: 'Fitness', tags: ['Fitness', 'Yoga', 'Pilates'],
        gradient: 'from-purple-900 to-fuchsia-950', path: '/demos/studio-greek', date: 'Today',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop'
    },
];

const ITEMS_PER_PAGE = 6;

const Dashboard = () => {
    const [category, setCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [lang, setLang] = useState('en');
    const t = translations[lang];

    const filteredDemos = useMemo(() => demos.filter(demo => {
        const matchCategory = category === 'All' || demo.category === category;
        const matchSearch = demo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            demo.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchCategory && matchSearch;
    }), [category, searchQuery]);

    const totalPages = Math.ceil(filteredDemos.length / ITEMS_PER_PAGE);
    const paginatedDemos = filteredDemos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const endItem = Math.min(currentPage * ITEMS_PER_PAGE, filteredDemos.length);

    // Reset page on filter change
    const handleCategoryChange = (c) => { setCategory(c); setCurrentPage(1); };
    const handleSearchChange = (q) => { setSearchQuery(q); setCurrentPage(1); };

    return (
        <div className="min-h-screen">
            {/* ═══ HERO SECTION ═══ */}
            <div className="relative overflow-hidden mb-8 md:mb-16">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-transparent to-blue-950/40" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                <div className="relative px-4 sm:px-6 py-10 sm:py-16 md:py-20" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    {/* Language switcher */}
                    <div className="flex justify-end mb-6 md:mb-8">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                            <Globe size={14} className="text-gray-400" />
                            {['en', 'el', 'es'].map(l => (
                                <button key={l} onClick={() => setLang(l)}
                                    className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase transition-all ${lang === l ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}>
                                    {l}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">{t.heroTitle}</h1>
                                <div className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                    <Sparkles size={12} /> {t.heroBadge}
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                                {t.heroDesc} <span className="text-white font-medium">{t.heroHighlight}</span>{t.heroDesc2}
                            </p>
                        </div>

                        {/* Stats – hide on very small mobile */}
                        <div className="hidden sm:flex gap-6 md:gap-8 shrink-0">
                            {t.heroStats.map((s, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl md:text-3xl font-black text-white">{s.num}</div>
                                    <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ CONTENT ═══ */}
            <div className="px-4 sm:px-6 pb-16" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Filters */}
                <div className="mb-8 md:mb-12">
                    <FilterBar
                        category={category}
                        setCategory={handleCategoryChange}
                        searchQuery={searchQuery}
                        setSearchQuery={handleSearchChange}
                        totalItems={filteredDemos.length}
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {paginatedDemos.map((demo, index) => (
                        <div key={demo.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                            <TemplateCard demo={demo} />
                        </div>
                    ))}

                    {filteredDemos.length === 0 && (
                        <div className="col-span-full text-center py-16 sm:py-24">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 mb-4 text-gray-500"><Info size={28} /></div>
                            <h3 className="text-lg font-medium text-white mb-2">No templates found</h3>
                            <p className="text-gray-500 text-sm">Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>

                {/* ═══ PAGINATION ═══ */}
                {totalPages > 1 && (
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                        <span className="text-xs">{t.pageInfo(startItem, endItem, filteredDemos.length)}</span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="p-2 border border-gray-800 rounded-lg hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            ><ChevronLeft size={16} /></button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                                <button key={p} onClick={() => setCurrentPage(p)}
                                    className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${p === currentPage ? 'bg-green-600 text-white shadow-lg shadow-green-600/30' : 'border border-gray-800 hover:bg-gray-800 text-gray-500'}`}>
                                    {p}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="p-2 border border-gray-800 rounded-lg hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            ><ChevronRight size={16} /></button>
                        </div>
                    </div>
                )}

                {/* ═══ FAQ SECTION ═══ */}
                <div className="mt-32 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-center mb-12 text-white">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Can I clone these templates for new clients?', a: 'Yes! Each demo is a self-contained module. Simply duplicate the folder, rename it, and duplicate the route in App.jsx to start a new client project.' },
                            { q: 'Is the Admin Panel customizable?', a: 'Absolutely. The UniversalAdmin component is fully configuration-driven. You can toggle roles, change branding, KPIs, and define custom tabs with specific industry data.' },
                            { q: 'Are the images licensed?', a: 'The current images are from Unsplash (free for commercial use). For a real client, you would simply replace the URLs with their provided assets.' },
                            { q: 'How do I deploy a new client site?', a: 'These demos are part of a monorepo. For a dedicated client site, you can either deploy this entire suite or extract the specific demo folder into a fresh Vite project.' },
                            { q: 'Is it mobile responsive?', a: 'Yes, all 13 templates are built with a "mobile-first" approach using Tailwind CSS, ensuring 100% responsiveness on all devices.' }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
