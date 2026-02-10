import React, { useEffect, Suspense } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Users, BookOpen, Calendar, TrendingUp } from 'lucide-react';
import TutoringHero from './components/Hero';
import Programs from './components/Programs';
import Educators from './components/Educators';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import AIChat from '../../components/common/AIChat';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const tutoringTabs = [
    {
        id: 'students', label: 'Students', icon: Users, columns: ['Student', 'Status', 'Program', 'Grade'],
        rows: [['Maria K.', 'Active', 'IELTS Prep', 'A'], ['John D.', 'Active', 'Math Advanced', 'B+'], ['Elena P.', 'Active', 'Greek Literature', 'A-'], ['George S.', 'Pending', 'Physics 101', '--'], ['Anna M.', 'Active', 'English B2', 'A'], ['Nikos T.', 'Active', 'Algebra', 'B']]
    },
    {
        id: 'lessons', label: 'Lessons', icon: BookOpen, columns: ['Lesson', 'Status', 'Teacher', 'Time'],
        rows: [['IELTS Writing', 'Scheduled', 'Dr. Papadopoulos', '10:00'], ['Math Analysis', 'In Progress', 'K. Stavros', '11:30'], ['Greek Lit.', 'Completed', 'M. Alexiou', '09:00'], ['Physics Lab', 'Scheduled', 'N. Georgiou', '14:00'], ['English Conv.', 'Completed', 'S. Williams', '08:00']]
    },
    {
        id: 'calendar', label: 'Calendar', icon: Calendar, columns: ['Day', 'Status', 'Lessons', 'Students'],
        rows: [['Monday', 'Active', '12 lessons', '28'], ['Tuesday', 'Active', '10 lessons', '24'], ['Wednesday', 'Active', '14 lessons', '32'], ['Thursday', 'Active', '11 lessons', '26'], ['Friday', 'Active', '8 lessons', '18'], ['Saturday', 'Pending', '4 lessons', '10']]
    },
    {
        id: 'progress', label: 'Progress', icon: TrendingUp, columns: ['Student', 'Status', 'Score', 'Improvement'],
        rows: [['Maria K.', 'Active', '92%', '+8%'], ['John D.', 'Active', '85%', '+12%'], ['Elena P.', 'Active', '94%', '+5%'], ['George S.', 'Pending', '71%', '+3%'], ['Anna M.', 'Active', '89%', '+7%'], ['Nikos T.', 'Active', '78%', '+15%']]
    },
];

const TutoringDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return (
            <UniversalAdmin config={{
                brandName: 'GM Tutoring',
                brandLogo: '🎓',
                accentColor: 'emerald',
                roles: [{ id: 'admin', label: 'Director' }, { id: 'staff', label: 'Teacher' }, { id: 'user', label: 'Student' }],
                stats: [
                    { label: 'Active Students', value: '1,247', trend: 12 },
                    { label: 'Revenue (Month)', value: '€45.2k', trend: 8 },
                    { label: 'Enrolled Courses', value: '86', trend: 5 },
                    { label: 'Pass Rate', value: '98.7%', trend: 2 }
                ],
                kpis: [
                    { label: 'Student Satisfaction', value: '96%', progress: 96 },
                    { label: 'Teacher Retention', value: '94%', progress: 94 },
                    { label: 'Course Completion', value: '89%', progress: 89 }
                ],
                customTabs: tutoringTabs,
            }} />
        );
    }

    return (
        <div className="font-sans text-gray-900 bg-white" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
            <TutoringHero />
            <Programs />
            <Educators />
            <Pricing />
            <FAQ />

            {/* CTA Footer for Landing Page */}
            <section className="py-20 bg-blue-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Έτοιμοι να ξεκινήσετε;</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Κλείστε ένα δωρεάν δοκιμαστικό μάθημα σήμερα ή περιηγηθείτε στην πλατφόρμα μας.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                            Δωρεάν Δοκιμαστικό
                        </button>
                        <button className="bg-blue-700 border border-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors">
                            Επικοινωνία
                        </button>
                    </div>
                </div>
            </section>

            <AIChat brandName="GM Tutoring" />
        </div>
    );
};

export default TutoringDemo;
