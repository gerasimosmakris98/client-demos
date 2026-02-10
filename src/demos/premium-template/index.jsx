import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const PremiumTemplate = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return <UniversalAdmin config={{
            brandName: 'GM Premium SaaS',
            brandLogo: '🚀',
            accentColor: 'blue',
            roles: [{ id: 'admin', label: 'Admin' }, { id: 'staff', label: 'Developer' }, { id: 'user', label: 'Support' }],
            stats: [
                { label: 'Total Users', value: '24,593', trend: 12 },
                { label: 'MRR', value: '$45,200', trend: 8 },
                { label: 'Churn Rate', value: '1.2%', trend: -0.4 },
                { label: 'Active Sessions', value: '1,204', trend: 5 }
            ],
            kpis: [
                { label: 'Uptime SLA', value: '99.99%', progress: 99 },
                { label: 'NPS Score', value: '72', progress: 72 },
                { label: 'Feature Adoption', value: '64%', progress: 64 }
            ]
        }} />;
    }

    return (
        <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'white' }}>
            <Hero />
            <Features />
            <Pricing />
            <Contact />

            {/* Footer removed for DemoLayout */}
        </div>
    );
};

export default PremiumTemplate;
