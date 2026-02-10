import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Educators from './components/Educators';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import AIChat from '../../components/common/AIChat';
import { Users, Dumbbell, Wrench, Award } from 'lucide-react';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const gymTabs = [
    {
        id: 'members', label: 'Members', icon: Users, columns: ['Member', 'Status', 'Plan', 'Since'],
        rows: [['Maria K.', 'Active', 'Premium', 'Jan 2025'], ['John D.', 'Active', 'Basic', 'Mar 2025'], ['Elena P.', 'Active', 'Premium', 'Dec 2024'], ['George S.', 'Pending', 'Trial', 'Feb 2026'], ['Anna M.', 'Active', 'Basic', 'Nov 2025']]
    },
    {
        id: 'classes', label: 'Classes', icon: Dumbbell, columns: ['Class', 'Status', 'Trainer', 'Spots'],
        rows: [['CrossFit AM', 'Active', 'Coach Nikos', '18/20'], ['Yoga Flow', 'Scheduled', 'Maria T.', '12/15'], ['HIIT Express', 'Active', 'Coach Alex', '20/20'], ['Spinning', 'Scheduled', 'Coach Elena', '8/25'], ['Boxing', 'Active', 'Coach Dimitri', '14/16']]
    },
    {
        id: 'equipment', label: 'Equipment', icon: Wrench, columns: ['Equipment', 'Status', 'Zone', 'Last Service'],
        rows: [['Treadmill #1-5', 'Active', 'Cardio', '2 weeks ago'], ['Power Rack A', 'Active', 'Weights', '1 month ago'], ['Rowing Machine', 'Pending', 'Cardio', 'Service due'], ['Cable Machine', 'Active', 'Weights', '3 weeks ago'], ['Spin Bikes', 'Active', 'Studio', '5 days ago']]
    },
    {
        id: 'trainers', label: 'Trainers', icon: Award, columns: ['Trainer', 'Status', 'Specialty', 'Clients'],
        rows: [['Coach Nikos', 'Active', 'CrossFit', '32'], ['Maria T.', 'Active', 'Yoga', '28'], ['Coach Alex', 'Active', 'HIIT', '45'], ['Coach Elena', 'Active', 'Spinning', '24'], ['Coach Dimitri', 'Active', 'Boxing', '18']]
    },
];

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
            ],
            customTabs: gymTabs,
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
