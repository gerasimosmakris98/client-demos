import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import CafeHero from './components/Hero';
import CafeAbout from './components/About';
import CafeMenu from './components/Menu';
import CafeGallery from './components/Gallery';
import CafeTestimonials from './components/Testimonials';
import CafeLocation from './components/Location';
import CafeFooter from './components/Footer';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import AIChat from '../../components/common/AIChat';

const CafeDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return <UniversalAdmin config={{
            brandName: 'GM Café',
            brandLogo: '☕',
            accentColor: 'rose',
            roles: [{ id: 'admin', label: 'Owner' }, { id: 'staff', label: 'Barista' }, { id: 'user', label: 'Cashier' }],
            stats: [
                { label: 'Daily Orders', value: '342', trend: 15 },
                { label: 'Revenue Today', value: '€1,250', trend: 10 },
                { label: 'Reservations', value: '12', trend: 2 },
                { label: 'Avg Ticket', value: '€8.50', trend: 4 }
            ],
            kpis: [
                { label: 'Prep Speed', value: '< 3 min', progress: 90 },
                { label: 'Customer Return', value: '68%', progress: 68 },
                { label: 'Waste Target', value: '-20%', progress: 72 }
            ]
        }} />;
    }

    return (
        <div style={{ background: '#0c0a09', minHeight: '100vh', color: '#e7e5e4', fontFamily: 'system-ui, sans-serif' }}>
            <CafeHero />
            <CafeAbout />
            <CafeMenu />
            <CafeGallery />
            <CafeTestimonials />
            <CafeLocation />
            <CafeFooter />
            <AIChat brandName="GM Cafe" />
        </div>
    );
};

export default CafeDemo;
