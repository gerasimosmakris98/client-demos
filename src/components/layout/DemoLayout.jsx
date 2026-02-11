import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft, Info, Smartphone, LayoutDashboard, Monitor, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

const DemoLayout = () => {
    const { language } = useLanguage();
    const [showMenu, setShowMenu] = useState(false);
    const [viewMode, setViewMode] = useState('desktop');
    const location = useLocation();

    const templateId = location.pathname.split('/demos/')[1] || 'unknown-template';
    const templateName = templateId.replace(/-/g, ' ');

    // Dynamic palette
    useEffect(() => {
        const root = document.documentElement;
        const palettes = {
            'cafe-greek': ['#d4a373', '#78350f', '#fcd34d'],
            'hair-salon-greek': ['#be123c', '#881337', '#fda4af'],
            'law-office-greek': ['#ca8a04', '#0f172a', '#eab308'],
            'tutoring-greek': ['#059669', '#064e3b', '#34d399'],
            'gym-greek': ['#65a30d', '#1a2e05', '#a3e635'],
            'electrician-greek': ['#ea580c', '#431407', '#fb923c'],
            'real-estate-greek': ['#d97706', '#451a03', '#fbbf24'],
            'medical-greek': ['#0d9488', '#042f2e', '#2dd4bf'],
            'hotel-greek': ['#a8a29e', '#1c1917', '#d6d3d1'],
            'accounting-greek': ['#6366f1', '#1e1b4b', '#818cf8'],
            'restaurant-greek': ['#dc2626', '#450a0a', '#f87171'],
            'studio-greek': ['#c026d3', '#4a044e', '#e879f9'],
        };
        const [p, s, a] = palettes[templateId] || ['#3b82f6', '#1d4ed8', '#60a5fa'];
        root.style.setProperty('--primary', p);
        root.style.setProperty('--secondary', s);
        root.style.setProperty('--accent', a);
    }, [templateId]);

    return (
        <div className="relative min-h-screen">
            {/* ═══ MOBILE-FRIENDLY TOP BAR ═══ */}
            <div className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-4 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-white/10 shadow-2xl backdrop-blur-xl bg-black/80 max-w-[95vw]">

                {/* Back */}
                <Link to="/" className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors shrink-0" title="Back">
                    <ArrowLeft size={16} />
                </Link>

                <div className="w-px h-4 bg-white/10 hidden sm:block" />

                {/* Template name — truncated on mobile */}
                <div className="flex-col px-1 sm:px-2 hidden min-[400px]:flex">
                    <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide uppercase truncate max-w-[100px] sm:max-w-[180px]">
                        {templateName}
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-gray-500 font-mono">
                        {viewMode.toUpperCase()}
                    </span>
                </div>

                <div className="w-px h-4 bg-white/10" />

                {/* View toggles */}
                <div className="flex items-center gap-0.5 sm:gap-1 bg-white/5 rounded-full p-0.5 sm:p-1">
                    {[
                        { mode: 'desktop', icon: Monitor, label: 'Desktop' },
                        { mode: 'mobile', icon: Smartphone, label: 'Mobile' }
                    ].map(({ mode, icon: Icon, label }) => (
                        <button key={mode}
                            onClick={() => setViewMode(mode)}
                            className={`p-1 sm:p-1.5 rounded-full transition-all ${viewMode === mode ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                            title={label}
                        >
                            <Icon size={12} className="sm:w-[14px] sm:h-[14px]" />
                        </button>
                    ))}
                </div>

                <div className="w-px h-4 bg-white/10" />

                {/* Info */}
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors relative shrink-0"
                >
                    <Info size={16} />
                    {showMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="absolute right-0 top-full mt-3 w-56 sm:w-64 rounded-xl border border-white/10 overflow-hidden shadow-2xl p-4 text-left"
                            style={{ background: 'rgba(10, 10, 10, 0.95)' }}
                        >
                            <h4 className="text-white font-bold mb-1 text-sm">About this Demo</h4>
                            <p className="text-[10px] sm:text-xs text-gray-400 mb-4 leading-relaxed">
                                Fully responsive & customizable. Built with React, Tailwind CSS, and Framer Motion.
                            </p>
                            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                                <span className="text-[10px] text-gray-500">Created for you</span>
                                <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 rounded text-green-400 text-[10px] font-bold border border-green-500/20">
                                    <ShieldCheck size={10} /> GM Certified
                                </div>
                            </div>
                        </motion.div>
                    )}
                </button>
            </div>

            {/* ═══ CONTENT ═══ */}
            <div className={`relative transition-all duration-500 ${viewMode === 'mobile' ? 'max-w-md mx-auto border-x border-gray-800 shadow-2xl min-h-screen my-8 overflow-hidden rounded-[40px]' : ''}`}>
                <Outlet context={{ viewMode, language }} />
            </div>
        </div>
    );
};

export default DemoLayout;
