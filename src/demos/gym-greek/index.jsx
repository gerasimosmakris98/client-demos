import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Educators from './components/Educators';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import AIChat from '../../components/common/AIChat';
import AdminMock from '../../components/demos/AdminMock';

const GymDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return <AdminMock
            title="GM Gym"
            stats={[
                { label: 'Active Members', value: '842', trend: 12 },
                { label: 'New Signups', value: '45', trend: 8 },
                { label: 'Check-ins Today', value: '128', trend: 5 },
                { label: 'Revenue', value: '€12.4k', trend: 15 }
            ]}
        />;
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
