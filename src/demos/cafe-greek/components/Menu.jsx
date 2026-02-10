import React from 'react';

const highlights = [
    {
        title: 'Espresso Blend',
        desc: 'Μοναδικό χαρμάνι 100% Arabica από Βραζιλία και Αιθιοπία.',
        price: '€ 2.50'
    },
    {
        title: 'Brunch Special',
        desc: 'Αυγά Benedict σε φρεσκοψημένο ψωμί brioche.',
        price: '€ 8.00'
    },
    {
        title: 'Signature Cocktails',
        desc: 'Χειροποίητα cocktails για τα βράδια σας.',
        price: 'από € 9.00'
    }
];

const CafeMenu = () => {
    return (
        <section style={{ padding: 'var(--space-xl) var(--space-md)', background: '#1c1917' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    marginBottom: '3rem',
                    fontFamily: "'Playfair Display', serif",
                    color: '#d4a373',
                    textShadow: '0 4px 10px rgba(0,0,0,0.3)'
                }}>
                    Οι Προτάσεις Μας
                </h2>

                <div className="glass-panel" style={{
                    padding: '3rem',
                    background: 'rgba(28, 25, 23, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(212, 163, 115, 0.2)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {highlights.map((item, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingBottom: '1.5rem',
                                borderBottom: index !== highlights.length - 1 ? '1px dashed rgba(212, 163, 115, 0.3)' : 'none'
                            }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff', fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                                    <p style={{ color: '#a8a29e', fontStyle: 'italic' }}>{item.desc}</p>
                                </div>
                                <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#d4a373' }}>
                                    {item.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CafeMenu;
