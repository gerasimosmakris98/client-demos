import React from 'react';
import { Scale, ArrowRight } from 'lucide-react';

const LawHero = () => {
    return (
        <section style={{
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.7)), url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2612&auto=format&fit=crop") center/cover',
            color: 'white',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', width: '100%' }}>
                <div className="animate-fade-in glass-panel" style={{
                    maxWidth: '700px',
                    padding: '3rem',
                    background: 'rgba(10, 25, 47, 0.6)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(197, 160, 89, 0.2)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#c5a059' }}>
                        <Scale size={32} />
                        <span style={{ letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem' }}>Νομικη Συμβουλευτικη</span>
                    </div>

                    <h1 style={{
                        fontSize: '3.5rem',
                        fontFamily: "'Playfair Display', serif",
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        fontWeight: 700,
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                    }}>
                        Δικαιοσύνη με <br />
                        <span style={{ color: '#c5a059', borderBottom: '3px solid #c5a059' }}>Ακεραιότητα</span>
                    </h1>

                    <p style={{ fontSize: '1.15rem', color: '#cbd5e1', marginBottom: '3rem', lineHeight: 1.6 }}>
                        Προστατεύουμε τα δικαιώματά σας με εμπειρία 25 ετών.
                        Εξειδικευμένες νομικές υπηρεσίες για ιδιώτες και επιχειρήσεις.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <button className="btn-primary" style={{
                            padding: '1rem 2rem',
                            background: '#c5a059',
                            color: '#0a192f',
                            border: 'none',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            borderRadius: '4px',
                            boxShadow: '0 4px 15px rgba(197, 160, 89, 0.3)'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(197, 160, 89, 0.5)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(197, 160, 89, 0.3)'; }}
                        >
                            Δωρεάν Συμβουλή <ArrowRight size={18} />
                        </button>
                        <button style={{
                            padding: '1rem 2rem',
                            background: 'transparent',
                            color: '#c5a059',
                            border: '1px solid #c5a059',
                            fontWeight: 600,
                            cursor: 'pointer',
                            borderRadius: '4px',
                            transition: 'all 0.2s'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(197, 160, 89, 0.1)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                        >
                            Οι Υπηρεσίες Μας
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LawHero;
