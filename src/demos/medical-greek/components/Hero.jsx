import React from 'react';
import { Activity, ArrowRight, Shield, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const MedicalHero = ({ t }) => {
    return (
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-slate-50 text-slate-900 px-4 md:px-6 py-20">
            {/* Soft Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05)_0%,transparent_50%)]" />

            <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-600 text-xs font-bold uppercase tracking-widest mb-8">
                        <Activity size={16} /> {t.hero.badge}
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight text-slate-900">
                        {t.hero.title} <br />
                        <span className="text-blue-600 italic">{t.hero.subtitle}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                        {t.hero.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group">
                            {t.hero.ctaPrimary} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-2xl font-bold transition-all shadow-sm">
                            {t.hero.ctaSecondary}
                        </button>
                    </div>

                    <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale transition-all hover:grayscale-0">
                        <div className="flex items-center gap-2"><Shield size={20} /> <span className="text-sm font-bold">ISO Certified</span></div>
                        <div className="flex items-center gap-2"><Stethoscope size={20} /> <span className="text-sm font-bold">Expert Care</span></div>
                    </div>
                </motion.div>

                {/* Image Group */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-[500px] h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop" className="w-full h-full object-cover" alt="Medical Care" />
                        <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                    </div>
                    {/* Floating Stat Card */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[200px]">
                        <p className="text-3xl font-black text-blue-600 mb-1">24/7</p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest line-clamp-2">{t.hero.support}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MedicalHero;
