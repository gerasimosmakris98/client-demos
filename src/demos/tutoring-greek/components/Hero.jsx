import React from 'react';
import { BookOpen, Award } from 'lucide-react';

const TutoringHero = () => {
    return (
        <section style={{
            background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
            color: 'white',
            padding: '6rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Abstract Background Shapes */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50%',
                filter: 'blur(80px)'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-5%',
                width: '400px',
                height: '400px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '50%',
                filter: 'blur(60px)'
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem', alignItems: 'center', width: '100%', position: 'relative', zIndex: 1 }}>
                <div className="animate-fade-in glass-panel" style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(255,255,255,0.2)',
                        padding: '0.5rem 1rem',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        marginBottom: '1.5rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em'
                    }}>
                        <Award size={14} /> 100% ΕΠΙΤΥΧΙΑ
                    </div>

                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Χτίζουμε το <br />
                        <span style={{ color: '#fbbf24', textShadow: '0 2px 10px rgba(251, 191, 36, 0.4)' }}>Μέλλον</span> μαζί.
                    </h1>

                    <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: 1.6 }}>
                        Ολοκληρωμένο σύστημα εκπαίδευσης για μαθητές Γυμνασίου και Λυκείου.
                        Εξειδικευμένοι καθηγητές και σύγχρονα εποπτικά μέσα.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn-primary" style={{
                            padding: '1rem 2rem',
                            background: 'white',
                            color: '#4f46e5',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 700,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.5)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.3)'; }}
                        >
                            Εγγραφές 2025-26
                        </button>
                    </div>
                </div>

                {/* Hero Image/Illustration */}
                <div className="animate-fade-in" style={{ animationDelay: '0.2s', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: -20, background: 'rgba(255,255,255,0.2)', filter: 'blur(40px)', zIndex: 0, borderRadius: '50%' }} />
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
                        alt="Students studying"
                        style={{
                            width: '100%',
                            borderRadius: '24px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            transform: 'rotate(2deg)',
                            position: 'relative',
                            zIndex: 1,
                            border: '4px solid rgba(255,255,255,0.2)'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default TutoringHero;
