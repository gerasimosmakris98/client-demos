import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import { Users, BarChart3, CreditCard, Code2 } from 'lucide-react';

const saasTab = [
    {
        id: 'users', label: 'Users', icon: Users, columns: ['User', 'Status', 'Plan', 'MRR'],
        rows: [['Acme Inc', 'Active', 'Enterprise', '$2,400'], ['StartupCo', 'Active', 'Pro', '$99'], ['DevTeam', 'Active', 'Pro', '$99'], ['BigCorp', 'Pending', 'Enterprise', '$2,400'], ['Solo Dev', 'Active', 'Basic', '$19']]
    },
    {
        id: 'analytics', label: 'Analytics', icon: BarChart3, columns: ['Metric', 'Status', 'Value', 'Change'],
        rows: [['Daily Active', 'Active', '8,421', '+12%'], ['Retention D7', 'Active', '68%', '+3%'], ['Avg Session', 'Active', '4.2 min', '+8%'], ['Conversion', 'Active', '3.8%', '+0.5%'], ['Churn', 'Pending', '1.2%', '-0.2%']]
    },
    {
        id: 'billing', label: 'Billing', icon: CreditCard, columns: ['Invoice', 'Status', 'Customer', 'Amount'],
        rows: [['INV-8801', 'Paid', 'Acme Inc', '$2,400'], ['INV-8802', 'Paid', 'StartupCo', '$99'], ['INV-8803', 'Pending', 'BigCorp', '$2,400'], ['INV-8804', 'Paid', 'DevTeam', '$99'], ['INV-8805', 'Overdue', 'OldClient', '$49']]
    },
    {
        id: 'api', label: 'API', icon: Code2, columns: ['Endpoint', 'Status', 'Calls/day', 'Latency'],
        rows: [['/v1/users', 'Active', '45,200', '42ms'], ['/v1/data', 'Active', '128,400', '18ms'], ['/v1/auth', 'Active', '12,800', '65ms'], ['/v1/webhooks', 'Active', '3,600', '120ms'], ['/v1/export', 'Pending', '450', '2.1s']]
    },
];

const PremiumTemplate = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return <UniversalAdmin config={{
            brandName: 'GM Premium SaaS',
            brandLogo: '🚀',
            accentColor: 'blue',
            roles: [{ id: 'admin', label: 'Admin' }, { id: 'staff', label: 'Developer' }, { id: 'user', label: 'Support' }],
            stats: [
                { label: 'Total Users', value: '24,593', trend: 12 },
                { label: 'MRR', value: '$45,200', trend: 8 },
                { label: 'Churn Rate', value: '1.2%', trend: -0.4 },
                { label: 'Active Sessions', value: '1,204', trend: 5 }
            ],
            kpis: [
                { label: 'Uptime SLA', value: '99.99%', progress: 99 },
                { label: 'NPS Score', value: '72', progress: 72 },
                { label: 'Feature Adoption', value: '64%', progress: 64 }
            ],
            customTabs: saasTab,
        }} />;
    }

    return (
        <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'white' }}>
            <Hero />
            <Features />
            <Pricing />
            <Contact />

            {/* Footer removed for DemoLayout */}
        </div>
    );
};

export default PremiumTemplate;
