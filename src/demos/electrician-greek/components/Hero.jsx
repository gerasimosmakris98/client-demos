import React from 'react';
import { Zap, Shield, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ElectricianHero = ({ t }) => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0d1117] text-white px-4 md:px-6 py-20">
            {/* Dark Tech Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(234,179,8,0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

            <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-500 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                        <Zap size={16} fill="currentColor" /> {t.hero.badge}
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] mb-6 tracking-tighter">
                        {t.hero.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">{t.hero.subtitle}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                        {t.hero.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-black transition-all shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-2 group uppercase tracking-wider text-sm">
                            {t.hero.ctaPrimary} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-md text-sm">
                            {t.hero.ctaSecondary}
                        </button>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 opacity-60">
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest"><CheckCircle size={18} className="text-yellow-500" /> {t.hero.feat1}</div>
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest"><Shield size={18} className="text-yellow-500" /> {t.hero.feat2}</div>
                    </div>
                </motion.div>

                {/* Visual Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop" className="w-full h-full object-cover" alt="Electrician Work" />
                            <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay" />
                        </div>
                    </div>

                    {/* Emergency Call Button Overlay */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-yellow-500 text-black p-4 rounded-full shadow-2xl"
                        >
                            <Phone size={24} fill="currentColor" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ElectricianHero;
