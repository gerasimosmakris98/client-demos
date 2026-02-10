import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft, MoreVertical, Info, Smartphone, LayoutDashboard, Monitor, ShieldCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DemoLayout = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDisclaimer, setShowDisclaimer] = useState(true);
    const [viewMode, setViewMode] = useState('desktop'); // desktop, mobile, admin
    const location = useLocation();

    // Determine current template ID/Name based on URL
    const templateId = location.pathname.split('/demos/')[1] || 'unknown-template';

    // Auto-hide disclaimer after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => setShowDisclaimer(false), 8000);
        return () => clearTimeout(timer);
    }, []);

    // Dynamic Palette Injection
    useEffect(() => {
        const root = document.documentElement;
        switch (templateId) {
            case 'cafe-greek':
                root.style.setProperty('--primary', '#d4a373'); // Amber/Brown
                root.style.setProperty('--secondary', '#78350f');
                root.style.setProperty('--accent', '#fcd34d');
                break;
            case 'hair-salon-greek':
                root.style.setProperty('--primary', '#be123c'); // Rose
                root.style.setProperty('--secondary', '#881337');
                root.style.setProperty('--accent', '#fda4af');
                break;
            case 'law-office-greek':
                root.style.setProperty('--primary', '#ca8a04'); // Gold
                root.style.setProperty('--secondary', '#0f172a'); // Slate
                root.style.setProperty('--accent', '#eab308');
                break;
            case 'tutoring-greek':
                root.style.setProperty('--primary', '#059669'); // Emerald
                root.style.setProperty('--secondary', '#064e3b');
                root.style.setProperty('--accent', '#34d399');
                break;
            default: // Premium / Default
                root.style.setProperty('--primary', '#3b82f6'); // Blue
                root.style.setProperty('--secondary', '#1d4ed8');
                root.style.setProperty('--accent', '#60a5fa');
        }
    }, [templateId]);

    return (
        <div className="relative min-h-screen">
            {/* --- Overlay UI --- */}

            {/* Top Left: Back */}
            <div className="fixed top-4 left-4 z-50">
                <Link to="/" className="glass-panel p-3 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" title="Back to Studio">
                    <ArrowLeft size={20} className="text-white" />
                </Link>
            </div>

            {/* Top Right: Menu */}
            <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="glass-panel p-3 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                    <MoreVertical size={20} className="text-white" />
                </button>

                <AnimatePresence>
                    {showMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            className="absolute right-0 mt-2 w-72 glass-panel rounded-xl border border-white/10 overflow-hidden shadow-2xl"
                            style={{ background: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(20px)' }}
                        >
                            <div className="p-4 border-b border-white/10">
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Template Info</h3>
                                <p className="text-white font-medium truncate">{templateId.replace(/-/g, ' ').toUpperCase()}</p>
                                <p className="text-xs text-gray-500 mt-1">ID: {templateId}</p>
                            </div>

                            <div className="p-2">
                                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-left" onClick={() => setViewMode('desktop')}>
                                    <Monitor size={18} /> Desktop View
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-left" onClick={() => setViewMode('mobile')}>
                                    <Smartphone size={18} /> Mobile App (PWA)
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-left" onClick={() => setViewMode('admin')}>
                                    <LayoutDashboard size={18} /> Admin View
                                </button>
                            </div>

                            <div className="p-4 bg-white/5 text-xs text-gray-400">
                                <div className="flex items-start gap-2">
                                    <Info size={14} className="mt-0.5 shrink-0" />
                                    <p>This is a demonstration template. All data is randomized for display purposes.</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom: Watermark */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                <div className="glass-panel px-4 py-2 rounded-full text-xs font-medium text-white/50 border border-white/5" style={{ background: 'rgba(0,0,0,0.6)' }}>
                    Designed by Gerasimos Makris
                </div>
            </div>

            {/* Disclaimer Toast */}
            <AnimatePresence>
                {showDisclaimer && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
                    >
                        <div className="glass-panel p-4 rounded-xl flex items-start gap-3 border border-yellow-500/30 bg-black/80">
                            <ShieldCheck className="text-yellow-500 shrink-0" size={20} />
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-white mb-1">Demo Environment</h4>
                                <p className="text-xs text-gray-400">
                                    You are viewing a fully customized template populated with sample data.
                                    Everything you see is configurable.
                                </p>
                            </div>
                            <button onClick={() => setShowDisclaimer(false)} className="text-gray-500 hover:text-white">
                                <X size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Content Area --- */}
            <div className={`relative transition-all duration-500 ${viewMode === 'mobile' ? 'max-w-md mx-auto border-x border-gray-800 shadow-2xl min-h-screen my-8 overflow-hidden rounded-[40px]' : ''}`}>
                <Outlet context={{ viewMode }} />
            </div>

            {/* Mobile Frame Decoration (only visible in mobile mode) */}
            {viewMode === 'mobile' && (
                <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
                    {/* Can add phone bezel frame here later if needed */}
                </div>
            )}
        </div>
    );
};

export default DemoLayout;
