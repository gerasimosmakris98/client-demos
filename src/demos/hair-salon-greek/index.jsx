import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import SalonHero from './components/Hero';
import SalonServices from './components/Services';
import SalonTestimonials from './components/Testimonials';
import SalonBooking from './components/Booking';
import SalonFooter from './components/Footer';
import AdminMock from '../../components/demos/AdminMock';
import AIChat from '../../components/common/AIChat';

const SalonDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return <AdminMock
            title="Elite Styles"
            stats={[
                { label: 'Appointments', value: '28', trend: 5 },
                { label: 'Staff Active', value: '4/6', trend: 0 },
                { label: 'Revenue', value: '€890', trend: 8 },
                { label: 'New Clients', value: '6', trend: 12 }
            ]}
        />;
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
