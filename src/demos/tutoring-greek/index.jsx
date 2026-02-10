import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import TutoringHero from './components/Hero';
import Programs from './components/Programs';
import Educators from './components/Educators';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Dashboard from './components/Dashboard';
import AIChat from '../../components/common/AIChat';

const TutoringDemo = () => {
    const { viewMode } = useOutletContext() || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // If "Admin", "Teacher", or "Student" view is selected in the future Overlay
    // For now, we'll build the Dashboard component to handle its own internal state
    // but if the global viewMode is 'admin', we show the Dashboard directly.
    if (viewMode === 'admin') {
        return (
            <>
                <Dashboard initialRole="admin" />
                <AIChat brandName="GM Tutoring" />
            </>
        );
    }

    return (
        <div className="font-sans text-gray-900 bg-white">
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
