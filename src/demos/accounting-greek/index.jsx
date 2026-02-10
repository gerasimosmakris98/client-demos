import React, { useEffect } from 'react';
import AIChat from '../../components/common/AIChat';

const AccountingDemo = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-[#0c0e1a] min-h-screen text-white font-sans">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#0c0e1a] to-violet-950" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-indigo-500/30 rounded-full bg-indigo-500/10 text-indigo-400 font-mono text-xs tracking-widest uppercase mb-8">
                        Certified Public Accountants
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                        GM <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">ACCOUNTING</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        Λογιστικές & φοροτεχνικές υπηρεσίες για επιχειρήσεις και ιδιώτες. Αξιοπιστία & εμπειρία.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-indigo-600 hover:bg-indigo-500 px-10 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-indigo-500/20">Δωρεάν Συμβουλή</button>
                        <button className="border border-white/20 hover:bg-white/10 px-10 py-4 rounded-xl font-bold transition-colors">Υπηρεσίες</button>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">ΥΠΗΡΕΣΙΕΣ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Φορολογικές Δηλώσεις', 'Λογιστική Παρακολούθηση', 'Μισθοδοσία', 'Σύσταση Εταιρείας', 'Φοροτεχνικός Σχεδιασμός', 'Ελεγκτική'].map((s, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors">
                                <div className="text-3xl mb-4">📊</div>
                                <h3 className="text-xl font-bold mb-2">{s}</h3>
                                <p className="text-gray-500 text-sm">Πλήρης κάλυψη και υποστήριξη από εξειδικευμένους συμβούλους.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 text-center text-gray-600 text-sm">
                © 2026 GM Accounting. All rights reserved.
            </footer>
            <AIChat brandName="GM Accounting" />
        </div>
    );
};

export default AccountingDemo;
