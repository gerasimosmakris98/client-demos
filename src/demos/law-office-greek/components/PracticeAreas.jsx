import React from 'react';
import { Briefcase, Users, Home, ShieldCheck } from 'lucide-react';

const practices = [
    {
        icon: <Briefcase size={32} />,
        title: 'Εταιρικό Δίκαιο',
        desc: 'Συμβουλές για συστάσεις εταιρειών, συγχωνεύσεις και εμπορικές συμφωνίες.'
    },
    {
        icon: <Users size={32} />,
        title: 'Οικογενειακό Δίκαιο',
        desc: 'Διαζύγια, επιμέλεια τέκνων και διατροφές με διακριτικότητα και σεβασμό.'
    },
    {
        icon: <Home size={32} />,
        title: 'Ακίνητα & Real Estate',
        desc: 'Έλεγχοι τίτλων, μισθώσεις και αγοραπωλησίες ακινήτων.'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: 'Ποινικό Δίκαιο',
        desc: 'Υπεράσπιση σε κάθε στάδιο της ποινικής διαδικασίας.'
    }
];

const PracticeAreas = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">{t.practiceAreas.badge}</span>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-50 mt-2 italic">{t.practiceAreas.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {t.practiceAreas.items.map((item, index) => (
                        <div key={index} className="glass-panel p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellow-600/50 transition-all group rounded-2xl">
                            <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform">
                                {index === 0 && <Briefcase size={40} strokeWidth={1.5} />}
                                {index === 1 && <ShieldCheck size={40} strokeWidth={1.5} />}
                                {index === 2 && <Home size={40} strokeWidth={1.5} />}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base italic">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
