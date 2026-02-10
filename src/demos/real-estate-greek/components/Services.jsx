import React from 'react';

const services = [
    { name: 'Γυναικείο Κούρεμα', price: '€25', time: '45\'' },
    { name: 'Ανδρικό Κούρεμα', price: '€18', time: '30\'' },
    { name: 'Βαφή Ρίζα', price: '€35', time: '60\'' },
    { name: 'Balayage / Ombre', price: '€90+', time: '180\'' },
    { name: 'Θεραπεία Κερατίνης', price: '€50', time: '90\'' },
    { name: 'Χτένισμα Βραδινό', price: '€30', time: '45\'' },
];

const SalonServices = () => {
    return (
        <section style={{ padding: '6rem 2rem', background: '#450a0a', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, rgba(0,0,0,0.3), transparent 70%)' }}></div>
            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <h2 style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    marginBottom: '3rem',
                    fontFamily: "'Playfair Display', serif",
                    color: '#fff',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}>
                    Υπηρεσίες
                </h2>

                <div className="glass-panel" style={{
                    padding: '3rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
                }}>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {services.map((service, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                paddingBottom: '1rem',
                                color: 'white'
                            }}>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'white' }}>{service.name}</h3>
                                    <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>{service.time}</span>
                                </div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fca5a5' }}>
                                    {service.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SalonServices;
