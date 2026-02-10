import React, { useState } from 'react';
import { Info } from 'lucide-react';
import FilterBar from '../components/dashboard/FilterBar';
import TemplateCard from '../components/dashboard/TemplateCard';

const demos = [
    {
        id: 'premium-template',
        shortName: 'Premium',
        title: 'Premium SaaS Template',
        description: 'A dark-themed, high-conversion landing page with glassmorphism effects. Perfect for startups and modern software products.',
        category: 'SaaS',
        tags: ['React', 'Framer Motion', 'Glassmorphism'],
        gradient: 'from-blue-900 to-indigo-950',
        path: '/demos/premium-template',
        date: '2 months ago'
    },
    {
        id: 'cafe-greek',
        shortName: 'Aroma',
        title: 'Aroma Cafe (Greek)',
        description: 'Modern coffee shop landing page with interactive menu highlights, location showcase, and a warm, inviting aesthetic.',
        category: 'Hospitality',
        tags: ['Hospitality', 'Menu', 'Gallery'],
        gradient: 'from-amber-900 to-orange-950',
        path: '/demos/cafe-greek',
        date: '1 month ago'
    },
    {
        id: 'hair-salon-greek',
        shortName: 'Style',
        title: 'Elite Styles - Hair Salon',
        description: 'Elegant salon booking overview page with services list, pricing transparency, and booking call-to-actions.',
        category: 'Business',
        tags: ['Beauty', 'Services', 'Booking'],
        gradient: 'from-rose-900 to-pink-950',
        path: '/demos/hair-salon-greek',
        date: '3 weeks ago'
    },
    {
        id: 'law-office-greek',
        shortName: 'Legal',
        title: 'Nomiki Symvouleftiki',
        description: 'Professional law office template establishing trust and authority. Features practice areas and team introduction.',
        category: 'Business',
        tags: ['Legal', 'Corporate', 'Trust'],
        gradient: 'from-slate-800 to-slate-950',
        path: '/demos/law-office-greek',
        date: '2 weeks ago'
    },
    {
        id: 'tutoring-greek',
        shortName: 'Edu',
        title: 'Frontistirio Prooptiki',
        description: 'Education center landing page highlighting student success stories, portal management access, and course listings.',
        category: 'Education',
        tags: ['Education', 'Portal', 'LMS'],
        gradient: 'from-emerald-900 to-teal-950',
        path: '/demos/tutoring-greek',
        date: '1 week ago'
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
            <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <h1 className="text-4xl font-bold text-green-500 font-playfair">Demo Templates</h1>
                    <Info className="text-gray-500" size={20} />
                </div>
                <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                    A curated collection of production-ready templates, showcasing versatility in modern web development,
                    industry-specific design, and user-centric architecture.
                </p>
            </div>

            {/* Filters */}
            <FilterBar
                category={category}
                setCategory={setCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDemos.map(demo => (
                    <TemplateCard key={demo.id} demo={demo} />
                ))}

                {filteredDemos.length === 0 && (
                    <div className="col-span-full text-center py-20 text-gray-500">
                        No templates found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
