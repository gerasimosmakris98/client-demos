import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import { Users, BarChart3, CreditCard, Code2 } from 'lucide-react';
import { translations } from './translations';
import AIChat from '../../components/common/AIChat';

const PremiumTemplate = () => {
    const { viewMode, language } = useOutletContext() || { viewMode: 'admin', language: 'en' };
    const t = translations[language] || translations.en;
    const [mode, setMode] = React.useState('saas');

    const configs = {
        saas: {
            brandName: t.industries.saas.name, brandLogo: '🚀', accentColor: 'blue',
            roles: [{ id: 'admin', label: 'Admin' }, { id: 'dev', label: 'Developer' }],
            stats: [
                { label: t.industries.saas.stats[0], value: '$45.2k', trend: 8 },
                { label: t.industries.saas.stats[1], value: '24.5k', trend: 12 },
                { label: t.industries.saas.stats[2], value: '1.2%', trend: -0.4 },
                { label: t.industries.saas.stats[3], value: '99.9%', trend: 0 }
            ],
            navItems: [
                { id: 'overview', label: t.industries.saas.nav[0], icon: BarChart3 },
                { id: 'users', label: t.industries.saas.nav[1], icon: Users },
                { id: 'git', label: t.industries.saas.nav[2], icon: Code2 },
                { id: 'billing', label: t.industries.saas.nav[3], icon: CreditCard },
            ]
        },
        ecommerce: {
            brandName: t.industries.ecommerce.name, brandLogo: '🛍️', accentColor: 'emerald',
            roles: [{ id: 'store_manager', label: 'Manager' }, { id: 'support', label: 'Support' }],
            stats: [
                { label: t.industries.ecommerce.stats[0], value: '$12.8k', trend: 15 },
                { label: t.industries.ecommerce.stats[1], value: '142', trend: 5 },
                { label: t.industries.ecommerce.stats[2], value: '$85', trend: 2 },
                { label: t.industries.ecommerce.stats[3], value: '2.4%', trend: -1 }
            ],
            navItems: [
                { id: 'overview', label: t.industries.ecommerce.nav[0], icon: BarChart3 },
                { id: 'products', label: t.industries.ecommerce.nav[1], icon: Code2 },
                { id: 'orders', label: t.industries.ecommerce.nav[2], icon: CreditCard },
                { id: 'customers', label: t.industries.ecommerce.nav[3], icon: Users },
            ]
        },
        agency: {
            brandName: t.industries.agency.name, brandLogo: '🎨', accentColor: 'purple',
            roles: [{ id: 'director', label: 'Director' }, { id: 'designer', label: 'Designer' }],
            stats: [
                { label: t.industries.agency.stats[0], value: '12', trend: 0 },
                { label: t.industries.agency.stats[1], value: '340', trend: 5 },
                { label: t.industries.agency.stats[2], value: '$28.5k', trend: 10 },
                { label: t.industries.agency.stats[3], value: '8', trend: 2 }
            ],
            navItems: [
                { id: 'overview', label: t.industries.agency.nav[0], icon: BarChart3 },
                { id: 'projects', label: t.industries.agency.nav[1], icon: Code2 },
                { id: 'invoices', label: t.industries.agency.nav[2], icon: CreditCard },
                { id: 'git', label: t.industries.agency.nav[3], icon: Code2 },
            ]
        },
        booking: {
            brandName: t.industries.booking.name, brandLogo: '📅', accentColor: 'rose',
            roles: [{ id: 'manager', label: 'Manager' }, { id: 'staff', label: 'Reception' }],
            stats: [
                { label: t.industries.booking.stats[0], value: '48', trend: 12 },
                { label: t.industries.booking.stats[1], value: '85%', trend: 5 },
                { label: t.industries.booking.stats[2], value: '$4.2k', trend: 8 },
                { label: t.industries.booking.stats[3], value: '12', trend: 0 }
            ],
            navItems: [
                { id: 'overview', label: t.industries.booking.nav[0], icon: BarChart3 },
                { id: 'reservations', label: t.industries.booking.nav[1], icon: Users },
                { id: 'rooms', label: t.industries.booking.nav[2], icon: Code2 },
                { id: 'payments', label: t.industries.booking.nav[3], icon: CreditCard },
            ]
        }
    };

    useEffect(() => { window.scrollTo(0, 0); }, []);

    if (viewMode === 'landing') {
        return (
            <div className="bg-[#0c1122] min-h-screen text-white font-sans overflow-x-hidden">
                <Hero t={t} />
                <Features t={t} />
                <Pricing t={t} />
                <Contact t={t} />
                <AIChat brandName="Premium Template" />
            </div>
        );
    }

    const currentConfig = configs[mode];

    const IndustrySwitcher = ({ isMobile = false }) => (
        <div className={`${isMobile ? 'w-full' : 'fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-40 hidden lg:flex'} flex flex-col gap-1.5 bg-[#0c1122]/80 p-2 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl ${!isMobile && 'max-w-[140px] sm:max-w-none'}`}>
            <p className="text-[8px] uppercase font-black text-slate-500 px-2 py-1 tracking-[0.2em]">{t.industries.select}</p>
            <div className={`flex ${isMobile ? 'grid grid-cols-2 gap-2' : 'flex-col gap-1'}`}>
                {Object.keys(configs).map(key => (
                    <button
                        key={key}
                        onClick={() => setMode(key)}
                        className={`px-3 py-1.5 rounded-xl text-[10px] font-black capitalize transition-all text-left ${mode === key ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                    >
                        {key}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <div className="relative font-sans overflow-x-hidden min-h-screen">
            <IndustrySwitcher />

            <UniversalAdmin config={currentConfig} language={language} switcher={<IndustrySwitcher isMobile />} />
            <AIChat brandName={currentConfig.brandName} />
        </div>
    );
};

export default PremiumTemplate;
