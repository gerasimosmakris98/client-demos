import React, { useEffect } from 'react';
import AIChat from '../../components/common/AIChat';

const StudioDemo = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-[#0d0015] min-h-screen text-white font-sans">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-[#0d0015] to-[#0d0015]" />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="text-fuchsia-400 font-mono text-xs tracking-[0.3em] uppercase mb-8">Body • Mind • Soul</div>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                        GM <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">STUDIO</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        Yoga, Pilates & Wellness σε έναν χώρο σχεδιασμένο για εσωτερική ηρεμία και σωματική δύναμη.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-10 py-4 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow">Δοκιμαστικό Μάθημα</button>
                        <button className="border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">Πρόγραμμα</button>
                    </div>
                </div>
            </section>

            {/* Classes */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">ΜΑΘΗΜΑΤΑ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Vinyasa Yoga', time: 'Δευ-Παρ 07:00', level: 'All Levels' },
                            { name: 'Power Pilates', time: 'Τρ-Πεμ 18:00', level: 'Intermediate' },
                            { name: 'Meditation', time: 'Καθημερινά 20:00', level: 'Beginner' },
                            { name: 'Barre Fitness', time: 'Δευ-Τετ 10:00', level: 'All Levels' },
                            { name: 'Yin Yoga', time: 'Σαβ 09:00', level: 'All Levels' },
                            { name: 'HIIT Flow', time: 'Παρ 17:00', level: 'Advanced' }
                        ].map((c, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-fuchsia-500/50 transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold mb-2">{c.name}</h3>
                                <p className="text-gray-500 text-sm mb-4">{c.time}</p>
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold">{c.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 text-center text-gray-600 text-sm">
                © 2026 GM Fitness Studio. All rights reserved.
            </footer>
            <AIChat brandName="GM Fitness Studio" />
        </div>
    );
};

export default StudioDemo;
