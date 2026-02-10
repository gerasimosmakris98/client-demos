import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github } from 'lucide-react';

const MainLayout = ({ children }) => {
    const location = useLocation();
    const currentYear = new Date().getFullYear();

    return (
        <div className="relative min-h-screen flex flex-col">

            {/* Branded Header */}
            <header className="fixed top-0 left-0 w-full z-[9999] px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between"
                style={{ background: 'rgba(2, 8, 23, 0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 no-underline">
                    <span className="font-playfair text-xl sm:text-2xl font-black text-white tracking-tight">GM</span>
                    <span className="hidden sm:inline text-xs text-gray-500 font-medium">Client Demos</span>
                </Link>

                {/* Nav */}
                <nav className="flex items-center gap-2 sm:gap-4">
                    <a href="https://github.com/gerasimosmakris98/client-demos" target="_blank" rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="https://g-makris.com" target="_blank" rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        g-makris.com
                    </a>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1 mt-14 sm:mt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-8 sm:py-12 px-4 sm:px-6" style={{ background: '#020617' }}>
                <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-4 text-center">
                    <div>
                        <div className="font-playfair text-lg font-bold text-white mb-1">GM</div>
                        <p className="text-gray-500 text-xs sm:text-sm">AI Web Developer & FinTech Specialist</p>
                    </div>

                    <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                        <a href="https://g-makris.com/portfolio" className="hover:text-white transition-colors">Portfolio</a>
                        <a href="https://g-makris.com/services" className="hover:text-white transition-colors">Services</a>
                        <a href="https://g-makris.com/contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>

                <div className="max-w-[1400px] mx-auto mt-6 pt-6 border-t border-white/5 text-center">
                    <span className="text-gray-600 text-[10px] sm:text-xs">&copy; {currentYear} Gerasimos Makris. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
