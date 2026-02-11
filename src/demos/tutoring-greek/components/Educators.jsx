import React from 'react';
import { Users, CheckCircle, Briefcase, Zap } from 'lucide-react';

const Educators = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-sm uppercase mb-6 border border-blue-500/20">
                            <Briefcase size={16} /> {t.badge}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {t.title} <br />
                            <span className="text-blue-400">{t.highlight}</span>
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            {t.desc}
                        </p>

                        <div className="space-y-4 mb-10">
                            {t.features.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 mt-1 shrink-0" size={20} />
                                    <span className="text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/50 flex items-center gap-2">
                            <Zap size={20} /> {t.cta}
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                        <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                            {/* Mock Interface showing Teacher Dashboard preview */}
                            <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                                <div>
                                    <h3 className="font-bold text-lg text-white">{t.dashboardTitle}</h3>
                                    <p className="text-sm text-slate-400">{t.dashboardSub}</p>
                                </div>
                                <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                                    {t.activeStudio}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-slate-700/50 p-4 rounded-xl">
                                    <p className="text-slate-400 text-xs mb-1">{t.currentStudents}</p>
                                    <p className="text-2xl font-bold text-white">24</p>
                                </div>
                                <div className="bg-slate-700/50 p-4 rounded-xl">
                                    <p className="text-slate-400 text-xs mb-1">{t.monthlyRevenue}</p>
                                    <p className="text-2xl font-bold text-white">€1.850</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs">MK</div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-white">Μαρία Κ.</p>
                                        <p className="text-xs text-slate-400">Μαθηματικά Γ' Λυκείου</p>
                                    </div>
                                    <span className="text-xs text-green-400">Ολοκληρώθηκε</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">ΓΠ</div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-white">Γιώργος Π.</p>
                                        <p className="text-xs text-slate-400">Φυσική Α' Λυκείου</p>
                                    </div>
                                    <span className="text-xs text-yellow-400">Σε εξέλιξη</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Educators;
