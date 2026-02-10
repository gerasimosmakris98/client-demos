import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: 'var(--space-md)'
        }}>
            {/* Background Ambience */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
                zIndex: 0,
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'var(--accent-secondary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%',
            }} />

            <div style={{
                maxWidth: '1200px',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-lg)',
                zIndex: 1,
                alignItems: 'center'
            }}>
                {/* Content */}
                <div className="animate-fade-in">
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        padding: '0.5rem 1rem',
                        borderRadius: '999px',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }} />
                        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>v2.0 Now Available</span>
                    </div>

                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Scale your <br />
                        <span style={{
                            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            position: 'relative'
                        }}>
                            Ambition
                        </span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        lineHeight: 1.6,
                        maxWidth: '500px'
                    }}>
                        The all-in-one platform designed to propel your business forward.
                        Beautiful analytics, powerful integrations, and seamless workflows.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Start Building <ArrowRight size={18} />
                        </button>
                        <button style={{
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.2)',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer',
                            fontWeight: 600
                        }}>
                            <Play size={18} fill="currentColor" /> Watch Demo
                        </button>
                    </div>
                </div>

                {/* Visual/Image Placeholder */}
                <div className="glass-panel animate-fade-in" style={{
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    animationDelay: '0.2s',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)'
                }}>
                    {/* Abstract Device UI */}
                    <div className="glass-panel" style={{
                        width: '90%',
                        height: 'auto',
                        aspectRatio: '16/10',
                        background: 'rgba(2, 8, 23, 0.4)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        position: 'relative',
                        overflow: 'hidden',
                        transform: 'rotateY(-12deg) rotateX(5deg)',
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                    }}>
                        <div style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.02)' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                        </div>
                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ height: '80px', background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }} />
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ flex: 1, height: '60px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }} />
                                <div style={{ flex: 1, height: '60px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }} />
                                <div style={{ flex: 1, height: '60px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }} />
                            </div>
                            <div style={{ height: '40px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', border: '1px dashed rgba(16, 185, 129, 0.3)', marginTop: '0.5rem' }} />
                        </div>

                        {/* Floating Element */}
                        <div className="animate-float" style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '-20px',
                            background: 'rgba(16, 185, 129, 0.9)',
                            color: '#020617',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            fontWeight: 700,
                            boxShadow: '0 10px 30px -5px rgba(16, 185, 129, 0.4)',
                            fontSize: '0.9rem',
                            backdropFilter: 'blur(4px)'
                        }}>
                            +245% Growth
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
