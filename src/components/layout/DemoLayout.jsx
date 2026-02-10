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

            {/* --- New Top Glassmorphic Menu Bar --- */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 p-2 rounded-full border border-white/10 shadow-2xl backdrop-blur-xl bg-black/80">

                {/* Back to Studio */}
                <Link to="/" className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title="Back to Studio">
                    <ArrowLeft size={18} />
                </Link>

                <div className="w-px h-4 bg-white/10"></div>

                {/* Template Info */}
                <div className="flex flex-col px-2">
                    <span className="text-xs font-bold text-white tracking-wide uppercase">
                        {templateId.replace(/-/g, ' ')}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">
                        v1.0.0 • {viewMode.toUpperCase()}
                    </span>
                </div>

                <div className="w-px h-4 bg-white/10"></div>

                {/* View Toggles */}
                <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
                    <button
                        onClick={() => setViewMode('desktop')}
                        className={`p-1.5 rounded-full transition-all ${viewMode === 'desktop' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                        title="Desktop View"
                    >
                        <Monitor size={14} />
                    </button>
                    <button
                        onClick={() => setViewMode('mobile')}
                        className={`p-1.5 rounded-full transition-all ${viewMode === 'mobile' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                        title="Mobile View"
                    >
                        <Smartphone size={14} />
                    </button>
                    <button
                        onClick={() => setViewMode('admin')}
                        className={`p-1.5 rounded-full transition-all ${viewMode === 'admin' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                        title="Admin View"
                    >
                        <LayoutDashboard size={14} />
                    </button>
                </div>

                <div className="w-px h-4 bg-white/10"></div>

                {/* Actions */}
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors relative"
                >
                    <Info size={18} />
                    {showMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            className="absolute right-0 top-full mt-4 w-64 glass-panel rounded-xl border border-white/10 overflow-hidden shadow-2xl p-4 text-left"
                            style={{ background: 'rgba(10, 10, 10, 0.95)' }}
                        >
                            <h4 className="text-white font-bold mb-1">About this Demo</h4>
                            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                                This template is fully responsive and customizable. It uses React, Tailwind CSS, and Framer Motion.
                            </p>

                            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                                <span className="text-[10px] text-gray-500">Created for you</span>
                                <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 rounded text-green-400 text-[10px] font-bold border border-green-500/20">
                                    <ShieldCheck size={10} />
                                    GM Certified
                                </div>
                            </div>
                        </motion.div>
                    )}
                </button>

                <div className="pl-2 pr-1">
                    <img src="/favicon.svg" alt="GM" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" />
                </div>
            </div>

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
