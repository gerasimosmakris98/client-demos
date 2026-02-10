import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Educators from './components/Educators';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import AIChat from '../../components/common/AIChat';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const GymDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return <UniversalAdmin config={{
            brandName: 'GM Gym',
            brandLogo: '💪',
            accentColor: 'lime',
            roles: [{ id: 'admin', label: 'Owner' }, { id: 'staff', label: 'Trainer' }, { id: 'user', label: 'Reception' }],
            stats: [
                { label: 'Active Members', value: '842', trend: 12 },
                { label: 'New Signups', value: '45', trend: 8 },
                { label: 'Check-ins Today', value: '128', trend: 5 },
                { label: 'Revenue', value: '€12.4k', trend: 15 }
            ],
            kpis: [
                { label: 'Equipment Uptime', value: '99%', progress: 99 },
                { label: 'Peak Utilization', value: '85%', progress: 85 },
                { label: 'Membership Growth', value: '+8%', progress: 65 }
            ]
        }} />;
    }

    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-lime-500 selection:text-black">
            <Hero />
            <Programs />
            <Educators />
            <Pricing />
            <FAQ />
            <AIChat brandName="GM Gym" />
        </div>
    );
};

export default GymDemo;
