import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section style={{ padding: 'var(--space-xl) var(--space-md)', textAlign: 'center' }}>
            <div className="glass-panel" style={{
                maxWidth: '800px',
                margin: '0 auto',
                background: 'rgba(59, 130, 246, 0.1)',
                backdropFilter: 'blur(12px)',
                padding: 'var(--space-lg)',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                    Ready to get started?
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
                    Join thousands of developers building the future today. No credit card required.
                </p>

                <form style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto', alignItems: 'center' }} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        style={{
                            flex: 1,
                            padding: '0.875rem 1.5rem',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.3)',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                    <button className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                        Get Access
                    </button>
                </form>

                <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    By signing up, you agree to our Terms & Conditions.
                </p>
            </div>
        </section>
    );
};

export default Contact;
