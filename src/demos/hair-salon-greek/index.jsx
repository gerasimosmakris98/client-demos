import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import SalonHero from './components/Hero';
import SalonServices from './components/Services';
import SalonTestimonials from './components/Testimonials';
import SalonBooking from './components/Booking';
import SalonFooter from './components/Footer';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import AIChat from '../../components/common/AIChat';
import { Users, CalendarDays, Scissors, Package } from 'lucide-react';

const salonTabs = [
    {
        id: 'clients', label: 'Clients', icon: Users, columns: ['Client', 'Status', 'Last Visit', 'Stylist'],
        rows: [['Maria K.', 'Active', '2 days ago', 'Elena'], ['Sofia P.', 'Active', '1 week ago', 'Katerina'], ['Anna M.', 'Active', '3 days ago', 'Elena'], ['Dimitra G.', 'Pending', 'New client', '--'], ['Ioanna D.', 'Active', '2 weeks ago', 'Sofia']]
    },
    {
        id: 'appointments', label: 'Appointments', icon: CalendarDays, columns: ['Client', 'Status', 'Service', 'Time'],
        rows: [['Maria K.', 'Confirmed', 'Cut & Color', '10:00'], ['Sofia P.', 'Confirmed', 'Blowout', '11:00'], ['Anna M.', 'In Progress', 'Highlights', '09:30'], ['Dimitra G.', 'Pending', 'Consultation', '14:00'], ['Ioanna D.', 'Scheduled', 'Keratin', '15:30']]
    },
    {
        id: 'stylists', label: 'Stylists', icon: Scissors, columns: ['Stylist', 'Status', 'Clients Today', 'Rating'],
        rows: [['Elena A.', 'Active', '6', '4.9★'], ['Katerina M.', 'Active', '5', '4.8★'], ['Sofia T.', 'Active', '4', '4.7★'], ['Maria P.', 'Pending', 'Day off', '4.9★']]
    },
    {
        id: 'products', label: 'Products', icon: Package, columns: ['Product', 'Status', 'Stock', 'Price'],
        rows: [['Olaplex No.3', 'Active', '12', '€28'], ['Color WOW', 'Active', '8', '€22'], ['Moroccanoil', 'Pending', '2 left', '€35'], ['Dyson Brush', 'Active', '5', '€45'], ['Redken Shampoo', 'Active', '15', '€18']]
    },
];

const SalonDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Admin view removed - consolidated to Universal Admin demo

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
