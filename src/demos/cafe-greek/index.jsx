import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import CafeHero from './components/Hero';
import CafeMenu from './components/Menu';
import CafeGallery from './components/Gallery';
import AdminMock from '../../components/demos/AdminMock';

const CafeDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return <AdminMock
            title="Aroma Cafe"
            stats={[
                { label: 'Daily Orders', value: '342', trend: 15 },
                { label: 'Revenue Today', value: '€1,250', trend: 10 },
                { label: 'Reservations', value: '12', trend: 2 },
                { label: 'Avg Ticket', value: '€8.50', trend: 4 }
            ]}
        />;
    }

    return (
        <div style={{ background: '#0c0a09', minHeight: '100vh', color: '#e7e5e4', fontFamily: 'system-ui, sans-serif' }}>
            <CafeHero />
            <CafeMenu />
            <CafeGallery />
        </div>
    );
};

export default CafeDemo;
