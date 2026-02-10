import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import LawHero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Attorneys from './components/Attorneys';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import AIChat from '../../components/common/AIChat';
import { Briefcase, Users, FileText, CalendarDays } from 'lucide-react';

const lawTabs = [
    {
        id: 'cases', label: 'Cases', icon: Briefcase, columns: ['Case', 'Status', 'Client', 'Type'],
        rows: [['Papadopoulos v. Corp', 'Active', 'Maria K.', 'Civil'], ['Estate Planning #42', 'Active', 'John D.', 'Estate'], ['IP Dispute #18', 'Pending', 'Tech Ltd', 'IP'], ['Contract Review', 'Completed', 'Elena P.', 'Commercial'], ['Employment #7', 'Active', 'George S.', 'Labor']]
    },
    {
        id: 'clients', label: 'Clients', icon: Users, columns: ['Client', 'Status', 'Cases', 'Since'],
        rows: [['Maria K.', 'Active', '2 active', 'Jan 2024'], ['Tech Ltd', 'Active', '1 active', 'Mar 2025'], ['John D.', 'Active', '1 active', 'Dec 2024'], ['Elena P.', 'Completed', '0 active', 'Feb 2025'], ['George S.', 'Active', '1 active', 'Nov 2025']]
    },
    {
        id: 'documents', label: 'Documents', icon: FileText, columns: ['Document', 'Status', 'Case', 'Date'],
        rows: [['Motion to Dismiss', 'Active', 'Case #42', 'Feb 10'], ['Deposition Draft', 'In Progress', 'Case #18', 'Feb 9'], ['Settlement Offer', 'Pending', 'Case #7', 'Feb 12'], ['Power of Attorney', 'Completed', 'Estate #42', 'Feb 8']]
    },
    {
        id: 'calendar', label: 'Calendar', icon: CalendarDays, columns: ['Event', 'Status', 'Date', 'Location'],
        rows: [['Court Hearing', 'Confirmed', 'Feb 12', 'Athens Court'], ['Client Meeting', 'Confirmed', 'Feb 13', 'Office'], ['Deposition', 'Scheduled', 'Feb 14', 'Video Call'], ['Filing Deadline', 'Pending', 'Feb 15', 'Online'], ['Mediation', 'Scheduled', 'Feb 18', 'Athens Center']]
    },
];

const LawDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Admin view removed - consolidated to Universal Admin demo

    return (
        <div style={{ fontFamily: "'Inter', sans-serif", color: '#0f172a' }}>
            <LawHero />
            <PracticeAreas />
            <Attorneys />
            <CaseStudies />
            <Testimonials />
            <Contact />
            <AIChat brandName="GM Law" />
        </div>
    );
};

export default LawDemo;
