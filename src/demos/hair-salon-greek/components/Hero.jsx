import React from 'react';
import { Scissors, Calendar } from 'lucide-react';

const SalonHero = () => {
    return (
        <section style={{
            height: '85vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop") center/cover',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.4)'
            }} />

            <div className="glass-panel animate-fade-in" style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                color: 'white',
                padding: '3rem',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
                maxWidth: '600px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: '#fca5a5' }}>
                    <Scissors size={48} strokeWidth={1.5} />
                </div>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 300,
                    letterSpacing: '0.15em',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    fontFamily: "'Playfair Display', serif",
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}>
                    Elite Styles
                </h1>
                <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)' }}>
                    Ανακαλύψτε την καλύτερη εκδοχή του εαυτού σας.
                </p>
                <button className="btn-primary" style={{
                    background: '#fca5a5',
                    color: '#450a0a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    margin: '0 auto',
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 15px rgba(252, 165, 165, 0.4)'
                }}>
                    <Calendar size={20} /> Κλείστε Ραντεβού
                </button>
            </div>
        </section>
    );
};

export default SalonHero;
