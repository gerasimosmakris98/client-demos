import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import LawHero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import AdminMock from '../../components/demos/AdminMock';

const LawDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return <AdminMock
            title="Legal Partners"
            stats={[
                { label: 'Active Cases', value: '45', trend: 2 },
                { label: 'Consultations', value: '12', trend: 5 },
                { label: 'Billable Hours', value: '128', trend: 8 },
                { label: 'Doc Requests', value: '24', trend: -2 }
            ]}
        />;
    }

    return (
        <div style={{ fontFamily: "'Inter', sans-serif", color: '#0f172a' }}>
            <LawHero />
            <PracticeAreas />

            <section style={{ padding: '4rem 2rem', background: '#0a192f', color: 'white' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '2rem' }}>
                        Εμπιστευθείτε την υπόθεσή σας σε εμάς
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}>
                            <Phone color="#c5a059" /> <span>210 9876543</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}>
                            <Mail color="#c5a059" /> <span>law@office.gr</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LawDemo;
