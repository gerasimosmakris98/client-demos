import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import LawHero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Attorneys from './components/Attorneys';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import AIChat from '../../components/common/AIChat';

const LawDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return <UniversalAdmin config={{
            brandName: 'GM Law Partners',
            brandLogo: '⚖️',
            accentColor: 'slate',
            roles: [{ id: 'admin', label: 'Partner' }, { id: 'staff', label: 'Associate' }, { id: 'user', label: 'Paralegal' }],
            stats: [
                { label: 'Active Cases', value: '45', trend: 2 },
                { label: 'Consultations', value: '12', trend: 5 },
                { label: 'Billable Hours', value: '128', trend: 8 },
                { label: 'Doc Requests', value: '24', trend: -2 }
            ],
            kpis: [
                { label: 'Case Win Rate', value: '89%', progress: 89 },
                { label: 'Billing Collection', value: '94%', progress: 94 },
                { label: 'Client Satisfaction', value: '96%', progress: 96 }
            ]
        }} />;
    }

    return (
        <div style={{ fontFamily: "'Inter', sans-serif", color: '#0f172a' }}>
            <LawHero />
            <PracticeAreas />
            <Attorneys />
            <CaseStudies />
            <Testimonials />
            <Contact />
            <AIChat brandName="GM Law" />
        </div>
    );
};

export default LawDemo;
