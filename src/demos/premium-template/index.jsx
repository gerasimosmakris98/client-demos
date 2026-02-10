import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import { Users, BarChart3, CreditCard, Code2 } from 'lucide-react';

const configs = {
    saas: {
        brandName: 'GM Premium SaaS', brandLogo: '🚀', accentColor: 'blue',
        roles: [{ id: 'admin', label: 'Admin' }, { id: 'dev', label: 'Developer' }],
        stats: [{ label: 'MRR', value: '$45.2k', trend: 8 }, { label: 'Users', value: '24.5k', trend: 12 }, { label: 'Churn', value: '1.2%', trend: -0.4 }, { label: 'Uptime', value: '99.9%', trend: 0 }],
        navItems: [
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'users', label: 'User Base', icon: Users },
            { id: 'git', label: 'Source Control', icon: Code2 },
            { id: 'billing', label: 'Subscription', icon: CreditCard },
        ]
    },
    ecommerce: {
        brandName: 'GM Store', brandLogo: '🛍️', accentColor: 'emerald',
        roles: [{ id: 'store_manager', label: 'Manager' }, { id: 'support', label: 'Support' }],
        stats: [{ label: 'Sales', value: '$12.8k', trend: 15 }, { label: 'Orders', value: '142', trend: 5 }, { label: 'AOV', value: '$85', trend: 2 }, { label: 'Returns', value: '2.4%', trend: -1 }],
        navItems: [
            { id: 'overview', label: 'Storefront', icon: BarChart3 },
            { id: 'products', label: 'Products', icon: Code2 },
            { id: 'orders', label: 'Orders', icon: CreditCard },
            { id: 'customers', label: 'Customers', icon: Users },
        ]
    },
    agency: {
        brandName: 'GM Creative', brandLogo: '🎨', accentColor: 'purple',
        roles: [{ id: 'director', label: 'Director' }, { id: 'designer', label: 'Designer' }],
        stats: [{ label: 'Active Projects', value: '12', trend: 0 }, { label: 'Billable Hours', value: '340', trend: 5 }, { label: 'Revenue', value: '$28.5k', trend: 10 }, { label: 'Leads', value: '8', trend: 2 }],
        navItems: [
            { id: 'overview', label: 'Dashboard', icon: BarChart3 },
            { id: 'projects', label: 'Projects', icon: Code2 },
            { id: 'invoices', label: 'Invoices', icon: CreditCard },
            { id: 'git', label: 'Git Repos', icon: Code2 },
        ]
    },
    booking: {
        brandName: 'GM Booking', brandLogo: '📅', accentColor: 'rose',
        roles: [{ id: 'manager', label: 'Manager' }, { id: 'staff', label: 'Reception' }],
        stats: [{ label: 'Bookings', value: '48', trend: 12 }, { label: 'Occupancy', value: '85%', trend: 5 }, { label: 'Revenue', value: '$4.2k', trend: 8 }, { label: 'Check-ins', value: '12', trend: 0 }],
        navItems: [
            { id: 'overview', label: 'Calendar', icon: BarChart3 },
            { id: 'reservations', label: 'Reservations', icon: Users },
            { id: 'rooms', label: 'Rooms', icon: Code2 },
            { id: 'payments', label: 'Payments', icon: CreditCard },
        ]
    }
};

const PremiumTemplate = () => {
    // Default to admin view for this demo as requested
    const [mode, setMode] = React.useState('saas');
    const { viewMode, language } = useOutletContext() || { viewMode: 'admin', language: 'en' };

    // If viewMode is explicitly 'landing', show the landing page (which we keep for verify/rollback if needed)
    // But for the purpose of "Universal Admin Demo", we highlight the Admin mainly.
    if (viewMode === 'landing') {
        return (
            <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'white' }}>
                <Hero />
                <Features />
                <Pricing />
                <Contact />
            </div>
        );
    }

    const currentConfig = configs[mode];

    return (
        <div className="relative">
            {/* Mode Switcher Overlay */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 bg-[#0c1122] p-2 rounded-2xl border border-white/10 shadow-2xl">
                <p className="text-[10px] uppercase font-bold text-slate-500 px-2 py-1">Select Industry</p>
                {Object.keys(configs).map(key => (
                    <button
                        key={key}
                        onClick={() => setMode(key)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all text-left ${mode === key ? 'bg-white text-black' : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {key} Mode
                    </button>
                ))}
            </div>

            <UniversalAdmin config={currentConfig} language={language} />
        </div>
    );
};

export default PremiumTemplate;
