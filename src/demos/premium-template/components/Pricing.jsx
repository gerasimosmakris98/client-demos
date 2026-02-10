import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '$29',
        description: 'Perfect for side projects and small teams.',
        features: ['Up to 5 users', 'Basic Analytics', '24/7 Support', '10GB Storage'],
        highlight: false
    },
    {
        name: 'Pro',
        price: '$99',
        description: 'For growing businesses requiring power.',
        features: ['Unlimited users', 'Advanced Analytics', 'Priority Support', '1TB Storage', 'Custom Domain'],
        highlight: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Tailored solutions for large scale needs.',
        features: ['Dedicated Manager', 'SSO & Audit Logs', 'SLA Guarantee', 'Unlimited Storage', 'On-premise deployment'],
        highlight: false
    }
];

const Pricing = () => {
    return (
        <section style={{ padding: 'var(--space-xl) var(--space-md)', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                        Simple, Transparent <span style={{ color: 'var(--accent-primary)' }}>Pricing</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
                        No hidden fees. Cancel anytime.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                    {plans.map((plan, index) => (
                        <div key={index} className="glass-panel" style={{
                            padding: '2.5rem',
                            background: plan.highlight ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255,255,255,0.02)',
                            border: plan.highlight ? '1px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.08)',
                            transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
                            position: 'relative',
                            zIndex: plan.highlight ? 10 : 1
                        }}>
                            {plan.highlight && (
                                <div style={{
                                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                                    background: 'var(--accent-primary)', color: 'white', padding: '4px 12px',
                                    borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold'
                                }}>
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{plan.name}</h3>
                            <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
                                {plan.price}<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/mo</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{plan.description}</p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                        <Check size={18} style={{ color: 'var(--accent-primary)' }} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: 'none',
                                background: plan.highlight ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                                color: 'white',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                            }}
                                onMouseEnter={(e) => {
                                    if (!plan.highlight) e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                                    else e.currentTarget.style.filter = 'brightness(110%)';
                                }}
                                onMouseLeave={(e) => {
                                    if (!plan.highlight) e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                    else e.currentTarget.style.filter = 'brightness(100%)';
                                }}
                            >
                                {plan.highlight ? 'Get Started' : 'Choose Plan'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
