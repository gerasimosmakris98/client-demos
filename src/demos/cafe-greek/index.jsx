import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import CafeHero from './components/Hero';
import CafeAbout from './components/About';
import CafeMenu from './components/Menu';
import CafeGallery from './components/Gallery';
import CafeTestimonials from './components/Testimonials';
import CafeLocation from './components/Location';
import CafeFooter from './components/Footer';
import { ShoppingCart, Package, Clock, CreditCard } from 'lucide-react';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import AIChat from '../../components/common/AIChat';

const cafeTabs = [
    {
        id: 'orders', label: 'Orders', icon: ShoppingCart, columns: ['Order', 'Status', 'Items', 'Total'],
        rows: [['#301', 'Active', 'Cappuccino x2', '€8'], ['#302', 'Completed', 'Latte + Croissant', '€7.50'], ['#303', 'Pending', 'Iced Mocha', '€5'], ['#304', 'Active', 'Espresso x3', '€6'], ['#305', 'Completed', 'Flat White + Muffin', '€8.50']]
    },
    {
        id: 'inventory', label: 'Inventory', icon: Package, columns: ['Item', 'Status', 'Stock', 'Reorder'],
        rows: [['Arabica Beans', 'Active', '12 kg', 'No'], ['Oat Milk', 'Active', '8 L', 'No'], ['Croissants', 'Pending', '6 pcs', 'Yes'], ['Sugar Syrup', 'Active', '4 bottles', 'No'], ['Paper Cups', 'Pending', '50 pcs', 'Yes']]
    },
    {
        id: 'shifts', label: 'Shifts', icon: Clock, columns: ['Staff', 'Status', 'Shift', 'Hours'],
        rows: [['Maria K.', 'Active', 'Morning', '6h'], ['John D.', 'Active', 'Morning', '6h'], ['Elena P.', 'Scheduled', 'Afternoon', '5h'], ['George S.', 'Scheduled', 'Evening', '4h']]
    },
    {
        id: 'pos', label: 'POS', icon: CreditCard, columns: ['Transaction', 'Status', 'Method', 'Amount'],
        rows: [['#T-5501', 'Completed', 'Card', '€12.50'], ['#T-5502', 'Completed', 'Cash', '€4.00'], ['#T-5503', 'Completed', 'Card', '€8.00'], ['#T-5504', 'Pending', 'Card', '€15.50'], ['#T-5505', 'Completed', 'Mobile', '€6.00']]
    },
];

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
            ],
            customTabs: cafeTabs,
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
