import React from 'react';
import { Briefcase, Users, Home, ShieldCheck } from 'lucide-react';

const practices = [
    {
        icon: <Briefcase size={32} />,
        title: 'Εταιρικό Δίκαιο',
        desc: 'Συμβουλές για συστάσεις εταιρειών, συγχωνεύσεις και εμπορικές συμφωνίες.'
    },
    {
        icon: <Users size={32} />,
        title: 'Οικογενειακό Δίκαιο',
        desc: 'Διαζύγια, επιμέλεια τέκνων και διατροφές με διακριτικότητα και σεβασμό.'
    },
    {
        icon: <Home size={32} />,
        title: 'Ακίνητα & Real Estate',
        desc: 'Έλεγχοι τίτλων, μισθώσεις και αγοραπωλησίες ακινήτων.'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: 'Ποινικό Δίκαιο',
        desc: 'Υπεράσπιση σε κάθε στάδιο της ποινικής διαδικασίας.'
    }
];

const PracticeAreas = () => {
    return (
        <section style={{ padding: '6rem 2rem', background: '#0f172a' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontFamily: "'Playfair Display', serif",
                        color: '#f8fafc',
                        marginBottom: '1rem'
                    }}>
                        Τομείς Εξειδίκευσης
                    </h2>
                    <div style={{ width: '60px', height: '3px', background: '#c5a059', margin: '0 auto' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {practices.map((item, index) => (
                        <div key={index} className="glass-panel" style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            padding: '2.5rem',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            transition: 'all 0.3s',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                e.currentTarget.style.borderColor = '#c5a059';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                            }}
                        >
                            <div style={{ color: '#c5a059', marginBottom: '1.5rem' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#f8fafc', fontWeight: 700 }}>
                                {item.title}
                            </h3>
                            <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
