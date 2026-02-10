import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, MessageCircle, Instagram, Facebook, ShieldCheck, Search, Bell } from 'lucide-react';

const MainLayout = ({ children }) => {
    const location = useLocation();
    const isDashboard = location.pathname === '/';
    const currentYear = new Date().getFullYear();

    return (
        <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* Branded Header */}
            <header className="glass-header" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 9999,
                padding: '0 2rem',
                height: '4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(2, 8, 23, 0.85)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(255,255,255,0.08)'
            }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <span style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: '1.75rem',
                            fontWeight: 900,
                            color: 'white',
                            letterSpacing: '-0.05em'
                        }}>GM</span>
                    </Link>
                </div>

                {/* Simplified Nav - Just Contact */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <a href="https://g-makris.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Main Site
                    </a>
                </nav>
            </header>

            {/* Main Content */}
            <main style={{ flex: 1, marginTop: '5rem' }}>
                {children}
            </main>

            {/* Watermark Overlay (Only on demos - handled by DemoLayout now, keeping just in case or removing if redundant) */}

            {/* Standard Footer */}
            <footer style={{ background: '#020617', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 2rem' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>

                    <div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white' }}>GM</div>
                        <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                            AI Web Developer & FinTech Specialist
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: '#94a3b8' }}>
                        <a href="https://g-makris.com/portfolio" className="hover:text-white transition-colors">Portfolio</a>
                        <a href="https://g-makris.com/services" className="hover:text-white transition-colors">Services</a>
                        <a href="https://g-makris.com/contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>

                <div style={{
                    maxWidth: '1400px',
                    margin: '2rem auto 0',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    textAlign: 'center',
                    color: '#475569',
                    fontSize: '0.8rem'
                }}>
                    <span>&copy; {currentYear} Gerasimos Makris. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
