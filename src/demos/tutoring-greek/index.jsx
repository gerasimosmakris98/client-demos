import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import TutoringHero from './components/Hero';
import PortalPreview from './components/Portal';
import AdminMock from '../../components/demos/AdminMock';

const TutoringDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        return <AdminMock
            title="Prooptiki Admin"
            stats={[
                { label: 'Total Students', value: '180', trend: 4 },
                { label: 'New Enrolls', value: '12', trend: 15 },
                { label: 'Attendance', value: '98%', trend: 1 },
                { label: 'Avg Grade', value: '17.2', trend: 0.5 }
            ]}
        />;
    }

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }}>
            <TutoringHero />
            <PortalPreview />

            <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Οι Καθηγητές μας</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: '#4b5563' }}>
                    Μια ομάδα από έμπειρους παιδαγωγούς με πάθος για τη διδασκαλία και βαθιά γνώση του αντικειμένου τους.
                </p>
            </section>
        </div>
    );
};

export default TutoringDemo;
