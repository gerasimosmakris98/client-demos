import React, { useState } from 'react';
import { Info } from 'lucide-react';
import FilterBar from '../components/dashboard/FilterBar';
import TemplateCard from '../components/dashboard/TemplateCard';

const demos = [
    {
        id: 'premium-template',
        shortName: 'Premium',
        title: 'GM Premium SaaS',
        description: 'Dark-themed, high-conversion landing page with glassmorphism effects. Perfect for startups and modern software products.',
        category: 'SaaS',
        tags: ['React', 'Framer Motion', 'Glassmorphism'],
        gradient: 'from-blue-900 to-indigo-950',
        path: '/demos/premium-template',
        date: '2 months ago'
    },
    {
        id: 'cafe-greek',
        shortName: 'Cafe',
        title: 'GM Cafe',
        description: 'Modern coffee shop landing page with interactive menu, gallery, testimonials, location map and booking CTA.',
        category: 'Hospitality',
        tags: ['Hospitality', 'Menu', 'Gallery'],
        gradient: 'from-amber-900 to-orange-950',
        path: '/demos/cafe-greek',
        date: '1 month ago'
    },
    {
        id: 'hair-salon-greek',
        shortName: 'Salon',
        title: 'GM Salon',
        description: 'Elegant salon booking page with services, testimonials, booking flow and footer. Rose/blush color scheme.',
        category: 'Beauty',
        tags: ['Beauty', 'Services', 'Booking'],
        gradient: 'from-rose-900 to-pink-950',
        path: '/demos/hair-salon-greek',
        date: '3 weeks ago'
    },
    {
        id: 'law-office-greek',
        shortName: 'Law',
        title: 'GM Law Partners',
        description: 'Professional law office template with practice areas, attorneys, case studies, testimonials and contact form.',
        category: 'Business',
        tags: ['Legal', 'Corporate', 'Trust'],
        gradient: 'from-slate-800 to-slate-950',
        path: '/demos/law-office-greek',
        date: '2 weeks ago'
    },
    {
        id: 'tutoring-greek',
        shortName: 'Edu',
        title: 'GM Tutoring',
        description: 'Full education platform with multi-role dashboard (Admin/Teacher/Student), programs, pricing and AI chat.',
        category: 'Education',
        tags: ['Education', 'Portal', 'LMS'],
        gradient: 'from-emerald-900 to-teal-950',
        path: '/demos/tutoring-greek',
        date: '1 week ago'
    },
    {
        id: 'gym-greek',
        shortName: 'Gym',
        title: 'GM Gym',
        description: 'High-energy fitness center with dark/neon aesthetic. Programs, trainers, membership pricing and FAQ.',
        category: 'Fitness',
        tags: ['Fitness', 'Membership', 'Dark Mode'],
        gradient: 'from-lime-900 to-emerald-950',
        path: '/demos/gym-greek',
        date: '3 days ago'
    },
    {
        id: 'electrician-greek',
        shortName: 'Electric',
        title: 'GM Electric',
        description: 'Bold electrician/trades landing page with service highlights, emergency call CTA and trust badges.',
        category: 'Trades',
        tags: ['Trades', 'Services', 'Emergency'],
        gradient: 'from-orange-900 to-amber-950',
        path: '/demos/electrician-greek',
        date: '2 days ago'
    },
    {
        id: 'real-estate-greek',
        shortName: 'Estates',
        title: 'GM Estates',
        description: 'Luxury real estate agency showcase. Property listings, agent profiles and premium gold-on-black design.',
        category: 'Real Estate',
        tags: ['Real Estate', 'Luxury', 'Listings'],
        gradient: 'from-yellow-900 to-amber-950',
        path: '/demos/real-estate-greek',
        date: '2 days ago'
    },
    {
        id: 'medical-greek',
        shortName: 'Medical',
        title: 'GM Medical',
        description: 'Modern medical clinic with doctor profiles, specialties, appointment booking and patient-first design.',
        category: 'Healthcare',
        tags: ['Healthcare', 'Appointments', 'Trust'],
        gradient: 'from-teal-900 to-cyan-950',
        path: '/demos/medical-greek',
        date: '2 days ago'
    },
    {
        id: 'hotel-greek',
        shortName: 'Hotel',
        title: 'GM Hotel',
        description: 'Boutique hotel experience page with warm minimalist design, room showcase and reservation system.',
        category: 'Hospitality',
        tags: ['Hospitality', 'Luxury', 'Booking'],
        gradient: 'from-stone-800 to-stone-950',
        path: '/demos/hotel-greek',
        date: '2 days ago'
    },
    {
        id: 'accounting-greek',
        shortName: 'Accounting',
        title: 'GM Accounting',
        description: 'Professional accounting firm template with service packages, client testimonials and consultation booking.',
        category: 'Business',
        tags: ['Finance', 'Accounting', 'Corporate'],
        gradient: 'from-indigo-900 to-violet-950',
        path: '/demos/accounting-greek',
        date: 'Today'
    },
    {
        id: 'restaurant-greek',
        shortName: 'Restaurant',
        title: 'GM Restaurant',
        description: 'Fine dining restaurant with chef profiles, seasonal menu, reservation system and ambient dark theme.',
        category: 'Hospitality',
        tags: ['Hospitality', 'Fine Dining', 'Menu'],
        gradient: 'from-red-900 to-rose-950',
        path: '/demos/restaurant-greek',
        date: 'Today'
    },
    {
        id: 'studio-greek',
        shortName: 'Studio',
        title: 'GM Fitness Studio',
        description: 'Boutique fitness studio with class schedules, instructor profiles and membership plans.',
        category: 'Fitness',
        tags: ['Fitness', 'Yoga', 'Pilates'],
        gradient: 'from-purple-900 to-fuchsia-950',
        path: '/demos/studio-greek',
        date: 'Today'
    },
];

const Dashboard = () => {
    const [category, setCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredDemos = demos.filter(demo => {
        const matchCategory = category === 'All' || demo.category === category;
        const matchSearch = demo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            demo.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchCategory && matchSearch;
    });

    return (
        <div className="min-h-screen px-6 py-12" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {/* Portfolio Header */}
            <div className="mb-16 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                    <h1 className="text-5xl font-bold text-white font-playfair tracking-tight">Demo Templates</h1>
                    <div className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-wider">
                        Live Preview
                    </div>
                </div>
                <p className="text-gray-400 max-w-2xl text-lg leading-relaxed font-light">
                    A curated collection of <span className="text-white font-medium">production-ready templates</span>,
                    showcasing versatility in modern web development, industry-specific design, and user-centric architecture.
                </p>
            </div>

            {/* Filters */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <FilterBar
                    category={category}
                    setCategory={setCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredDemos.map((demo, index) => (
                    <div key={demo.id} className="animate-fade-in" style={{ animationDelay: `${0.15 + (index * 0.05)}s` }}>
                        <TemplateCard demo={demo} />
                    </div>
                ))}

                {filteredDemos.length === 0 && (
                    <div className="col-span-full text-center py-24">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4 text-gray-500">
                            <Info size={32} />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">No templates found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
