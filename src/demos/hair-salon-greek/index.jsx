import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import SalonHero from './components/Hero';
import SalonServices from './components/Services';
import SalonTestimonials from './components/Testimonials';
import SalonBooking from './components/Booking';
import SalonFooter from './components/Footer';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import AIChat from '../../components/common/AIChat';

const SalonDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return <UniversalAdmin config={{
            brandName: 'GM Salon',
            brandLogo: '✂️',
            accentColor: 'rose',
            roles: [{ id: 'admin', label: 'Owner' }, { id: 'staff', label: 'Stylist' }, { id: 'user', label: 'Receptionist' }],
            stats: [
                { label: 'Appointments', value: '28', trend: 5 },
                { label: 'Staff Active', value: '4/6', trend: 0 },
                { label: 'Revenue', value: '€890', trend: 8 },
                { label: 'New Clients', value: '6', trend: 12 }
            ],
            kpis: [
                { label: 'Client Satisfaction', value: '98%', progress: 98 },
                { label: 'Rebooking Rate', value: '72%', progress: 72 },
                { label: 'Product Sales', value: '€340', progress: 56 }
            ]
        }} />;
    }

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }}>
            <SalonHero />
            <SalonServices />
            <SalonTestimonials />
            <SalonBooking />
            <SalonFooter />
            <AIChat brandName="GM Salon" />
        </div>
    );
};

export default SalonDemo;
