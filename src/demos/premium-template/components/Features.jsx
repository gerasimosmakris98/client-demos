import React from 'react';
import { Zap, Shield, BarChart3, Globe, Layers, Command } from 'lucide-react';

const features = [
    {
        icon: <Zap size={24} />,
        title: 'Lightning Fast',
        description: 'Optimized for speed with edge-caching and minimal latency.'
    },
    {
        icon: <Shield size={24} />,
        title: 'Bank-Grade Security',
        description: 'Enterprise-ready encryption and compliance out of the box.'
    },
    {
        icon: <BarChart3 size={24} />,
        title: 'Real-time Analytics',
        description: 'Deep insights into your user behavior and conversion metrics.'
    },
    {
        icon: <Globe size={24} />,
        title: 'Global Scale',
        description: 'Deploy instantly to 35+ regions worldwide with one click.'
    },
    {
        icon: <Layers size={24} />,
        title: 'Seamless Integration',
        description: 'Works with your existing stack via powerful APIs and webhooks.'
    },
    {
        icon: <Command size={24} />,
        title: 'Command Palace',
        description: 'Keyboard-first navigation for power users and rapid workflows.'
    }
];

const Features = () => {
    return (
        <section style={{ padding: 'var(--space-xl) var(--space-md)', background: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                        Built for <span style={{ color: 'var(--accent-primary)' }}>Modern Teams</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                        Everything you need to launch and scale your next big idea.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {features.map((feature, index) => (
                        <div key={index} className="glass-panel" style={{
                            padding: '2rem',
                            transition: 'transform 0.3s, background 0.3s',
                            cursor: 'default',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                            }}
                        >
                            <div style={{
                                color: 'var(--accent-primary)',
                                background: 'rgba(59, 130, 246, 0.1)',
                                width: 'fit-content',
                                padding: '0.75rem',
                                borderRadius: '12px'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
