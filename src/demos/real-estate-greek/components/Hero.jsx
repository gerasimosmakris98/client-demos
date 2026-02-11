import React from 'react';
import { Home, Search, MapPin, Key, ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const RealEstateHero = ({ t }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white px-4 md:px-6 py-20">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6199f7d009?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                        <Home size={16} /> {t.hero.badge}
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8 tracking-tighter uppercase">
                        {t.hero.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">{t.hero.subtitle}</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light italic">
                        {t.hero.desc}
                    </p>

                    {/* Search Bar - Desktop Only */}
                    <div className="hidden md:flex items-center bg-white/10 backdrop-blur-2xl border border-white/20 p-2 rounded-2xl max-w-3xl mx-auto mb-12 shadow-2xl">
                        <div className="flex-1 flex items-center gap-3 px-6 border-r border-white/10">
                            <MapPin size={20} className="text-emerald-400" />
                            <input type="text" placeholder={t.hero.searchLoc} className="bg-transparent border-none outline-none text-white w-full placeholder:text-slate-500" />
                        </div>
                        <div className="flex-1 flex items-center gap-3 px-6">
                            <Building2 size={20} className="text-emerald-400" />
                            <select className="bg-transparent border-none outline-none text-white w-full appearance-none cursor-pointer">
                                <option className="bg-slate-900">{t.hero.searchType}</option>
                                <option className="bg-slate-900">Apartment</option>
                                <option className="bg-slate-900">Villa</option>
                            </select>
                        </div>
                        <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-4 rounded-xl transition-all shadow-xl shadow-emerald-500/20">
                            <Search size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black transition-all shadow-2xl flex items-center justify-center gap-3 group uppercase tracking-widest text-sm">
                            <Key size={20} /> {t.hero.ctaPrimary}
                        </button>
                        <button className="border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black transition-all backdrop-blur-md uppercase tracking-widest text-sm">
                            {t.hero.ctaSecondary}
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Visual Element (Mobile Friendly) */}
            <div className="absolute bottom-10 inset-x-0 flex justify-center opacity-30">
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <div className="w-px h-16 bg-gradient-to-b from-emerald-500 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default RealEstateHero;
